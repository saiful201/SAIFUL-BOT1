const fs = require("fs");
module.exports.config = {
	name: "hasi36",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "FOYSAL HOSEN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Bot koi re  ") ||
     react.includes("bot") || 
react.includes("Robot") || 
react.includes("বট ") ||
react.includes("রোবট")) {
		var msg = {
		    body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }