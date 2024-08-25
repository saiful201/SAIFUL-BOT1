module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100011152309303") {
    var aid = ["100011152309303"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" SaIFul bhai এখন অনেক বিজি যা বলার আমাকে বলতে পারো🙋‍♂️🙋‍♂️", "সাইফুল বাবুকে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "সাইফুলকে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু বস সাইফুল মেনশন দিবা না😠"," সাইফুল খুব বিজি ওকে মেনশন দিবা না 😏","বস সাইফুল এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}