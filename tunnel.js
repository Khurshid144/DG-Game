const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 5000 });

  // the public url of your tunnel
  console.log('===================================================');
  console.log('🌍 YOUR PUBLIC SERVER URL IS:');
  console.log(tunnel.url.replace('https://', 'ws://'));
  console.log('===================================================');
  console.log('Note: Keep this terminal open to keep the server live.');
  console.log('Use this URL in your AppConfig/Admin Panel.');

  tunnel.on('close', () => {
    console.log('Tunnel closed.');
  });
})();
