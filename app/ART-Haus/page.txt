import React from 'react';

const ART_ITEMS = [
  { id: 1, title: 'Digital Genesis', category: 'Conceptual', url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000' },
  { id: 2, title: 'Cyberform', category: '3D Render', url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000' },
  { id: 3, title: 'Void Texture', category: 'Abstract', url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000' },
];

export default function ArtHausPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Своя отдельная навигация */}
      <nav className="p-10 flex justify-between items-center border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          ART-Haus-Foma
        </div>
        <div className="text-[10px] tracking-[0.4em] uppercase text-zinc-600">
          Independent Creative Space
        </div>
      </nav>

      <section className="py-24 px-10">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-20">
          The <br /> Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ART_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-crosshair">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900 mb-6">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{item.category}</p>
              <h3 className="text-xl font-bold uppercase tracking-tighter">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="p-20 text-center border-t border-white/5">
        <a href="https://t.me/foma_junior_bot" className="text-xs uppercase tracking-[0.5em] hover:text-zinc-400 transition-colors">
          Contact via @foma_junior_bot
        </a>
      </footer>
    </div>
  );
}