module.exports.config = {
  name: "spam",
  version: "1.0.1", 
  hasPermssion: 2,
  credits: "Mohammad rahad",
  description: "",
  commandCategory: "...",
  cooldowns: 5,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = function ({ api, event, Users, args }) {
  const permission = ["100011152309303"];
   if (!permission.includes(event.senderID))
   return api.sendMessage("Only Bot Admin Can Use this command", event.threadID, event.messageID);
  if (args.length !== 2) {
    api.sendMessage(`Invalid number of arguments. Usage: ${global.config.PREFIX}spam [msg] [amount]`, event.threadID);
    return;
  }
  var { threadID, messageID } = event;
  var k = function (k) { api.sendMessage(k, threadID)};

  const msg = args[0];
  const count = args[1];

  //*vonglap

for (i = 0; i < `${count}`; i++) {
 k(`${msg}`);
}

}