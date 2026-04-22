function Skills() {
  return (
    <section className="border-b border-slate-700 px-8 py-8">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
        Навички
      </p>

      <ul className="space-y-3">
        <li className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200">
          OSINT: пошук у відкритих джерелах, базова перевірка цифрових слідів
        </li>
        <li className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200">
          Бази даних: базове розуміння структури записів, фільтрація та аналіз даних
        </li>
        <li className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200">
          Інструменти: HTML, Git, GitHub, VS Code
        </li>
        <li className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200">
          Операційні системи: Windows, Linux
        </li>
      </ul>
    </section>
  );
}

export default Skills;