module.exports.config = {
	name: "ramadan",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TANVIR TAMIM",
	description: "Ramadan asar time ck",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("March 01, 2025 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🕌🥰 অ্ঁগ্রি্ঁম্ঁ র্ঁম্ঁজা্ঁনু্ঁল্ঁ মো্ঁবা্ঁর্ঁক্ঁ 🥰🕌\n\n❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎\n\nخوف خدا دیکھنا ہے تو مسلمان کا دیکھ جو روزے میں وضو کا پانی منہ میں لیکر بھی پیتا نہیں ہے\n\n❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎\n\n🥰রমজান আসতে সময় বাকি ${days} দিন ${hours} ঘন্টা ${minutes} মিনিট ${seconds} সেকেন্ড মাএ🥰\n\n❣️CREDIT❣️ : 🌹SAIFUL ISLAM🌹`, event.threadID, event.messageID);
}