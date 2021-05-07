# Roblox URL Launcher
Roblox URL Launcher is an extension which lets you join a game using link. It is available at
- Google Webstore - https://chrome.google.com/webstore/detail/roblox-url-launcher/lcefjaknjehbafdeacjbjnfpfldjdlcc
- Firefox Webstore - https://addons.mozilla.org/addon/roblox-url-launcher/

Showcase video: https://www.youtube.com/watch?v=AfmOCZu1uX0

Note: This extension was NOT made to bypass Roblox security. For instance - you won't be able to join a game you don't have access to or join a player you can't follow into the game (same if the player is in a game you don't have access to).

## Possible usage:
- https://www.roblox.com/home?followUserId=1 - would make the client follow user id 1 into the game the user is playing (only works if the player's privacy settings allow you to join them eg. via profile)
- https://www.roblox.com/home?editPlaceId=920587237 - would try to open a place with that id in the studio (won't work if you don't have permissions to edit that place)
- https://www.roblox.com/home?placeId=920587237 - would open the client and join that place
- https://www.roblox.com/home?placeId=920587237&gameId=8c7024c6-e89d-4bd1-977b-2c21fd8ed793 OR https://www.roblox.com/games/920587237/NAME?gameId=8c7024c6-e89d-4bd1-977b-2c21fd8ed793 - would open the client and join a server with that identifier.
- https://www.roblox.com/home?privatePlaceId=920587237&privateId=efa67300-c5a1-47e6-a3d8-a9af904e6993 - would open the client and join a private server with that identifier (only works if you normally see the server under the "Servers" tab. If you want to let any person join, use method based on invite link shown below)
- https://www.roblox.com/home?privatePlaceId=920587237&code=wlH1zTFR3s3ZRNTbwzVL3530tVh2aHl1 - joins a private server using private server link (code comes from "privateServerLinkCode" parameter of Roblox's private server link)

Additionally "dontClose=1" parameter may be added in the link to not automatically close the tab upon Roblox client launch.

(Presented examples use "https://www.roblox.com/home", but "https://www.roblox.com/groups/%" and "https://www.roblox.com/games/%" work correctly as well. % represents wildcard)
