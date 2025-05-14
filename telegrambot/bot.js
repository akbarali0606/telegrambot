const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

// Bot tokenini .env fayldan oling
const token = process.env.TOKEN;

// Botni ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// Har qanday xabarni qayta ishlash
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // Tugma bilan xabar yuborish
  bot.sendMessage(
    chatId,
    "Video tamosh qilishdan oldin quydagi havoladan toliq royixatdan oting 📍",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Qo'shilish ➕",
              url: "https://t.me/patrickstarsrobot?start=907402803",
            },
          ],
        ],
      },
    }
  );
});
