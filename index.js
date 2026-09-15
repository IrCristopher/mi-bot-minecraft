const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '127.0.0.1', // Dirección local de tu computadora
  port: 52410,       // Cambia esto por el puerto que te dé Minecraft al Abrir en LAN
  username: 'GeminiBot'
});

bot.on('spawn', () => {
  console.log('¡El bot ha entrado a tu mundo local!');
  bot.chat('¡Hola! Ya llegué a tu mundo.');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if (message.toLowerCase() === 'hola') {
    bot.chat(`¡Hola ${username}!`);
  }
});
