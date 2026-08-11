# Siva Telugu Estates - Luxury Real Estate Web Application

Official digital platform for **Siva Telugu Estates** (Director: **Mr. Siva Yedida**), serving **Rajahmundry** and **Kakinada** real estate markets.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, configured for automated static deployment via **GitHub Actions** to **GitHub Pages**.

---

## 🌟 Key Features

1. **Founder Spotlight & Brand Motto**:
   - Highlight of Mr. Siva Yedida with official marketing banner (*"మీ Family కి Best Future ఏంటి..?"*).
   - 4 Pillars of Investment: Family Happiness, Safe Investment, Financial Security, Dream Lifestyle.
2. **Branch Hub Spotlight**:
   - **Rajahmundry HQ**: Morampudi Junction, Dowleswaram, Diwancheruvu, Lalacheruvu corridors.
   - **Kakinada Branch**: Ramanayyapeta, Samalkot Road, ADB Road, Port Corridor.
3. **Interactive Venture Catalog**:
   - Filter DTCP/VMRDA approved open plot layouts, villa projects, and highway commercial land.
4. **Interactive Plot Visualizer**:
   - Live plot map layout grid with real-time status inspection (Available, Reserved, Sold).
5. **YouTube Video Showcase**:
   - Embedded video tours pulling content from [`@sivateluguestates`](https://www.youtube.com/@sivateluguestates).
6. **Plot EMI & Appreciation Calculator**:
   - Financial tool computing monthly EMIs and projected 3 to 5-year land appreciation.
7. **Dual Language Support**:
   - English & Telugu (`తెలుగు`) toggle switcher.
8. **Instant WhatsApp Lead Capture**:
   - Pre-filled WhatsApp inquiry generation (+91 98516 33333) and site visit booking.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build static production bundle
npm run build
```

---

## 🌐 Deploying to GitHub Pages

1. Push this project repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Siva Telugu Estates web app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. The `.github/workflows/deploy.yml` pipeline will automatically build and publish the live website!
