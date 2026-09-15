const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'TU_IP_DE_ATERNOS.aternos.me', // Cámbialo por tu IP
  port: 25565,
  username: 'GeminiBot'
});

bot.on('spawn', () => {
  console.log('¡El bot ha entrado al servidor!');
  bot.chat('¡Hola! Ya estoy listo para ayudarte.');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if (message.toLowerCase() === 'hola') {
    bot.chat(`¡Hola ${username}!`);
  }
});
