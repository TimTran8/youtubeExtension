// console.log("JS loaded")

// channelList = []

// displayInput = function(value) {
// 	// var name = document.getElementById("channelName");
// 	channelList.push(value);

// 	var listLength = channelList.length

// 	console.log(listLength)

// }
// // $(document).ready(displayInput)
// // console.log("testing")

// alert("Hello from your Chrome extension!")
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "clicked_browser_action") {
			var firstHref = $("a[href^='http']").eq(0).attr("href");

			console.log(firstHref);
		}
	}
);