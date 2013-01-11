chrome.extension.onMessage.addListener (function (message, sender, sendResponse){
	/*if (message.download){
		//chrome.downloads.download({url:message.url,filename:"C:\Users\HerringtonDarkholme\Desktop\dragSearch"})
	}else{	*/	
		chrome.tabs.create(message)
		sendResponse(true)
	//}
})