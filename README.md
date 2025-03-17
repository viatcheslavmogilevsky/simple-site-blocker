# Simple site blocker: a browser extension

An example browser plugin that blocks access to user-specified websites>

It's simple, yet effective way to protect from distraction websites (social media, news outlets).

## Installation

### Chrome

1. Clone the repo
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select `chrome` sub-directory of the repo 


### Firefox

1. Clone the repo
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" on the left sidebar
4. Click "Load Temporary Add-on"
5. Select any file in `firefox` sub-directory of the repo (typically manifest.json)


## Usage

1. Click the extension icon in the toolbar
2. Enter domains to block (one per line)
3. Click "Save" to update the blocked sites list
4. Try visiting a blocked site to see the blocking page


## How it's made

Anthropic Claude (free tier) + some changes:

* `details.frameId == 0` - so the plugin only considers what is in browser's addressbar
* `(^|\\\.)${matched_element}$` - so it blocks both `example.com` and `prefix.example.com` if `example.com` in the blocklist


## Why not DNS sinkhole?


DNS sinkholes do have their own advantages, such as network-wide protection, blocking at the DNS resolution level (saving bandwidth), and affecting all applications rather than just browsers. They're also more difficult for users to bypass.

The goal of the plugin is just to give a reflection moment before allowing access to distracting sites.

