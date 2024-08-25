module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Leiam Nash",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`𝗕𝗢𝗧 ${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
		return api.sendMessage(`${global.config.BOTNAME} 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱\n𝗻𝗼𝘄 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗯𝗼𝘁\n\n𝗽𝗿𝗲𝗳𝗶𝘅: ${global.config.PREFIX} \n ${global.config.PREFIX} HELP FOR LIST COMMAND`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};

			var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });

				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

			(typeof threadData.customJoin == "undefined") ? msg = "💐 WELCOME\n{uName}\nআপনাকে আমাদের BFF OFFICIAL  Group এ Join হওয়ার জন্য ধন্যবাদ। আপনি আমাদের GROUP এর\n {soThanhVien} Number member আসা করি আপনি আমাদের সকল রুলস মেনে চলবেন।🖤💐\n[𝑮𝑹𝑶𝑼𝑷 𝑹𝑼𝑳𝑬𝑺]\n১. গ্ৰুপে কেউ ১৮+ কিছু দিবেন না।\n২. আমাদের গ্ৰুপে অনেক Senior ভাই ও আপু আছে, সবাইকে সম্মান দিবেন।\n৩. অযথা BOT Command দিয়ে বিরক্ত করবেন না।\n𝙳𝚎𝚜𝚒𝚐𝚗𝚎𝚍 𝙱𝚢; Anamul Huq" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/BRHFOY0.jpg",
"https://i.imgur.com/BRHFOY0.jpg",
"https://i.imgur.com/BRHFOY0.jpg",
"https://i.imgur.com/BRHFOY0.jpg",
      ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
                                                  }