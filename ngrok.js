const ngrok = require('ngrok');

(async () => {
  try {
    const url = await ngrok.connect({
      proto: 'http',
      addr: 5000,
    });

    console.log('===================================================');
    console.log('🚀 NGROK TUNNEL IS LIVE!');
    console.log('🌍 YOUR PUBLIC SERVER URL IS:');
    console.log(url.replace('https://', 'ws://'));
    console.log('===================================================');
    console.log('Note: Keep this terminal open.');
    console.log('Copy this URL and tell me, I will update the app.');

  } catch (err) {
    console.error('Error starting ngrok:', err);
  }
})();
