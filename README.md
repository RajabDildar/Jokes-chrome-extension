# Jokes Chrome Extension

A lightweight Chrome extension that displays a random dad joke whenever you click the extension icon.

## Overview

This project is a simple browser extension built with vanilla HTML, CSS, and JavaScript. It fetches a joke from the public Dad Jokes API and shows it in the popup window, making it easy to use on any active tab.

## Features

- Displays a random joke on every click
- Works on any active tab
- Minimal and lightweight popup UI
- No build step required
- Built with standard web technologies

## Project Structure

```text
Jokes-chrome-extension/
├── logo.png
├── manifest.json
├── popup.html
├── script.js
├── style.css
└── README.md
```

## How it works

- `manifest.json` defines the Chrome extension metadata and popup behavior.
- `popup.html` creates the popup UI.
- `script.js` fetches a joke from `https://icanhazdadjoke.com/slack` and inserts it into the popup.
- `style.css` styles the popup window.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RajabDildar/Jokes-chrome-extension.git
   ```
2. Open Chrome and go to `chrome://extensions`.
3. Enable Developer mode.
4. Click `Load unpacked`.
5. Select the project folder.
6. Click the extension icon to see a new joke.

## Usage

- Click the extension icon in the Chrome toolbar.
- The popup loads a random dad joke.
- Click again to fetch another joke.

## Notes

- The extension requires an internet connection to fetch jokes from the joke API.
- This project uses the `activeTab` permission so it can interact with the currently open tab context.

## Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extension Manifest V3

## License

This project does not currently include a license file. If you plan to distribute or share it publicly, you may want to add an appropriate open-source license.
