const TelegramBot = require("node-telegram-bot-api");
const keep_alive = require("./keep_alive");

// Bot tokenini to'g'ridan-to'g'ri kodga yozish
// Eslatma: BU XAVFSIZ USUL EMAS VA TAVSIYA ETILMAYDI!
const token = "7991412037:AAGi6EMWLnI92R5xZDOINWPQpz0PP_5FsVQ"; // <<< O'zingizning bot tokeningizni bu yerga joylashtiring

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
    },
  );
});

console.log("Bot ishga tushdi..."); // Bot ishga tushganini bildirish uchun
