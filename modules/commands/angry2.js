const fs = require("fs");
module.exports.config = {
	name: "hfddddiiao",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😕")==0 || (event.body.indexOf("😕")==0 || (event.body.indexOf("😕")==0 || (event.body.indexOf("🫤")==0)))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/ex.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}