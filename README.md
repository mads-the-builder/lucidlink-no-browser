# Lucidlinks that don't open the browser every god damn time

## What This Does

When you click a LucidLink share link (like `https://app.lucidlink.com/l/...`), it normally opens your browser, loads a page, then eventually opens Finder. This skips the browser entirely and goes straight to Finder.

Also works with sndw.ch shortened links that wrap LucidLink URLs.

## Setup (5 minutes)

### Step 1: Install Finicky Sandwich

Download `Finicky Sandwich.zip` from this repo, unzip it, and move the app to your **Applications** folder.

### Step 2: Set Finicky Sandwich as Your Default Browser

Launch Finicky Sandwich and set it as your default browser. (This sounds scary but it won't affect your normal browsing — it's just a URL router.)

Or manually: **System Settings** → **Desktop & Dock** → **Default web browser** → **Finicky Sandwich**

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

### Step 4: Restart Finicky Sandwich

Quit Finicky Sandwich and open it again. Since the menu bar icon is hidden, use Terminal:
```
killall "Finicky Sandwich" && open -a "Finicky Sandwich"
```

## Done!

Click any LucidLink share link (or sndw.ch shortened link) and it should open directly in Finder.

## Troubleshooting

Ask Ben.
