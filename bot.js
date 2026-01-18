const TOKEN = "8417875829:AAGi0pU9GlEdDLdTxH6mzDCuRXrzyOwv3j0";
const API_URL = `https://api.telegram.org/bot${TOKEN}`;

// Кнопки меню (вынесены отдельно для экономии памяти)
const keyboard = {
    keyboard: [
        [{ text: "🚀 Мои проекты" }, { text: "📢 Мой сервер" }],
        [{ text: "🔄 Перезапустить меню" }]
    ],
    resize_keyboard: true
};

async function botHandler() {
    console.log("⚡ Бот запущен в режиме энергосбережения...");
    let offset = 0;

    while (true) {
        try {
            const response = await fetch(`${API_URL}/getUpdates?offset=${offset}&timeout=30`);
            const { result } = await response.json();

            if (result && result.length > 0) {
                for (const update of result) {
                    offset = update.update_id + 1;
                    const msg = update.message;
                    if (!msg || !msg.text) continue;

                    const chatId = msg.chat.id;
                    const text = msg.text;
                    let reply = "";

                    // Оптимизированная логика ответов (исправленная орфография)
                    if (text === "/start" || text === "🔄 Перезапустить меню") {
                        reply = `👋 *Приветствую!*\n\nЯ твой персональный помощник. Используй кнопки ниже для навигации.`;
                    } else if (text === "📢 Мой сервер") {
                        reply = "📢 *Мой Telegram-сервер:*\nhttps://t.me/+qxcAoFFsuvZiNWMy";
                    } else if (text === "🚀 Мои проекты") {
                        reply = "🚀 *Список моих проектов:*\nhttps://my-portfolio-maxfomin2008-8555-f0m0chkas-projects.vercel.app";
                    } else {
                        reply = "✨ Пожалуйста, используйте кнопки меню.";
                    }

                    // Отправка ответа
                    await fetch(`${API_URL}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: reply,
                            parse_mode: "Markdown",
                            reply_markup: keyboard
                        })
                    });
                }
            }
        } catch (err) {
            console.error("⚠️ Ошибка сети, повторяю попытку...");
            await new Promise(resolve => setTimeout(resolve, 5000)); // Пауза при ошибке, чтобы не спамить запросами
        }
    }
}

botHandler();