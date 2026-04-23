function Header({ theme, toggleTheme }) {
  return (
    <header className="mb-10 border-b border-slate-200 pb-8 dark:border-slate-700">
      <div className="mb-5 flex justify-end">
        <button
          onClick={toggleTheme}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          {theme === 'light' ? 'Тема: Денна ☀️' : 'Тема: Нічна 🌙'}
        </button>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-5xl font-black leading-none tracking-tight text-slate-900 dark:text-white">
            Костюк <span className="text-indigo-600 dark:text-indigo-400">Дмитро</span>
          </h1>

          <p className="mt-4 flex items-center gap-2 text-base font-medium text-slate-500 dark:text-slate-400">
            <span className="h-[2px] w-8 bg-indigo-500"></span>
            Фахівець з OSINT та аналізу витоків даних
          </p>
        </div>

        <div className="text-left md:text-right">
          <a
            href="mailto:codycraciun@gmail.com"
            className="block text-sm font-medium text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            codycraciun@gmail.com
          </a>
          <span className="mt-1 block text-sm text-slate-400 dark:text-slate-500">
            Львів, Україна
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;