"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact, message }),
    });

    if (response.ok) {
      alert("✅ Сообщение отправлено в @foma_junior_bot!");
      setName(''); setContact(''); setMessage('');
    } else {
      alert("❌ Ошибка. Проверьте токен в api/telegram/route.ts");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border text-black">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Foma Junior</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 border rounded-xl" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />
          <input className="w-full p-3 border rounded-xl" placeholder="Telegram / Телефон" value={contact} onChange={e => setContact(e.target.value)} required />
          <textarea className="w-full p-3 border rounded-xl h-32" placeholder="Ваше сообщение" value={message} onChange={e => setMessage(e.target.value)} required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">Отправить</button>
        </form>
        <div className="mt-8 text-center border-t pt-4">
          <a href="https://t.me/foma_junior_bot" target="_blank" className="text-blue-500 font-bold hover:underline">
            ✈️ Написать напрямую в @foma_junior_bot
          </a>
        </div>
      </div>
    </main>
  );
}