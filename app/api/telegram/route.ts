import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, message, contact } = await request.json();
    
    // ТВОЙ НОВЫЙ ТОКЕН И ID
    const token = "8417875829:AAFt0JO8UuDoS7T5eXymIJjilOJMW90680M"; 
    const chatId = "5616335133";

    const text = `
🆕 **Новая заявка: Foma Junior**
────────────────────
👤 **Имя**: ${name}
📞 **Контакт**: ${contact}
💬 **Сообщение**: ${message}
────────────────────
🤖 *Бот: @foma_junior_bot*
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

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}