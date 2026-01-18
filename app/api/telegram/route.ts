import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, message, contact } = await request.json();
    
    // Твой токен и ID (проверь их в .env.local, если они там есть)
    const token = process.env.TELEGRAM_BOT_TOKEN || "7598822558:AAH9m3pUvT7vD6pSAnrI-C0qI_H9u-H9u-8"; 
    const chatId = process.env.TELEGRAM_CHAT_ID || "5616335133";

    const text = `
🚀 **Новая заявка с сайта Foma Junior!**
👤 Имя: ${name}
📞 Контакт: ${contact}
💬 Сообщение: ${message}
    `;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) throw new Error('Telegram API error');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}