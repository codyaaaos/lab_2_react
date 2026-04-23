function Experience() {
  return (
    <section className="mb-10">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-indigo-500">
        Досвід та практика
      </h2>

      <div className="space-y-6 border-l border-slate-200 pl-6 dark:border-slate-700">
        <div className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-900"></span>
          <p className="mb-1 text-[11px] uppercase tracking-wider text-slate-400">
            OSINT
          </p>
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
            OSINT-дослідження
          </h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Пошук і перевірка інформації з відкритих джерел, аналіз профілів,
            доменів, електронних адрес, соціальних мереж та інших цифрових слідів.
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-900"></span>
          <p className="mb-1 text-[11px] uppercase tracking-wider text-slate-400">
            Бази даних
          </p>
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
            Аналіз витоків даних
          </h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Базовий аналіз злитих наборів даних, перегляд структури записів, пошук
            повторів, перевірка форматів електронних адрес, логінів та інших полів
            у навчальних цілях.
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-900"></span>
          <p className="mb-1 text-[11px] uppercase tracking-wider text-slate-400">
            Дані
          </p>
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
            Робота з даними
          </h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Опрацювання списків, сортування інформації, фільтрація записів, пошук
            закономірностей та підготовка даних до подальшого аналізу.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;