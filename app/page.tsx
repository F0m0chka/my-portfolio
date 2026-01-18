"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });

      if (response.ok) {
        alert("✅ Сообщение успешно отправлено боту @foma_junior_bot!");
        setName(''); setContact(''); setMessage('');
      } else {
        alert("❌ Ошибка при отправке. Попробуйте написать напрямую.");
      }
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-black font-sans">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-600">Foma Junior</h1>
        <p className="text-gray-500 mb-8">Оставьте заявку, и я получу её в Telegram через @foma_junior_bot</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
            <input 
              type="text" placeholder="Иван Иванов" required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Контакт для связи</label>
            <input 
              type="text" placeholder="@username или +7..." required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              value={contact} onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ваше сообщение</label>
            <textarea 
              placeholder="Опишите ваш проект или вопрос..." required
              className="w-full p-3 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-blue-500 outline-none"
              value={message} onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Отправить данные боту
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 mb-3 italic">Или перейдите в Telegram напрямую:</p>
          <a 
            href="https://t.me/foma_junior_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-6 py-3 rounded-full font-bold text-lg hover:bg-sky-200 transition-colors"
          >
            <span>✈️</span> Написать в @foma_junior_bot
          </a>
        </div>
      </div>
    </main>
  );
}