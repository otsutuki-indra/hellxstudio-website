# HellxStudio Deployment Guide

Complete step-by-step instructions for deploying HellxStudio to GitHub and Cloudflare Pages.

## Part 1: Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `hellxstudio` (or your choice)
3. Description: `Next-gen micro-infrastructure for scale-focused developers`
4. Choose visibility: **Public** or **Private**
5. Do NOT initialize with README (we already have one)
6. Click **Create repository**

### Step 2: Add Remote and Push

Copy the commands GitHub shows you. They should look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/hellxstudio.git
git branch -M main
git push -u origin main
```

Run these in your project directory:

```bash
cd /vercel/share/v0-project
git remote add origin https://github.com/YOUR_USERNAME/hellxstudio.git
git branch -M main
git push -u origin main
```

### Verify

Go to your GitHub repository URL and confirm all files are there.

---

## Part 2: Deploy to Cloudflare Pages

### Step 1: Get Cloudflare Credentials

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Account Home** → **API Tokens**
3. Create a token with:
   - **Permissions**: Include `Cloudflare Pages - Edit`
   - **Account Resources**: Your account
4. Copy the token and save it securely

Also note your **Account ID**:
- Go to **Account Home**
- Look for "Account ID" in the sidebar

### Step 2: Connect GitHub to Cloudflare Pages

1. In Cloudflare Dashboard, go to **Pages**
2. Click **Create a project**
3. Click **Connect to Git**
4. Authorize Cloudflare to access GitHub
5. Select your `hellxstudio` repository
6. Click **Begin setup**

### Step 3: Configure Build Settings

Fill in these settings:

- **Project name**: `hellxstudio`
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `pnpm install && pnpm build`
- **Build output directory**: `out`
- **Environment variables**: (leave empty for now)

Click **Save and Deploy**

Cloudflare will now:
1. Clone your repository
2. Run the build command
3. Deploy the `out/` directory to Cloudflare's global CDN

### Step 4: Wait for Deployment

Cloudflare will show a build log. Once it shows ✅ **Success**, your site is live!

You'll get a temporary URL like: `https://hellxstudio.pages.dev`

### Step 5 (Optional): Connect Custom Domain

1. In your Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your domain (e.g., `hellxstudio.kindle.com`)
4. Cloudflare will guide you through DNS setup

---

## Part 3: Automatic Deployments (Optional)

Once connected to Cloudflare Pages, every time you push to GitHub:
- GitHub Actions triggers automatically
- Code is built and tested
- Deployed to Cloudflare Pages

No additional setup needed if you connected via Git!

### Manual Trigger (if needed)

If you need to trigger a deployment manually:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Cloudflare will automatically rebuild and redeploy.

---

## Verification Checklist

After deployment, verify everything works:

- [ ] Homepage loads with hero section
- [ ] Navigation links work
- [ ] Mobile menu works on small screens
- [ ] Pricing cards display correctly
- [ ] Color scheme matches Luxury Tech design
- [ ] All 8 pages load without errors
- [ ] Footer displays correctly
- [ ] Buttons are clickable

### Quick Test URLs

Once deployed, test these URLs:
- `/` - Home page
- `/platform` - Platform overview
- `/features` - Features page (if created)
- `/pricing` - Pricing page
- `/documentation` - Documentation
- `/blog` - Blog
- `/signin` - Sign in page
- `/get-started` - Get started page

---

## Troubleshooting

### Build Fails

**Error**: `pnpm: command not found`

**Solution**: 
- Make sure `package-lock.json` is NOT in your repo (we use pnpm)
- Cloudflare should auto-detect pnpm from `pnpm-lock.yaml`

**Or manually set build command**:
```
npm install -g pnpm && pnpm install && pnpm build
```

### Site Shows 404

**Possible causes**:
1. Build output directory is wrong (should be `out`)
2. Pages are inside route groups
3. TypeScript errors during build

**Solution**:
1. Check Cloudflare build logs
2. Run `pnpm build` locally to test
3. Fix any errors and push again

### Domain Not Working

**If custom domain won't connect**:
1. Ensure domain is properly registered
2. Add Cloudflare nameservers to your domain registrar
3. Wait up to 24 hours for DNS propagation
4. Test with `nslookup yourdomain.com`

---

## Environment Variables

If you need to add environment variables:

1. In Cloudflare Pages project → **Settings** → **Environment variables**
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Cloudflare will redeploy automatically

---

## Performance Optimization

After deployment, optimize performance:

1. **Enable automatic minification** in Cloudflare
2. **Set cache expiration** for static assets
3. **Enable HTTP/2 push** in Cloudflare settings
4. **Monitor performance** via Cloudflare Analytics

---

## Next Steps

1. ✅ Code is ready to deploy
2. ✅ GitHub integration is configured
3. ✅ Cloudflare workflow is set up
4. Push to GitHub and watch it deploy!

---

## Support

For issues:
- Check [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- Check [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- Review build logs in Cloudflare dashboard

Good luck! 🚀
