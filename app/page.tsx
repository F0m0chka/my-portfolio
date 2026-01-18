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
        alert("✅ Сообщение отправлено боту @foma_junior_bot!");
        setName(''); setContact(''); setMessage('');
      } else {
        alert("❌ Ошибка при отправке");
      }
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-black">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-6">Связаться со мной</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Ваше имя" required
            className="w-full p-3 border rounded-lg"
            value={name} onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text" placeholder="Ваш Telegram или Телефон" required
            className="w-full p-3 border rounded-lg"
            value={contact} onChange={(e) => setContact(e.target.value)}
          />
          <textarea 
            placeholder="Ваше сообщение" required
            className="w-full p-3 border rounded-lg h-32"
            value={message} onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Отправить через @foma_junior_bot
          </button>
        </form>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-gray-600 mb-2">Или напишите напрямую:</p>
          <a 
            href="https://t.me/foma_junior_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 font-bold text-xl hover:underline"
          >
            👉 Написать в @foma_junior_bot
          </a>
        </div>
      </div>
    </main>
  );
}