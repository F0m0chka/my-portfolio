import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_TOKEN;

  try {
    const body = await request.json();
    console.log("Получено сообщение от Telegram:", JSON.stringify(body)); // Появится в логах Vercel

    if (body.message && body.message.text) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      let responseText = "Я тебя слышу! Твой код работает 🚀";

      if (text === "/start") {
        responseText = "Привет! Я твой бот на Next.js 16. Чем помочь?";
      }

      // Отправка ответа
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: responseText,
        }),
      });

      const result = await res.json();
      console.log("Ответ от Telegram API:", JSON.json(result));
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Ошибка в работе бота:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

export async function GET() {
  return new Response("Бот активен и ждет сообщений ✅");
}