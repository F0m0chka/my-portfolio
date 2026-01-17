import React from 'react';

export default function Home() {
  const skills = ['Next.js 15', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Telegram API'];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans antialiased">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          Junior Fullstack Developer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6 tracking-tight">
          Foma | Portfolio
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Разрабатываю современные веб-интерфейсы и эффективные решения на Node.js. 
          Специализируюсь на создании экосистем в Telegram.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://t.me/foma_junior_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1"
          >
            Связаться в Telegram
          </a>
          
          <a 
            href="https://t.me/+qxcAoFFsuvZiNWMy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-slate-700 hover:bg-slate-800/50 px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1"
          >
            Foma_Junior Channel
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">Стек технологий</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl text-center hover:border-blue-500/50 transition-all group"
            >
              <p className="text-sm font-medium text-slate-400 group-hover:text-blue-400">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5">
        <p>© 2026 Foma. Built with Next.js 15</p>
      </footer>
    </div>
  );
}