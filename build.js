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
  logging: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: false,
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

    console.log("Favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error.message);
    process.exit(1);
  }
};

run();