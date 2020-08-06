chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request === 1) { // Close the tab
    chrome.tabs.remove(sender.tab.id, () => {})
  }
})