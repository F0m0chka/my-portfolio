import TelegramBot from 'node-telegram-bot-api';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Твои учетные данные
const token = '8417875829:AAFt0JO8UuDoS7T5eXymIJjilOJMW90680M';
const aiKey = "AIzaSyCBOzachdLgjf2ADIshL9RKWurIC5_3TnE";

const bot = new TelegramBot(token, { polling: true });
const genAI = new GoogleGenerativeAI(aiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Инструкция для AI (личность бота)
const systemInstruction = "Ты — официальный AI-ассистент разработчика Фомы. Отвечай кратко и вежливо. Рассказывай о его навыках (Next.js, React, Node.js), если спрашивают. Если вопрос сложный — предлагай написать Фоме напрямую: @foma_junior.";

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text || text.startsWith('/')) return;

  // Эффект "печатает..."
  bot.sendChatAction(chatId, 'typing');

  try {
    const prompt = `${systemInstruction}\n\nПользователь: ${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    await bot.sendMessage(chatId, response.text());
  } catch (error) {
    console.error("AI Error:", error);
    await bot.sendMessage(chatId, "Мои нейронные связи немного заняты. Попробуй еще раз через минуту!");
  }
});

console.log('🚀 Автономный AI-бот Фомы запущен!');