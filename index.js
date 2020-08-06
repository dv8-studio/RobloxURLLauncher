const script = document.createElement('script')
script.textContent = `
const urlParams = new URLSearchParams(window.location.search)
const options = { // Setup all possible actions and specify require arguments
	followPlayerIntoGame: ['followUserId'],
	editGameInStudio: ['editPlaceId'],
	joinGameInstance: ['placeId', 'gameId'],
	joinPrivateGame: ['privatePlaceId', ['privateId'], ['code']],
	joinMultiplayerGame: ['placeId']
}

for (const action in options) { // Iterate actions
	const data = options[action]
	const input = []
	for (const key of data) { // Fetches required parameters into table
		const optional = Array.isArray(key)
		const paramKey = optional ? key[0] : key

		const value = urlParams.get(paramKey)
		if (value != null) { input.push(value)
		} else if (optional) { input.push(null)
		}
	}
	if (input.length !== data.length) continue // Not enough values, check next action
	
	Roblox.GameLauncher[action](...input) // Execute
	break
}
`
window.document.body.appendChild(script)
script.remove()

setTimeout(() => chrome.runtime.sendMessage(1, () => {}), 3000) // Send message to close the tab after execution