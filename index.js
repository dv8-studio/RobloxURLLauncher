const script = document.createElement('script')
script.src = chrome.runtime.getURL('script.js')
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
