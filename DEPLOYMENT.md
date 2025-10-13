# Deployment Guide for Vercel

This guide will help you deploy your DJSanch Portfolio to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a GitHub repository

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure Project (Optional)**
   - Project Name: `djsanch-portfolio` (or your preferred name)
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `next build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `djsanch-portfolio`
   - In which directory is your code located? `./`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to add environment variables:

1. **Via Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables (e.g., API keys, database URLs)

2. **Via CLI**
   ```bash
   vercel env add VARIABLE_NAME
   ```

## Custom Domain

To add a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed by Vercel

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches and pull requests

## Build Configuration

The project includes optimized configurations:

- **`vercel.json`**: Vercel-specific settings with security headers
- **`next.config.ts`**: Next.js optimizations for production
- **`.gitignore`**: Excludes build artifacts and sensitive files

## Performance Optimizations

This deployment includes:

✅ Standalone output for optimal bundle size
✅ Image optimization (AVIF/WebP)
✅ Compression enabled
✅ Security headers configured
✅ React strict mode enabled

## Monitoring & Analytics

Enable Vercel Analytics:

1. Go to your project dashboard
2. Navigate to "Analytics"
3. Enable Web Analytics (free tier available)

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to test

### Environment Variables Not Working

1. Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
2. Redeploy after adding new environment variables

### Images Not Loading

1. Check that images are in the `public` folder
2. Verify image paths start with `/`
3. Ensure image files are committed to Git

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections are visible
- [ ] Navigation works smoothly
- [ ] Contact form functions properly
- [ ] Images load correctly
- [ ] Mobile responsiveness works
- [ ] Update social links with actual URLs
- [ ] Add custom domain (optional)
- [ ] Enable analytics (optional)
- [ ] Set up custom 404 page (optional)

## Continuous Deployment

Every time you push to GitHub:
1. Vercel automatically detects the changes
2. Runs the build process
3. Deploys the new version
4. Provides a preview URL for each deployment

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Note**: The first deployment might take 2-3 minutes. Subsequent deployments are typically faster (30-60 seconds).
