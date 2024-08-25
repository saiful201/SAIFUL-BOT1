module.exports.config = {
  name: "catstatus",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abdulla",
  description: "log",
  commandCategory: "System",
  usages: "",
  cooldowns: 1,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  console.log(data)
  var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `true` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `true` : guard = `${guard}`;
  antiout == null ? antiout = `true` : antiout = `${antiout}`;
return api.sendMessage(`♛🅱🅾🆃 is ACTIVE now ☑ \n➳BOT ADMIN【Saiful islam】\n\n❀────•🦋•────❀\n🎓Prefix: ${prefix}\n❯ 📝Log: ${log}\n❯ ⬆️ Rankup: ${rankup}\n❯ ↩️ Resend: ${resend}\n❯ 🔰 Tag admin: ${tagadmin}\n❯ 🧑‍💻 Antirobbery: ${guard}\n❯ 🔱 Antiout: ${antiout}\n❀────•☑•────❀`, threadID, messageID);
    }