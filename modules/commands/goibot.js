const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "ai",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
 
  var tl = ["এতু ইমুশানাল কথা বলো আমার বস সাইফুল এর তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে_//-😭💦", "উফ এত ডাকাডাকি করো কেন বুজলাম না🫣", "আহ chuna, তুমারে আমি রাইতে ভালোবাসি😘", "I love you baby😘", "Respect《 ❃ ➠ bot owner saiful🔰", "হ্যা বলো জান শুনতেচি☺️","Ki hoise jaan☺️", "Amak na deke saiful🌸 k akta GF dew😁", "Jaaan tumi onek cute🫣☺️","Ask amr mon vlo nei dakben na🥲","Hmm jan ummah😘😘","Ajk kew  nai bole🖤😕","Iss ato dako keno lojja lage to 🫦🙈","Suna tomare amar valo lage,🙈😽","জি তুমি কি আমাকে ডেকেছো 😇🥀","আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ_//-😇😘"," কি গো সোনা আমাকে ডাকছ কেনো_//-😘","বার বার আমাকে ডাকস কেন pgl sgl_//-😡","আহ শোনা গো আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আসো_//-🥱","হুম জান তোমার অইখানে উম্মমাহ_//-😷😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি_//🌸😊","আমাকে এতো না ডেকে বস সাইফুলকে একটা বউ দে_//🙊🙄","Assalamualaikom,kmn Asen_//-🌺","jaN B for bal fhalaîbA naki_//-🙈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
 
    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
   };
 
    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };
 
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };
 
   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
 
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };
 
   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };
 
  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };
 
   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };
 
   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };
 
   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };
 
   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };
 
   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };
 
 
   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };
 
   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };
 
   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };
 
   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };
 
   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };
 
   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };
 
   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };
 
   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };
 
   if ((event.body.toLowerCase() == "jan tui abal") || (event.body.toLowerCase() == "tui abal")) {
     return api.sendMessage("️ai deikha jaa Ami Abl naki amr bal ase _//-😾😧", threadID);
   };
 
   if ((event.body.toLowerCase() == "jan kamon acho") || (event.body.toLowerCase() == "jan kamon acho")) {
     return api.sendMessage("️ami valo achi tumi kmn acho", threadID);
   };
 
   if ((event.body.toLowerCase() == "jan ki koro") || (event.body.toLowerCase() == "jan ki koro ")) {
     return api.sendMessage("️tmr kotha bhabi", threadID);
   };
 
   if ((event.body.toLowerCase() == "jan tor nani") || (event.body.toLowerCase() == "jan tor matha")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };
 
   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("uff jan bolo_//-😘💋❤️", threadID);
   };
 
   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("Hmm... boss সাইফুল ইসলাম ও তোমাকে onek onek ভালোবাসে_//-🫶💜 :))", threadID);
   };
 
   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };
 
   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };
 
   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };
 
   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };
 
   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };
 
   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("", threadID);
   };
 
   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };
 
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the( bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
 
 if (event.body.indexOf("bot") == 0 ||
(event.body.indexOf("bby") == 0) ||
(event.body.indexOf("Robot") == 0) ||
(event.body.indexOf("Bby") == 0) ||
(event.body.indexOf("বত") == 0) ||
(event.body.indexOf("বট") == 0) ||
      (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `╭──────•◈•──────╮
         𓊈𝙎𝘼𝙄𝙁𝙐𝙇-𝘽𝙊𝙏𓊉

🗣️Dear,「${name}」\n💌 ${rand}
         
╰──────•◈•──────╯`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
 
}
 
module.exports.run = function({ api, event, client, __GLOBAL }) { }
 