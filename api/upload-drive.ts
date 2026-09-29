import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync, unlinkSync, existsSync } from 'fs';
import { tmpdir } from 'os';
import Busboy from 'busboy';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<string> {
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  if (!tokenResponse.ok) {
    const errText = await tokenResponse.text();
    throw new Error(`Token refresh failed: ${errText}`);
  }

  const tokenData = await tokenResponse.json() as { access_token: string };
  return tokenData.access_token;
}

async function initializeResumableUpload(
  accessToken: string,
  fileName: string,
  fileSize: number,
  mimeType: string,
  description: string
): Promise<string> {
  const driveMetadata = {
    name: fileName,
    description,
    mimeType,
  };

  const initUploadResponse = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Upload-Content-Length': fileSize.toString(),
        'X-Upload-Content-Type': mimeType,
      },
      body: JSON.stringify(driveMetadata),
    }
  );

  if (!initUploadResponse.ok) {
    const errText = await initUploadResponse.text();
    throw new Error(`Google Drive Resumable initialization failed: ${errText}`);
  }

  const uploadUrl = initUploadResponse.headers.get('Location');
  if (!uploadUrl) {
    throw new Error('Failed to retrieve resumable upload URL from Google Drive API headers.');
  }

  return uploadUrl;
}

async function uploadVideoToDrive(uploadUrl: string, videoBuffer: Buffer, fileSize: number, mimeType: string) {
  const videoUploadResponse = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Content-Length': fileSize.toString(),
      'Content-Type': mimeType,
    },
    body: videoBuffer,
  });

  if (!videoUploadResponse.ok) {
    const errText = await videoUploadResponse.text();
    throw new Error(`Video payload transmission failed: ${errText}`);
  }

  return await videoUploadResponse.json() as { id: string; name: string };
}

function parseMultipartForm(req: VercelRequest): Promise<{ file: Buffer; fileName: string; mimeType: string; title?: string; description?: string }> {
  return new Promise((resolve, reject) => {
    const bb = Busboy({ headers: req.headers as Record<string, string> });
    const chunks: Buffer[] = [];
    let fileName = '';
    let mimeType = '';
    let title = '';
    let description = '';

    bb.on('file', (_fieldname, file, info) => {
      fileName = info.filename;
      mimeType = info.mimeType;
      file.on('data', (data: Buffer) => chunks.push(data));
    });

    bb.on('field', (fieldname, value) => {
      if (fieldname === 'title') title = value;
      if (fieldname === 'description') description = value;
    });

    bb.on('close', () => {
      const buffer = Buffer.concat(chunks);
      resolve({ file: buffer, fileName, mimeType, title, description });
    });

    bb.on('error', reject);
    req.pipe(bb);
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { file, fileName, mimeType, title, description } = await parseMultipartForm(req);

    if (!file || file.length === 0) {
      return res.status(400).json({ success: false, error: 'No video file uploaded.' });
    }

    const clientId = process.env.GOOGLE_CLIENT_ID || process.env.YOUTUBE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET || process.env.YOUTUBE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN || process.env.YOUTUBE_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(412).json({
        success: false,
        error: 'Google Drive credentials not fully configured.',
        configured: {
          clientId: !!clientId,
          clientSecret: !!clientSecret,
          refreshToken: !!refreshToken,
        },
        message: 'To enable direct automated upload to Google Drive, you must configure GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN in your Vercel Environment Variables.',
      });
    }

    console.log('Refreshing Google OAuth access token...');
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);

    console.log('Initializing Google Drive resumable upload session...');
    const uploadUrl = await initializeResumableUpload(
      accessToken,
      title ? (title.endsWith('.mp4') || title.endsWith('.mov') || title.endsWith('.webm') ? title : `${title}.mp4`) : `Apex_Ilets_Clip_${Date.now()}.mp4`,
      file.length,
      mimeType,
      description || 'Apex Ilets Warzone clutch gameplay submitted by community members.'
    );

    console.log('Streaming video payload to Google Drive...');
    const resultData = await uploadVideoToDrive(uploadUrl, file, file.length, mimeType);

    console.log('Google Drive Upload Complete! File ID:', resultData.id);

    return res.status(200).json({
      success: true,
      fileId: resultData.id,
      videoUrl: `https://drive.google.com/file/d/${resultData.id}/view`,
      message: 'Tactical Clip successfully uploaded to Google Drive!',
    });

  } catch (error: any) {
    console.error('Unhandled upload error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error occurred during transmission.',
      details: error.message,
    });
  }
}