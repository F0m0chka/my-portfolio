"use client";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#020406] text-white font-sans flex items-center justify-center p-4">
      {/* Глубокие темно-зеленые переливы на фоне */}
      <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-[#00331a]/20 rounded-full blur-[130px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00ff88]/5 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '3s'}}></div>

      <div className="relative z-10 w-full max-w-md bg-[#050a0a]/90 backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,255,136,0.05)] border border-[#00ff88]/10 text-center">
        <header className="mb-12">
          <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-b from-[#00ff88] to-[#004d26] bg-clip-text text-transparent uppercase italic">
            Foma Junior
          </h1>
          <p className="text-[#00ff88]/40 mt-3 text-[10px] font-bold tracking-[0.3em] uppercase">Gamma Doppler // Hub</p>
        </header>

        <div className="flex flex-col gap-5">
          {/* Кнопка 1: Мои проекты */}
          <a 
            href="/projects" 
            className="group relative w-full py-6 bg-[#0a0f0f] border border-[#00ff88]/20 rounded-2xl font-black text-xl tracking-widest uppercase overflow-hidden transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] active:scale-95 text-[#00ff88]"
          >
            <span className="relative z-10 italic">1. Мои проекты</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/0 via-[#00ff88]/5 to-[#00ff88]/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>

          {/* Кнопка 2: Помощник (Ссылка на бота) */}
          <a 
            href="https://t.me/foma_junior_bot" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 bg-gradient-to-r from-[#00ff88] to-[#008044] text-[#020406] rounded-2xl font-black text-xl tracking-widest uppercase shadow-[0_10px_40px_rgba(0,255,136,0.2)] transform transition-all hover:brightness-110 active:scale-95 italic"
          >
            2. Помощник
          </a>
        </div>

        <footer className="mt-12 opacity-30">
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#00ff88]">System Status: Online</p>
        </footer>
      </div>
    </main>
  );
}