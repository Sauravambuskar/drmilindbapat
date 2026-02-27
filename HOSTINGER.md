# Dr. Milind Bapat Website — Hostinger Deployment Guide

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Build the Project](#build-the-project)
3. [Hostinger Setup](#hostinger-setup)
4. [Upload Files](#upload-files)
5. [Configure .htaccess for SPA](#configure-htaccess-for-spa)
6. [Connect Custom Domain](#connect-custom-domain)
7. [Enable SSL](#enable-ssl)
8. [Verify Deployment](#verify-deployment)
9. [Updating the Website](#updating-the-website)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

| Requirement          | Details                                      |
|----------------------|----------------------------------------------|
| Hostinger Account    | Premium or Business Web Hosting plan         |
| Node.js              | >= 20.x installed locally                    |
| npm / bun            | Latest version                               |
| Domain               | drmilindbapat.in (or any custom domain)      |
| FTP Client (optional)| FileZilla or similar                         |

---

## Build the Project

### Step 1: Install Dependencies
```bash
cd drmilindbapat-website
npm install
```

### Step 2: Create Production Build
```bash
npm run build
```
This generates a `dist/` folder containing all static files (HTML, CSS, JS, images).

### Step 3: Verify the Build
```bash
npm run preview
```
Open `http://localhost:4173` and confirm everything works.

---

## Hostinger Setup

### Step 1: Log In to Hostinger
1. Go to [https://hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Log in with your Hostinger credentials

### Step 2: Choose a Hosting Plan
- **Recommended:** Premium Web Hosting or Business Web Hosting
- Both support custom domains, SSL, and PHP (needed for `.htaccess`)

### Step 3: Set Up Your Hosting
1. In hPanel, go to **Hosting** → **Setup**
2. Select your domain: `drmilindbapat.in`
3. Choose data center closest to your audience (e.g., **India - Mumbai** or **Singapore**)
4. Complete the setup wizard

---

## Upload Files

### Option A: Using Hostinger File Manager (Recommended)

1. Go to **hPanel** → **Files** → **File Manager**
2. Navigate to the `public_html` folder
3. **Delete** all existing default files in `public_html`
4. Click **Upload Files** (top-left)
5. Select **all files and folders** inside your local `dist/` folder:
   - `index.html`
   - `assets/` folder
   - `images/` folder
   - `favicon.ico`
   - `robots.txt`
   - `sitemap.xml`
   - Any other files in `dist/`
6. Wait for the upload to complete

> **Important:** Upload the *contents* of `dist/`, not the `dist/` folder itself. Files should be directly inside `public_html`.

### Option B: Using FTP (FileZilla)

1. Go to **hPanel** → **Files** → **FTP Accounts**
2. Note your FTP credentials:
   - **Host:** Your server IP or `ftp.drmilindbapat.in`
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21
3. Open FileZilla and connect
4. Navigate to `public_html` on the remote side
5. Upload all contents of your local `dist/` folder to `public_html`

### Option C: Using SSH (Advanced)

1. Go to **hPanel** → **Advanced** → **SSH Access**
2. Enable SSH and note credentials
3. Connect via terminal:
   ```bash
   ssh -p 65002 u123456789@your-server-ip
   ```
4. Navigate and upload:
   ```bash
   cd public_html
   # Use scp or rsync from your local machine
   ```

From your local machine:
```bash
scp -P 65002 -r dist/* u123456789@your-server-ip:~/public_html/
```

---

## Configure .htaccess for SPA

Since this is a React Single Page Application (SPA), all routes must redirect to `index.html`.

### Step 1: Create `.htaccess` File

In `public_html`, create a file named `.htaccess` with the following content:

```apache
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www (optional — choose one: www or non-www)
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]

# Security Headers
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Cache Static Assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 30 days"
    ExpiresByType image/png "access plus 30 days"
    ExpiresByType image/svg+xml "access plus 30 days"
    ExpiresByType image/x-icon "access plus 30 days"
</IfModule>

# SPA Routing — redirect all requests to index.html
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Step 2: Verify .htaccess Is Active
- Visit `https://drmilindbapat.in/about` or any route
- It should load correctly (not show a 404 error)

---

## Connect Custom Domain

### Step 1: Point Domain to Hostinger

If your domain is registered elsewhere (e.g., GoDaddy, Namecheap):

1. Go to **hPanel** → **Hosting** → **Plan Details**
2. Find the **Hostinger Nameservers**:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
3. Go to your domain registrar and update the nameservers

### Step 2: If Domain Is on Hostinger

1. Go to **hPanel** → **Domains**
2. Click on `drmilindbapat.in`
3. DNS records should auto-configure

### Step 3: DNS Records (Manual Setup)

| Type  | Name | Value                      | TTL  |
|-------|------|----------------------------|------|
| A     | @    | `<Hostinger Server IP>`    | 300  |
| A     | www  | `<Hostinger Server IP>`    | 300  |
| CNAME | www  | `drmilindbapat.in`         | 300  |

> DNS propagation can take up to 24–48 hours.

---

## Enable SSL

### Step 1: Free SSL (Let's Encrypt)

1. Go to **hPanel** → **Security** → **SSL**
2. Select your domain: `drmilindbapat.in`
3. Click **Install SSL** (Let's Encrypt — Free)
4. Wait a few minutes for activation
5. Enable **Force HTTPS** toggle

### Step 2: Verify SSL

```bash
curl -I https://drmilindbapat.in
```

You should see `HTTP/2 200` with security headers.

---

## Verify Deployment

### Checklist

- [ ] Website loads at `https://drmilindbapat.in`
- [ ] All images load correctly
- [ ] Navigation between pages works (SPA routing)
- [ ] Contact form / WhatsApp links work
- [ ] Mobile responsive layout works
- [ ] SSL padlock icon appears in browser
- [ ] `https://drmilindbapat.in/sitemap.xml` is accessible
- [ ] `https://drmilindbapat.in/robots.txt` is accessible

### Performance Test

Run your site through:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## Updating the Website

Whenever you make changes to the website:

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Upload Updated Files
1. Open **hPanel** → **File Manager**
2. Navigate to `public_html`
3. Delete old `assets/` folder (it contains hashed filenames that change on each build)
4. Upload the new contents of `dist/`

### Step 3: Clear Cache (Optional)
1. Go to **hPanel** → **Advanced** → **Cache Manager**
2. Click **Purge All**

> **Tip:** The `.htaccess` file rarely changes — you don't need to re-upload it unless modified.

---

## Troubleshooting

### Blank Page After Upload
- Ensure `index.html` is directly inside `public_html` (not inside a subfolder)
- Check browser console for 404 errors on JS/CSS files

### 404 on Page Refresh
- Verify `.htaccess` file exists in `public_html`
- Ensure `mod_rewrite` is enabled (it is by default on Hostinger)

### Images Not Loading
- Check that the `images/` folder is inside `public_html`
- Verify file paths are correct (case-sensitive on Linux servers)

### SSL Not Working
- Wait 10–15 minutes after installing SSL
- Clear browser cache and try again
- Check hPanel → SSL for status

### Slow Loading
- Ensure Gzip is enabled in `.htaccess`
- Verify caching headers are active
- Optimize images before uploading (use WebP format if possible)

---

## Quick Reference Commands

```bash
# Full deployment from scratch
npm install
npm run build
# Then upload dist/* contents to public_html via File Manager or FTP

# Quick update
npm run build
# Re-upload dist/* to public_html
```

---

## Support

- **Hostinger Support:** [https://www.hostinger.in/contact](https://www.hostinger.in/contact)
- **Website:** https://drmilindbapat.in
- **WhatsApp:** +91 9822032496
