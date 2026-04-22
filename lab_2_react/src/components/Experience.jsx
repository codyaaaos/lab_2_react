function Experience() {
  return (
    <section className="relative overflow-hidden px-8 py-10 md:px-12">
      <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/4 -translate-y-1/4 rounded-full bg-indigo-100 blur-3xl"></div>

      <div className="relative z-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-500">
          Досвід та практика
        </p>

        <h2 className="mb-8 text-3xl font-black text-slate-900">
          Напрями, з якими працюю
        </h2>

        <div className="grid gap-5">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-extrabold text-slate-900">
              OSINT-дослідження
            </h3>
            <p className="text-base leading-7 text-slate-600">
              Пошук і перевірка інформації з відкритих джерел, аналіз профілів,
              доменів, електронних адрес, соціальних мереж та інших цифрових слідів.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-extrabold text-slate-900">
              Аналіз витоків даних
            </h3>
            <p className="text-base leading-7 text-slate-600">
              Базовий аналіз злитих наборів даних, перегляд структури записів, пошук
              повторів, перевірка форматів електронних адрес, логінів та інших полів
              у навчальних цілях.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-extrabold text-slate-900">
              Робота з даними
            </h3>
            <p className="text-base leading-7 text-slate-600">
              Опрацювання списків, сортування інформації, фільтрація записів, пошук
              закономірностей та підготовка даних до подальшого аналізу.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;