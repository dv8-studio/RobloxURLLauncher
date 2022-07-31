# Privacy Policy

Roblox URL Launcher extension makes it possible to launch Roblox client / studio by opening a link in a browser.
Its purpose is to help you organize your PC shortcuts (by making it able to launch Roblox games by adding a link as browser or desktop shortcut).

## Availability
The extension is available on:
- [Google Web store](https://chrome.google.com/webstore/detail/roblox-url-launcher/lcefjaknjehbafdeacjbjnfpfldjdlcc)
- [Firefox Addons](https://addons.mozilla.org/addon/roblox-url-launcher/)

It is also [open source](https://github.com/dv8-studio/RobloxURLLauncher), so everyone can confirm the extension's behavior and contribute to it.

## How it works

Roblox makes it impossible to launch Roblox apps by using their internal `roblox-player` protocol they install on your system, as it requires providing an authentication token.
This extension bypasses this limitation by utilizing functions that are exposed on Roblox website. Those may be found by opening console in developer tools and browsing `Roblox.GameLauncher` object.
As the same functions are used by e.g. Play button on Roblox website, the plugin will be working pretty much as long as the play button (unless Roblox deprecates said functions).

## Permissions

To use advantage of the described behavior, the extension requires access to execute functions in context of some Roblox webpages.
To achieve said, it alters their content by appending a special script only on webpages listed below:
- *://*.roblox.com/home*
- *://*.roblox.com/games*
- *://*.roblox.com/groups*

## Collected data
The extension DOES NOT collect ANY data.

No analytics, tracking nor profiling. It only works in the described way and does not collect any of your data.
