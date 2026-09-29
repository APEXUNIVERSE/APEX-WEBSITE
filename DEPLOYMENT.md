# APEX SQUAD UPDATE 2 - Vercel Deployment Guide

## Overview
This project has been configured for Vercel deployment with serverless functions for the Google Drive video upload feature.

## Key Changes for Vercel

### 1. Vercel Configuration (`vercel.json`)
- SPA rewrites for client-side routing
- Serverless function at `api/upload-drive.ts` with 300s timeout and 1GB memory
- CORS headers for API routes

### 2. Serverless Function (`api/upload-drive.ts`)
- Adapted from Express `server.ts` to Vercel serverless function format
- Uses `busboy` for multipart form parsing (Vercel doesn't use multer)
- Streaming upload to Google Drive with resumable upload API

### 3. Build Script (`package.json`)
- Simplified to `vite build` only (Vercel handles serverless functions separately)
- No need to bundle Express server

### 4. Frontend API Calls
- Existing `/api/upload-drive` endpoint works with Vercel automatically
- No changes needed in `App.tsx`

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### 2. Import to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite framework

### 3. Configure Environment Variables
In Vercel Project Settings → Environment Variables, add:

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |
| `GOOGLE_REFRESH_TOKEN` | Google OAuth Refresh Token | Yes |
| `GEMINI_API_KEY` | Google Gemini API Key (for AI chat) | Optional |

**To get Google Drive credentials:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create/select project → Enable **Google Drive API**
3. Create OAuth 2.0 credentials (Web application)
4. Get refresh token using OAuth Playground or script
5. Add to Vercel Environment Variables

### 4. Deploy
Click "Deploy" - Vercel will build and deploy automatically.

## Local Development

```bash
# Install dependencies
npm install

# Development server (Vite + Express)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing Video Upload

1. Deploy to Vercel
2. Navigate to the deployed site
3. Scroll to "SUBMIT YOUR CLUTCH CLIPS" section
4. Drag & drop or click to upload a video file
5. Enter a title and click "Just Upload"
6. Video will upload to Google Drive and open in new tab

## Troubleshooting

### "Google Drive credentials not fully configured"
- Ensure all 3 environment variables are set in Vercel
- Check spelling: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`

### "Google Drive API not enabled"
- Go to [Google Cloud Console APIs](https://console.cloud.google.com/apis/library/drive.googleapis.com)
- Enable "Google Drive API" for your project

### Upload fails / times out
- Check Vercel Function Logs for detailed errors
- Large files (>100MB) may timeout - Vercel has 300s max
- Ensure Google Drive has sufficient quota

### CORS errors
- The `vercel.json` includes CORS headers for `/api/*`
- If issues persist, check browser console for specific errors

## File Structure

```
APEX-SQUAD-UPDATE-2/
├── api/
│   └── upload-drive.ts      # Vercel serverless function
├── src/
│   ├── App.tsx              # Main app with clip uploader
│   └── components/          # React components
├── vercel.json              # Vercel configuration
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
└── .env.vercel.example      # Environment variables template
```

## Notes

- **File size limit**: Vercel serverless functions have 50MB request body limit by default. For larger videos, consider:
  - Chunked upload to Google Drive
  - Direct client-to-Drive upload with signed URLs
  - Using a dedicated upload service (Tus, Uppy)

- **Memory limit**: 1GB allocated for video processing

- **Timeout**: 300s (5 minutes) max for upload function