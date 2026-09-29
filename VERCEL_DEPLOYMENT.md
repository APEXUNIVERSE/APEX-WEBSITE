# Vercel Deployment Guide for APEX SQUAD UPDATE 2

This project is configured for deployment on Vercel with serverless functions for video upload to Google Drive.

## Quick Deploy

1. **Push to GitHub** - Ensure your code is in a GitHub repository
2. **Import to Vercel** - Go to [Vercel Dashboard](https://vercel.com/dashboard) → "Add New..." → "Project"
3. **Select Repository** - Choose your APEX-SQUAD-UPDATE-2 repo
4. **Configure Environment Variables** - Add the following in Vercel Project Settings → Environment Variables:

### Required Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth 2.0 Client Secret | Yes |
| `GOOGLE_REFRESH_TOKEN` | Google OAuth 2.0 Refresh Token | Yes |
| `GEMINI_API_KEY` | Google Gemini API key for AI chat | No |

### Legacy Variable Names (also supported)

| Variable | Description |
|----------|-------------|
| `YOUTUBE_CLIENT_ID` | Fallback for Google Client ID |
| `YOUTUBE_CLIENT_SECRET` | Fallback for Google Client Secret |
| `YOUTUBE_REFRESH_TOKEN` | Fallback for Google Refresh Token |

## Google Drive API Setup

1. **Create Google Cloud Project** - Go to [Google Cloud Console](https://console.cloud.google.com)
2. **Enable Google Drive API** - APIs & Services → Library → Google Drive API → Enable
3. **Create OAuth 2.0 Credentials**:
   - APIs & Services → Credentials → Create Credentials → OAuth Client ID
   - Application Type: Web Application
   - Authorized Redirect URIs: `https://developers.google.com/oauthplayground` (for testing)
4. **Get Refresh Token**:
   - Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
   - Settings (gear icon) → Check "Use your own OAuth credentials"
   - Enter your Client ID & Secret
   - Step 1: Select "Drive API v3" → `https://www.googleapis.com/auth/drive`
   - Authorize APIs → Exchange authorization code for tokens
   - Copy the **Refresh Token**

## Project Structure

```
APEX-SQUAD-UPDATE-2/
├── api/
│   └── upload-drive.ts      # Vercel Serverless Function (300s max)
├── src/
│   ├── components/          # React components
│   └── App.tsx              # Main app with video upload UI
├── vercel.json              # Vercel configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env.example             # Environment variables template
```

## Configuration Details

### `vercel.json`
- **buildCommand**: `npm run build` (uses Vite)
- **outputDirectory**: `dist` (Vite default)
- **framework**: `vite`
- **rewrites**: SPA routing to index.html
- **functions**: API routes with 300s timeout for large video uploads
- **headers**: CORS headers for API endpoints

### `api/upload-drive.ts`
- Serverless function using `@vercel/node`
- Multipart form parsing with `busboy`
- Google Drive Resumable Upload API
- 300-second max duration for large files

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (uses Express server.ts)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Video Upload Flow

1. User drags/drops video file in "Submit Your Clutch Clips" section
2. Frontend validates file type (video/*) and size
3. User enters clip title
4. FormData sent to `/api/upload-drive` (POST)
5. Serverless function:
   - Parses multipart form
   - Exchanges refresh token for access token
   - Initializes Google Drive resumable upload
   - Streams video to Google Drive
   - Returns file ID and view URL
6. Frontend opens Google Drive link in new tab

## Limits & Considerations

| Limit | Value |
|-------|-------|
| Max Function Duration | 300 seconds (5 minutes) |
| Max Request Body | 100 MB (Vercel limit) |
| Max Video Size | ~250 MB (frontend limit) |
| Supported Formats | MP4, MOV, WebM |

## Troubleshooting

### "Google Drive credentials not fully configured"
- Verify all 3 environment variables are set in Vercel
- Check variable names match exactly: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`

### "Failed to authenticate with Google Drive API"
- Verify Google Drive API is enabled in Cloud Console
- Check OAuth credentials are correct
- Ensure refresh token hasn't expired (re-generate if needed)

### "Video payload transmission failed" / Timeout
- Large videos may exceed 300s function timeout
- Consider compressing videos before upload
- Vercel Pro plan allows up to 60s on Hobby, 300s on Pro

### CORS Errors
- API routes have CORS headers configured in vercel.json
- Ensure you're calling `/api/upload-drive` from same origin

## Cost Considerations

- **Vercel Hobby**: Free tier includes 100GB bandwidth, serverless functions
- **Google Drive API**: Free tier includes generous quotas
- **Bandwidth**: Video uploads consume Vercel bandwidth

## Support

For issues with:
- **Vercel Deployment**: Check Vercel Dashboard → Functions logs
- **Google Drive API**: Check Cloud Console → APIs & Services → Drive API metrics
- **Frontend**: Browser DevTools → Network tab → Check `/api/upload-drive` requests