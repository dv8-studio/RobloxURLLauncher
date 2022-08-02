# Roblox URL Launcher
Roblox URL Launcher extension makes it possible to launch Roblox client / studio by opening a link in a browser without using any user credentials. Its purpose is to help you organize your PC shortcuts (by making it able to launch Roblox games by adding a link as browser or desktop shortcut).

[Video showcasing extension](https://www.youtube.com/watch?v=AfmOCZu1uX0)

It is available on:
- [Google Web store](https://chrome.google.com/webstore/detail/roblox-url-launcher/lcefjaknjehbafdeacjbjnfpfldjdlcc)
- [Firefox Addons](https://addons.mozilla.org/addon/roblox-url-launcher/)

The extension is [open source](https://github.com/dv8-studio/RobloxURLLauncher).
Its behavior is further explained in [Privacy Policy](https://github.com/dv8-studio/RobloxURLLauncher/blob/master/PRIVACY.md)

This extension should work wherever Roblox launcher itself works (Windows, macOS). 
*DOES NOT WORK ON CHROME OS AS LONG AS ROBLOX ITSELF DOESN'T SUPPORT IT*

**Disclaimer:** This extension was NOT made to bypass Roblox security. For instance, you won't be able to join a game you don't normally have access to or join a server of a player you can't follow.

**THE USE OF ROBLOX TRADEMARK IS FOR IDENTIFICATION AND REFERENCE PURPOSES ONLY AND DOES NOT IMPLY ANY ASSOCIATION WITH THE TRADEMARK HOLDER OF THEIR PRODUCT BRAND**
**THE EXTENSION IS COMMUNITY-MADE (IT'S NOT MADE BY ROBLOX CORPORATION)**


## Possible usage (examples of links):
- https://www.roblox.com/home?followUserId=1 - would make the client follow user ID 1 into the game the user is playing (only works if the player's privacy settings allow you to join them e.g. via the profile)
- https://www.roblox.com/home?editPlaceId=920587237 - would try to open a place with that ID in the studio (won't work if you don't have permissions to edit that place)
- https://www.roblox.com/home?placeId=920587237 - would open the client and join that place (won't work if you don't have permissions to play it)
- https://www.roblox.com/home?placeId=920587237&gameId=8c7024c6-e89d-4bd1-977b-2c21fd8ed793 OR https://www.roblox.com/games/920587237/NAME?gameId=8c7024c6-e89d-4bd1-977b-2c21fd8ed793 - would open the client and join a server with that identifier (same condition as above applies)
- https://www.roblox.com/home?privatePlaceId=920587237&privateId=efa67300-c5a1-47e6-a3d8-a9af904e6993 - would open the client and join a private server with that identifier (only works if you normally see the server under the `Servers` tab. In other case, use below method based on invite link)
- https://www.roblox.com/home?privatePlaceId=920587237&code=wlH1zTFR3s3ZRNTbwzVL3530tVh2aHl1 - joins a private server using private server link (code comes from `privateServerLinkCode` parameter of Roblox's private server link)

The browser tab will be automatically closed after launching the app unless `dontClose=1` parameter is present in the link.
Above examples contain `https://www.roblox.com/home` base, but you may also use:
- `https://www.roblox.com/groups`
- `https://www.roblox.com/games`
