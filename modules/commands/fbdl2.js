const axios = require('axios');
const fs = require('fs');
const { promisify } = require('util');

const unlinkAsync = promisify(fs.unlink);

module.exports.config = {
  name: 'fbdownloadv2',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'rickciel',
  usePrefix: false,
  description: 'Download and send a Facebook video',
  commandCategory: 'Utility',
  usages: '[video URL]',
  cooldowns: 3,
};


module.exports.run = async function ({ api, event, args }) {
  if (args.length === 0) {
    await api.sendMessage('Please provide a valid Facebook video URL.', event.threadID);
    return;
  }

  const videoURL = args[0];

  try {
    const response = await axios.get(`https://fb-api.chatbotmesss.repl.co/fetch?url=${encodeURIComponent(videoURL)}`);
    const data = response.data;

    if (data.success) {
      await api.sendMessage('Facebook video is downloaded. Please wait while it\'s being sent...', event.threadID);

      let downloadLink;
      if (videoURL.includes('/reel/')) {
        downloadLink = data.links['Download High Quality']; // For reels
      } else {
        downloadLink = data.links['Download Low Quality']; // For regular videos
      }

      const videoBuffer = await axios.get(downloadLink, { responseType: 'arraybuffer' });
      const videoFileName = `${Date.now()}.mp4`;

      await fs.promises.writeFile(videoFileName, videoBuffer.data);
      const videoStream = fs.createReadStream(videoFileName);

      await api.sendMessage({ attachment: videoStream }, event.threadID);
      await unlinkAsync(videoFileName); 

    } else {
      await api.sendMessage('Failed to retrieve the video.', event.threadID);
    }
  } catch (error) {
    console.error(error);
    await api.sendMessage('An error occurred while processing your request.', event.threadID);
  }
};
