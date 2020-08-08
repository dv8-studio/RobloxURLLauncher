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
	if (!urlParams.get('dontClose')) document.body.classList.add('RBLX_URL_LAUNCHER_OPENED')
	break
}
`
window.document.body.appendChild(script)
script.remove()

setTimeout(() => {
	if (window.document.body.classList.contains('RBLX_URL_LAUNCHER_OPENED')) chrome.runtime.sendMessage(1, () => {}) // Send message to close the tab after execution
}, 3000)