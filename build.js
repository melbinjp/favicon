const { favicons } = require("favicons");
const fs = require("fs-extra");
const path = require("path");

const source = "src/favicon.svg";
const destination = "./dist"; // Output to the dist directory

const configuration = {
  path: "/",
  appName: "We Can Use AI",
  appShortName: "wecanuseai",
  appDescription: "Discover and access cutting-edge AI tools for enhanced productivity and creativity",
  developerName: "wecanuseai",
  developerURL: "https://wecanuseai.com",
  background: "#667eea",
  theme_color: "#667eea",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/",
  version: "1.0",
  logging: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
    yandex: true,
  },
};

const run = async () => {
  try {
    // Generate favicons
    const response = await favicons(source, configuration);

    // Clean destination directory
    await fs.emptyDir(destination);

    // Copy original favicon
    await fs.copyFile(source, path.join(destination, "favicon.svg"));

    // Write images and files
    await Promise.all(
      response.images.map(async (image) =>
        fs.writeFile(path.join(destination, image.name), image.contents)
      )
    );
    await Promise.all(
      response.files.map(async (file) =>
        fs.writeFile(path.join(destination, file.name), file.contents)
      )
    );

    // Create favicons.json
    const faviconsJson = {
      ...response,
      // The 'contents' properties are large buffers, so we'll exclude them
      images: response.images.map(({ name, contents, ...rest }) => ({ name, ...rest })),
      files: response.files.map(({ name, contents, ...rest }) => ({ name, ...rest })),
    };
    await fs.writeFile(
      path.join(destination, "favicons.json"),
      JSON.stringify(faviconsJson, null, 2)
    );

    // Create manifest.json
    const manifestTemplate = await fs.readJson("manifest.json");
    manifestTemplate.files = response.images.map(image => image.name).concat(response.files.map(file => file.name));
    await fs.writeFile(
      path.join(destination, "manifest.json"),
      JSON.stringify(manifestTemplate, null, 2)
    );

    // Create index.html landing page
    const baseUrl = "https://favicon.wecanuseai.com";
    const allFiles = ["favicon.svg"]
      .concat(response.images.map(i => i.name))
      .concat(response.files.map(f => f.name))
      .sort();
    const fileListHtml = allFiles
      .map(name => `      <li><a href="${baseUrl}/${name}">${name}</a></li>`)
      .join("\n");
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Favicon Assets – favicon.wecanuseai.com</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #1a1a1a; }
    h1 { color: #667eea; }
    pre { background: #f4f4f8; border-radius: 8px; padding: 16px; overflow-x: auto; font-size: 13px; }
    ul { columns: 2; column-gap: 2em; padding-left: 1.2em; }
    li { break-inside: avoid; margin: 2px 0; font-size: 14px; }
    a { color: #667eea; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .note { background: #fffbe6; border-left: 4px solid #f0c000; padding: 10px 14px; border-radius: 4px; font-size: 14px; }
  </style>
</head>
<body>
  <h1>Favicon Assets</h1>
  <p>Favicon files for <strong>We Can Use AI</strong>, served from <code>${baseUrl}/</code>.</p>
  <p class="note">
    Machine-readable manifest: <a href="${baseUrl}/favicons.json">favicons.json</a>
  </p>

  <h2>HTML Snippet</h2>
  <p>Copy this into the <code>&lt;head&gt;</code> of your HTML document:</p>
  <pre>&lt;link rel="icon" type="image/x-icon" href="${baseUrl}/favicon.ico"&gt;
&lt;link rel="icon" type="image/png" sizes="16x16" href="${baseUrl}/favicon-16x16.png"&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="${baseUrl}/favicon-32x32.png"&gt;
&lt;link rel="icon" type="image/png" sizes="48x48" href="${baseUrl}/favicon-48x48.png"&gt;
&lt;link rel="manifest" href="${baseUrl}/manifest.webmanifest"&gt;
&lt;meta name="mobile-web-app-capable" content="yes"&gt;
&lt;meta name="theme-color" content="#667eea"&gt;
&lt;meta name="application-name" content="We Can Use AI"&gt;
&lt;link rel="apple-touch-icon" sizes="180x180" href="${baseUrl}/apple-touch-icon-180x180.png"&gt;
&lt;link rel="apple-touch-icon" sizes="152x152" href="${baseUrl}/apple-touch-icon-152x152.png"&gt;
&lt;link rel="apple-touch-icon" sizes="144x144" href="${baseUrl}/apple-touch-icon-144x144.png"&gt;
&lt;link rel="apple-touch-icon" sizes="120x120" href="${baseUrl}/apple-touch-icon-120x120.png"&gt;
&lt;link rel="apple-touch-icon" sizes="76x76" href="${baseUrl}/apple-touch-icon-76x76.png"&gt;
&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
&lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
&lt;meta name="apple-mobile-web-app-title" content="wecanuseai"&gt;
&lt;meta name="msapplication-TileColor" content="#667eea"&gt;
&lt;meta name="msapplication-TileImage" content="${baseUrl}/mstile-144x144.png"&gt;
&lt;meta name="msapplication-config" content="${baseUrl}/browserconfig.xml"&gt;</pre>

  <h2>All Files</h2>
  <ul>
${fileListHtml}
  </ul>
</body>
</html>`;
    await fs.writeFile(path.join(destination, "index.html"), indexHtml);

    console.log("Favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error.message);
    process.exit(1);
  }
};

run();