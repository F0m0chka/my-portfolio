import TelegramBot from 'node-telegram-bot-api';

const token = '8417875829:AAFt0JO8UuDoS7T5eXymIJjilOJMW90680M';
const bot = new TelegramBot(token, { polling: true });

// База знаний бота (твоё ТЗ для него)
const botKnowledge = {
    "кто ты": "Я AI-ассистент Фомы. Я помогаю отвечать на вопросы, пока он кодит новый проект.",
    "стек": "Фома работает с Next.js 15, React, Tailwind и Node.js. Полный список есть на сайте!",
    "цена": "Стоимость разработки обсуждается индивидуально. Напиши @foma_junior напрямую для оценки.",
    "старт": "Привет! Я твой автономный помощник. Спрашивай что угодно о проектах Фомы."
};

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text?.toLowerCase();

    if (!text) return;

    // Логика автономного ответа
    let response = "Интересный вопрос! Я пока учусь, но ты можешь заглянуть на сайт или написать Фоме лично: @foma_junior";

    for (let key in botKnowledge) {
        if (text.includes(key)) {
            response = botKnowledge[key];
            break;
        }
    }

    await bot.sendMessage(chatId, response);
});

console.log('✅ Автономный AI-бот запущен...');