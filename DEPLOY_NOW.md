# DEPLOY NOW - Quick Start

Your HellxStudio project is ready to deploy. Follow these exact steps.

## Step 1: Push to GitHub (2 minutes)

```bash
# Open terminal and run these commands:
git remote add origin https://github.com/YOUR_USERNAME/hellxstudio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Deploy to Cloudflare Pages (3 minutes)

1. Go to https://dash.cloudflare.com
2. Click **Pages** (left sidebar)
3. Click **Create a project** → **Connect to Git**
4. Authorize GitHub and select your `hellxstudio` repo
5. Fill in build settings:
   - **Project name**: `hellxstudio`
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `pnpm install && pnpm build`
   - **Build output directory**: `.next`
6. Click **Save and Deploy**

Wait for the build to complete. You'll see a live URL like:
```
https://hellxstudio.pages.dev
```

## Step 3: (Optional) Add Custom Domain

After deployment completes:
1. In Cloudflare Pages → **Custom domains**
2. Add your domain: `hellxstudio.kindle.com`
3. Follow Cloudflare's DNS instructions

## That's it! 🎉

Your site is now live and deployed to Cloudflare's global CDN.

Every time you push to GitHub, Cloudflare automatically rebuilds and redeploys.

---

**Current project location**: `/vercel/share/v0-project`

**Local testing**: `cd /vercel/share/v0-project && pnpm dev`

For detailed instructions, see `DEPLOYMENT_GUIDE.md`
