const axios = require('axios');

module.exports.config = {
  name: 'gpt',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'rickciel',
  usePrefix: true,
  description: 'Have a conversation with an AI',
  commandCategory: 'Utility',
  usages: 'ai [your message]',
  cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
  if (args.length === 0) {
    await api.sendMessage('Please provide a message to start the conversation.', event.threadID);
    return;
  }

  const message = args.join(' ');

  try {
    const response = await axios.get(`https://ai-api.chatbotmesss.repl.co/api/ask?text=${encodeURIComponent(message)}`);
    const data = response.data;

    if (data.conversationId && data.response) {
      await api.sendMessage(data.response, event.threadID);
    } else {
      await api.sendMessage('Failed to get a response from the AI.', event.threadID);
    }
  } catch (error) {
    console.error(error);
    await api.sendMessage('An error occurred while processing your request.', event.threadID);
  }
};
