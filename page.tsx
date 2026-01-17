export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Foma Portfolio</h1>
      <p className="text-slate-400 mb-8 text-center">Сайт в процессе обновления. Бот временно отключен.</p>
      <div className="flex gap-4">
        <a href="https://t.me/foma_junior_bot" className="bg-blue-600 px-6 py-2 rounded-full">Telegram Bot</a>
        <a href="https://t.me/+qxcAoFFsuvZiNWMy" className="border border-slate-700 px-6 py-2 rounded-full">Channel</a>
      </div>
    </div>
  );
}