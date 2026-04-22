function Header() {
  return (
    <header className="border-b border-slate-700 px-8 py-10">
      <h1 className="text-4xl font-black leading-tight text-white">
        Костюк Дмитро Васильович
      </h1>

      <p className="mt-4 text-lg font-medium text-slate-300">
        Фахівець з OSINT та аналізу витоків даних
      </p>

      <p className="mt-4 text-sm text-slate-300">
        Львів, Україна
      </p>

      <a
        href="mailto:codycraciun@gmail.com"
        className="mt-2 inline-block text-sm font-medium text-sky-300 underline decoration-slate-600 underline-offset-4 hover:text-sky-200"
      >
        codycraciun@gmail.com
      </a>
    </header>
  );
}

export default Header;