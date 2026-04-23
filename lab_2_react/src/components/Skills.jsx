function Skills() {
  return (
    <section className="mb-8">
      <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-indigo-500">
        Навички
      </h2>

      <div className="space-y-5">
        <div>
          <p className="mb-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
            Інструменти
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              OSINT
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              Git
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              HTML
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              CSS
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              JS
            </span>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
            Середовище
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              Windows
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600">
              Linux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;