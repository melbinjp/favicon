# Favicon Assets for We Can Use AI

This repository contains the favicon assets for [We Can Use AI](https://wecanuseai.com), served via GitHub Pages at **https://favicon.wecanuseai.com**.

## 🚀 Usage

Add the following lines to the `<head>` section of your HTML document:

```html
<link rel="icon" type="image/x-icon" href="https://favicon.wecanuseai.com/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="https://favicon.wecanuseai.com/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://favicon.wecanuseai.com/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="https://favicon.wecanuseai.com/favicon-48x48.png">
<link rel="manifest" href="https://favicon.wecanuseai.com/manifest.webmanifest">
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#667eea">
<meta name="application-name" content="We Can Use AI">
<link rel="apple-touch-icon" sizes="57x57" href="https://favicon.wecanuseai.com/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="https://favicon.wecanuseai.com/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://favicon.wecanuseai.com/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="https://favicon.wecanuseai.com/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://favicon.wecanuseai.com/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="https://favicon.wecanuseai.com/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://favicon.wecanuseai.com/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="https://favicon.wecanuseai.com/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="https://favicon.wecanuseai.com/apple-touch-icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://favicon.wecanuseai.com/apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" sizes="1024x1024" href="https://favicon.wecanuseai.com/apple-touch-icon-1024x1024.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="wecanuseai">
<meta name="msapplication-TileColor" content="#667eea">
<meta name="msapplication-TileImage" content="https://favicon.wecanuseai.com/mstile-144x144.png">
<meta name="msapplication-config" content="https://favicon.wecanuseai.com/browserconfig.xml">
```

## 📦 GitHub Pages

On every push to `main`, the workflow builds the favicons and deploys the `dist/` folder to the `gh-pages` branch, which is served via GitHub Pages at **https://favicon.wecanuseai.com**.

The root URL (`https://favicon.wecanuseai.com/`) serves an `index.html` with a copy-paste snippet and a full file listing. The machine-readable manifest is at `https://favicon.wecanuseai.com/favicons.json`.

## 📁 Files

All the generated files are deployed to the `gh-pages` branch. Key files include:

- `favicon.ico`, `favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
- `apple-touch-icon.png` (and sized variants: 57×57 → 1024×1024)
- `apple-touch-startup-image-*.png` (iOS splash screens, various resolutions)
- `android-chrome-*.png` (36×36 → 512×512)
- `mstile-*.png` + `browserconfig.xml` (Windows tiles)
- `yandex-browser-50x50.png` + `yandex-browser-manifest.json`
- `manifest.webmanifest`, `favicons.json`, `manifest.json`

## 💻 Development

To regenerate the favicons, you need to have Node.js and npm installed.

1.  Clone the repository:
    ```bash
    git clone https://github.com/melbinjp/favicon.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the build script:
    ```bash
    npm run build
    ```

The generated favicons will be in the `dist` directory.
