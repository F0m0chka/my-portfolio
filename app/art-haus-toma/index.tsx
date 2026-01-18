import React from 'react';

export default function ArtHaus() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] font-sans">
      {/* Шапка как на скриншоте OSNOVA */}
      <header className="bg-[#1a1a1a] text-white p-6 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-black italic tracking-tighter">ART-HAUS <span className="text-red-600">FOMA</span></h1>
          <div className="text-right uppercase text-[10px] tracking-widest">
            <p>Связь: @foma_junior_bot</p>
          </div>
        </div>
      </header>

      {/* Синее меню */}
      <nav className="bg-[#2a7ba5] text-white uppercase text-xs font-bold">
        <div className="max-w-7xl mx-auto flex overflow-x-auto">
          {['Главная', 'Галерея', 'Цены', 'Отзывы', 'Контакты'].map((m) => (
            <div key={m} className="px-6 py-4 border-r border-white/10 hover:bg-[#1e5a7a] cursor-pointer">
              {m}
            </div>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-8">
        {/* Левое меню (Навигация) */}
        <aside className="w-full md:w-64">
          <div className="bg-[#333] text-white p-3 font-bold uppercase text-[11px]">Навигация</div>
          <ul className="bg-white border border-gray-300">
            {['Цифровые арты', '3D Модели', 'Логотипы', 'Отрисовка', 'Архив'].map((item) => (
              <li key={item} className="p-3 border-b border-gray-100 hover:bg-blue-50 text-sm cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Основной контент */}
        <section className="flex-1">
          <div className="bg-white p-10 border border-gray-300 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 font-bold uppercase text-xs -rotate-45 translate-x-6 translate-y-2">
               New
             </div>
             <h2 className="text-3xl font-light mb-8">Добро пожаловать в галерею</h2>
             <img 
               src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000" 
               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-[#eee]"
               alt="Foma Art"
             />
          </div>
        </section>
      </div>
    </div>
  );
}