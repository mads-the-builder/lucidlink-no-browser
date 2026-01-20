# LucidLink No-Browser

## What This Does

When you click a LucidLink share link (like `https://app.lucidlink.com/l/...`), it normally opens your browser, loads a page, then eventually opens Finder. This skips the browser entirely and goes straight to Finder.

Note: This doesn't work with sndw.ch links yet, but it might soon if you're nice to Ben.

## Setup (5 minutes)

### Step 1: Install Finicky

Download and install **version 4.2.2** from: https://github.com/johnste/finicky/releases

### Step 2: Set Finicky as Your Default Browser

Launch Finicky and set it as your default browser. (This sounds scary but it won't affect your normal browsing — Finicky is just a URL router.)

Or manually: **System Settings** → **Desktop & Dock** → **Default web browser** → **Finicky**

### Step 3: Install the Config

Open **Terminal** (search for "Terminal" in Spotlight) and paste ONE of these commands:

**If you use Chrome:**
```
curl -o ~/.finicky.js https://raw.githubusercontent.com/mads-the-builder/lucidlink-no-browser/main/finicky-chrome.js
```

**If you use Safari:**
```
curl -o ~/.finicky.js https://raw.githubusercontent.com/mads-the-builder/lucidlink-no-browser/main/finicky-safari.js
```

### Step 4: Restart Finicky

Quit Finicky (click the icon in your menu bar → **Quit**) and open it again.

## Done!

Click any LucidLink share link and it should open directly in Finder.

## Troubleshooting

Ask Ben.
