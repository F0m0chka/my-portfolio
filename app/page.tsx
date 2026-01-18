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
    <main className="min-h-screen relative overflow-hidden bg-[#020406] text-white font-sans flex items-center justify-center p-4">
      {/* Глубокие темно-зеленые волны на фоне */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#00331a]/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#004d26]/20 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '3s'}}></div>

      <div className="relative z-10 w-full max-w-lg bg-[#050a0a]/90 backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,255,136,0.05)] border border-[#00ff88]/10">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-b from-[#00ff88] to-[#004d26] bg-clip-text text-transparent uppercase italic">
            Foma Junior
          </h1>
          <p className="text-[#00ff88]/40 mt-3 text-[10px] font-bold tracking-[0.3em] uppercase">Gamma Doppler // Emerald Phase</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            className="w-full p-4 bg-[#0a0f0f] border border-[#00ff88]/10 rounded-2xl outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all placeholder:text-[#00ff88]/20 text-[#00ff88]" 
            placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" value={name} onChange={e => setName(e.target.value)} required 
          />
          <input 
            className="w-full p-4 bg-[#0a0f0f] border border-[#00ff88]/10 rounded-2xl outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all placeholder:text-[#00ff88]/20 text-[#00ff88]" 
            placeholder="СВЯЗЬ (TG/TEL)" value={contact} onChange={e => setContact(e.target.value)} required 
          />
          <textarea 
            className="w-full p-4 bg-[#0a0f0f] border border-[#00ff88]/10 rounded-2xl outline-none focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all h-32 resize-none placeholder:text-[#00ff88]/20 text-[#00ff88]" 
            placeholder="ВАШЕ СООБЩЕНИЕ..." value={message} onChange={e => setMessage(e.target.value)} required 
          />
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-[#00ff88] to-[#008044] hover:brightness-110 text-[#020406] py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(0,255,136,0.2)] transform transition-all active:scale-95 disabled:opacity-50 uppercase tracking-tighter"
          >
            {status === 'sending' ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ДАННЫЕ'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-[#00ff88] text-center mt-6 text-sm font-bold animate-pulse uppercase tracking-widest">
            ★ ЗАЯВКА ПРИНЯТА ★
          </p>
        )}

        <footer className="mt-12 text-center border-t border-[#00ff88]/5 pt-8">
          <a 
            href="https://t.me/foma_junior_bot" 
            target="_blank" 
            className="group inline-flex items-center gap-3 text-[#00ff88]/50 hover:text-[#00ff88] transition-all font-bold text-xs tracking-widest"
          >
            <span>DIRECT LINK:</span>
            <span className="bg-[#00ff88]/10 px-3 py-1 rounded-md">@foma_junior_bot</span>
          </a>
        </footer>
      </div>
    </main>
  );
}