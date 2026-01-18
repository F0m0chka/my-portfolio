export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Сайт в процессе обновления. Бот временно отключен.
      </h1>
      <div className="flex gap-4">
        <a 
          href="https://t.me/foma_junior_bot" 
          className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Telegram
        </a>
        <a 
          href="https://t.me/iqxcAoFFsuvZiNWMy" 
          className="border border-slate-700 px-6 py-2 rounded-full hover:bg-slate-800 transition"
        >
          Контакт
        </a>
      </div>
    </div>
  );
}