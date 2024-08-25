const fs = require("fs");
module.exports.config = {
        name: "cumudao",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "\u0041\u0075\u0074\u006f \u0072\u0065\u0061\u0063\u0074\u0069\u006f\u006e \u006d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("উম্মম্মাহ")==0 || event.body.indexOf("kiss")==0 ||
event.body.indexOf("Kiss")==0 ||
event.body.indexOf("cumu")==0 ||
event.body.indexOf("Cumu")==0 ||
event.body.indexOf("কিস")==0 ||
event.body.indexOf("💋")==0 || event.body.indexOf("ummmmmmmmmmmmah")==0 || event.body.indexOf("চুমু")==0) {
    var msg = {
        body: "╭──────•◈•───────╮\n         𝗦𝗔𝗜𝗙𝗨𝗟-𝗕𝗢𝗧       \n__ওই সুনো না-🙁\n-একটা উম্মম্মাহ দিবা-🙈🤭💋\n╰──────•◈•───────╯",
        attachment: fs.createReadStream(__dirname + `/noprefix/kiss.mp4`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }