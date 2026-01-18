import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const token = process.env.TELEGRAM_TOKEN;

    try {
        const body = await request.json();
        // Мы используем JSON.stringify, чтобы превратить объект в строку для логов
        console.log("Получено сообщение от Telegram:", JSON.stringify(body)); 

        if (body.message && body.message.text) {
            const chatId = body.message.chat.id;
            const text = body.message.text;

            let responseText = "Я тебя слышу! Твой код работает 🚀";

            if (text === "/start") {
                responseText = "Привет! Я твой бот на Next.js 15. Чем помочь?";
            }

            // Отправка ответа обратно в Telegram
            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: responseText,
                }),
            });
        }

        // Возвращаем успешный статус. Здесь JSON.stringify исправляет твою ошибку!
        return NextResponse.json({ ok: true });
        
    } catch (error) {
        console.error("Ошибка в API роуте:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}