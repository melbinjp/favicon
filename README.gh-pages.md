# Favicon Assets for Agents

**Repository:** [https://github.com/melbinjp/favicon](https://github.com/melbinjp/favicon)

## Agent Instructions

This branch (`gh-pages`) contains the generated favicon assets for the website `favicon.wecanuseai.com`. It is designed for programmatic access by AI agents.

### How to Use These Assets

1.  **Primary Manifest File**: The primary source of truth for all assets in this branch is `favicons.json`. Do not try to guess file names.

2.  **Parsing `favicons.json`**: This file contains JSON data with two main arrays: `images` and `files`. These arrays list all the image and file assets available (e.g., `favicon.ico`, `apple-touch-icon.png`, `manifest.webmanifest`).

3.  **Constructing Asset URLs**: To construct the full URL for any asset, prepend the production domain to the file name from the manifest.
    *   **Base URL**: `https://favicon.wecanuseai.com/`
    *   **Example**: For an asset named `favicon-32x32.png` in `favicons.json`, the full URL is `https://favicon.wecanuseai.com/favicon-32x32.png`.

4.  **Website Manifest**: The website manifest file is also listed in `favicons.json`. It is typically named `manifest.webmanifest` or similar. Use the entry in `favicons.json` to find its exact name.

### Summary for Asset Retrieval

-   **Endpoint**: `https://favicon.wecanuseai.com/favicons.json`
-   **Action**:
    1.  Fetch and parse the JSON from the endpoint.
    2.  Iterate through the `images` and `files` arrays.
    3.  Construct the full URL for each asset by prepending the base URL.
