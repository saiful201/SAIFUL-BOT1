const API = "https://imtiaz.x-sakibin.repl.co";

module.exports.config = {
  name: "text",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abdulla",
  description: "Text pro",
  commandCategory: "text edit",
  usages: "abdulla<text>",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");

  const number = args[0];
  const text = args.slice(1).join("");

  if (!number || isNaN(number)) {
    return api.sendMessage("❗Use /text [no.] [text]\n❗Example:\n  /text 5 Anamul\nTotal Text limit 207...", event.threadID, event.messageID);
  }

  const apiEndpoint = `/api/textpro?number=${number}&text=${text}`;
  const pathSave = __dirname + `/cache/server2.png`;

  api.sendMessage("", event.threadID, event.messageID);

  axios
    .get(API + apiEndpoint, { responseType: "arraybuffer" })
    .then((data) => {
      const imageBuffer = data.data;
      fs.writeFileSync(pathSave, Buffer.from(imageBuffer));
      api.sendMessage(
        {
    body: `🌸Edit Done✅\n🖥️API by Anamul⚡`,
          attachment: fs.createReadStream(pathSave),
        },
        event.threadID,
        () => fs.unlinkSync(pathSave)
      );
    })
    .catch((error) => {
      let err;
      if (error.response) {
        err = JSON.parse(error.response.data.toString());
      } else {
        err = error;
      }
      return api.sendMessage("ERROR ❌\nCYBER-CAT Server Busy😓🥹", event.threadID, event.messageID);
    });
};