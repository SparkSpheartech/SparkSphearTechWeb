# SparkSphear Tech Solutions

A high-performance, modern business website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.
Designed to be pixel-perfect, mobile-responsive, and SEO-optimized.

## 🚀 Quick Start

### 1. Install Dependencies
You need [Node.js](https://nodejs.org/) installed.
```bash
npm install
```

### 2. Run Locally
To see the site on your computer:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
To create the static website for deployment:
```bash
npm run build
```
This will create an `out` folder containing your complete static website.

## 📦 Deployment (GitHub Pages)

This project is configured for **Static Export** (`output: 'export'`), making it perfect for GitHub Pages.

1.  **Push** this code to a GitHub repository.
2.  Go to **Settings** > **Pages** in your GitHub repository.
3.  Source: Select **GitHub Actions** (recommended) or deploy from the `gh-pages` branch if you configure it manually.
    *   *Alternative:* Simply upload the contents of the `out` folder to any static host (Netlify, Vercel, Hostinger).

## 🛠️ Tech Stack
-   **Framework:** Next.js 14 (App Router)
-   **Styling:** Tailwind CSS + Custom CSS Variables
-   **Animation:** Framer Motion
-   **Icons:** Lucide React

## 📂 Project Structure
-   `/app`: Pages and Layouts (Home, Blog)
-   `/components`: Reusable UI sections (Hero, Services, Navbar)
-   `/data`: Blog posts content
-   `/public`: Static images and assets
