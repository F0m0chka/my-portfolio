const TOKEN = "8417875829:AAGi0pU9GlEdDLdTxH6mzDCuRXrzyOwv3j0";
const API_URL = `https://api.telegram.org/bot${TOKEN}`;

const botConfig = {
    siteUrl: "https://my-portfolio-git-main-f0m0chkas-projects.vercel.app",
    serverUrl: "https://t.me/+qxcAoFFsuvZiNWMy",
    keyboard: {
        keyboard: [
            [{ text: "🚀 Мои проекты" }, { text: "📢 Мой сервер" }],
            [{ text: "🔄 Перезапустить меню" }]
        ],
        resize_keyboard: true
    }
};

async function botHandler() {
    console.log("------------------------------------------");
    console.log("🚀 БОТ @foma_junior_bot ЗАПУЩЕН");
    console.log("------------------------------------------");
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
                    const userName = msg.from.first_name || "Пользователь";
                    let reply = "";

                    if (text === "/start" || text === "🔄 Перезапустить меню") {
                        reply = `👋 *Приветствую, ${userName}!*\n\nЯ твой помощник @foma_junior_bot. Используй меню ниже.`;
                    } else if (text === "📢 Мой сервер") {
                        reply = `📢 *Мой сервер:*\n${botConfig.serverUrl}`;
                    } else if (text === "🚀 Мои проекты") {
                        reply = `🚀 *Мои проекты:*\n${botConfig.siteUrl}`;
                    } else {
                        reply = "✨ Используй кнопки меню.";
                    }

                    await fetch(`${API_URL}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: reply,
                            parse_mode: "Markdown",
                            reply_markup: botConfig.keyboard
                        })
                    });
                }
            }
        } catch (err) {
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}

botHandler();