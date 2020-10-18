const script = document.createElement('script')
script.textContent = `
const currentUrl = window.location.href
const urlParams = new URLSearchParams(window.location.search)
const options = { // Setup all possible actions and specify require arguments
	followPlayerIntoGame: ['followUserId'],
	editGameInStudio: ['editPlaceId'],
	joinGameInstance: [{param: 'placeId', regex: /\\/games\\/(\\d+)/}, 'gameId'],
	joinPrivateGame: [{param: 'privatePlaceId', regex: /\\/games\\/(\\d+)/}, ['privateId'], ['code']],
	joinMultiplayerGame: ['placeId']
}

const minimumParams = {
	joinPrivateGame: 2
}

for (const action in options) { // Iterate actions
	const data = options[action]
	const input = []
	for (const key of data) { // Fetches required parameters into table
		const optional = Array.isArray(key)
		let paramKey = optional ? key[0] : key
		if (!optional && typeof key === 'object') {
			if (key.regex) {
				const result = key.regex.exec(currentUrl)
				if (result) {
					input.push(result[1])
					continue
				}
			}
			paramKey = key.param
		}
		if (!paramKey) continue

		const value = urlParams.get(paramKey)
		if (value != null) { input.push(value)
		} else if (optional) { input.push(null)
		}
	}
	if (input.length !== data.length) continue // Not enough values, check next action
	
	if (minimumParams[action]) {
		let nonNullParams = 0
		for (const param of input) if (param != null) nonNullParams += 1
		if (nonNullParams < minimumParams[action]) continue // Not enough values, check next action
	}
	
	let attempt = 0
	const interval = setInterval(() => {
		attempt += 1
		try {
			Roblox.GameLauncher[action](...input) // Execute
			clearInterval(interval)
			if (!urlParams.get('dontClose')) document.body.classList.add('RBLX_URL_LAUNCHER_OPENED')
		} catch(e) {
			console.log("Couldn't run the game - ", e)
		}
		if (attempt > 3) clearInterval(interval) // Stop if exceeded the limit of attempts
	}, 1000)
	break
}
`
window.document.body.appendChild(script)
script.remove()

let attempt = 0
const interval = setInterval(() => {
	attempt += 1
	if (window.document.body.classList.contains('RBLX_URL_LAUNCHER_OPENED')) {
		clearInterval(interval)
		setTimeout(
			() => chrome.runtime.sendMessage(1, () => {}) // Send message to close the tab after execution
		, 2500)
	}
	if (attempt > 10) clearInterval(interval)
}, 500)