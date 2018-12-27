const request = require('request')
const cheerio = require('cheerio')

request('https://www.youtube.com/feed/subscriptions', (error, response, html)=>{
	if(!error && response.statusCode == 200) {
		const $ = cheerio.load(html);

		var channelsList = [];

		const section = $('#items')
		
		const video = $('')
	}
});
