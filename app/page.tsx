"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact, message }),
    });

    if (response.ok) {
      setStatus('success');
      setName(''); setContact(''); setMessage('');
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0f172a] text-white font-sans flex items-center justify-center p-4">
      {/* Интересный бэкграунд: анимированные пятна */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 w-full max-w-lg bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">
            Foma Junior
          </h1>
          <p className="text-slate-400 mt-2 text-sm font-medium">Связь через @foma_junior_bot</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
            placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} required 
          />
          <input 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
            placeholder="Telegram или Телефон" value={contact} onChange={e => setContact(e.target.value)} required 
          />
          <textarea 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all h-32 resize-none" 
            placeholder="Опишите проект..." value={message} onChange={e => setMessage(e.target.value)} required 
          />
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-900/20 transform transition-all active:scale-95 disabled:opacity-50"
          >
            {status === 'sending' ? 'Отправка...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
          </button>
        </form>

        {status === 'success' && <p className="text-emerald-400 text-center mt-4 animate-bounce">✅ Получено! Проверь Telegram.</p>}

        <footer className="mt-10 text-center border-t border-white/5 pt-6">
          <a 
            href="https://t.me/foma_junior_bot" 
            target="_blank" 
            className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold"
          >
            <span>Написать в</span>
            <span className="text-blue-400 group-hover:underline">@foma_junior_bot</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </footer>
      </div>
    </main>
  );
}