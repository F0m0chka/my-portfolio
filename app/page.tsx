import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8 font-sans">
      
      {/* Главный приветственный заголовок */}
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Приветствую на странице проектов от Foma
        </h1>
        <p className="text-gray-400 text-lg">
          Здесь собраны мои лучшие разработки и актуальные ссылки
        </p>
      </header>

      {/* Основные кнопки */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        {/* Кнопка ТГ-канала */}
        <a 
          href="https://t.me/+qxcAoFFsuvZiNWMy" 
          target="_blank" 
          className="px-8 py-4 bg-blue-600 rounded-2xl font-bold text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all transform hover:-translate-y-1"
        >
          📢 Мой сервер
        </a>

        {/* Кнопка Проектов */}
        <a 
          href="#projects" 
          className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-2xl font-bold text-xl hover:bg-slate-700 transition-all"
        >
          🚀 Мои проекты
        </a>

      </div>

      {/* Плавающая кнопка бота-помощника */}
      <div className="fixed bottom-8 right-8 animate-bounce">
        <a 
          href="https://t.me/f0m0chka_bot" 
          target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border border-white/20"
        >
          <span className="font-bold text-white">💬 Помощник</span>
        </a>
      </div>

      <footer className="mt-20 text-gray-500 text-sm italic">
        © 2026 Все права защищены | Создано Foma
      </footer>

    </div>
  );
}