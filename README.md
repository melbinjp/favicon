# Favicon Assets for wecanuseai.com

This repository contains the favicon assets for wecanuseai.com. The assets are automatically generated from a source SVG file.

## 🚀 Usage

To use these favicons, add the following lines to the `<head>` section of your HTML document. The recommended set of tags is also included in the `favicons.json` file.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```

## 🛠️ Build Process

The favicon assets in this repository are generated automatically from the source SVG file located at `src/favicon.svg`.

To regenerate the assets, run the following command:

```bash
npm install
npm run build
```

This will:
1.  Install the necessary dependencies.
2.  Run the build script (`build.js`).
3.  Generate all the required favicon assets in the root directory.
4.  Create a `favicons.json` file with a machine-readable list of the generated assets.

## 📁 Files

This repository contains a variety of favicon assets for different platforms and browsers. The definitive list of all generated files and their metadata can be found in the `favicons.json` file.

The key files are:
- **`favicon.svg`**: The source SVG file, suitable for modern browsers that support SVG favicons.
- **`favicon.ico`**: A traditional favicon file for legacy browsers.
- **`.png` files**: A set of PNG files in various sizes for different platforms (e.g., `apple-touch-icon.png`, `android-chrome-192x192.png`).
- **`site.webmanifest`**: The web app manifest file.
- **`favicons.json`**: A machine-readable JSON file containing a list of all generated assets and their metadata.
