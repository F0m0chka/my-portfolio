import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, message, contact } = await request.json();
    
    // Твой новый рабочий токен
    const token = "8417875829:AAFt0JO8UuDoS7T5eXymIJjilOJMW90680M"; 
    const chatId = "5616335133";

    const text = `
🆕 **Новая заявка: Foma Junior**
👤 **Имя**: ${name}
📞 **Контакт**: ${contact}
💬 **Сообщение**: ${message}
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

    if (!response.ok) return NextResponse.json({ success: false }, { status: 400 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}