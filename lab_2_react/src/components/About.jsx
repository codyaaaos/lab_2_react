function About() {
  return (
    <section className="border-b border-slate-200 px-8 py-10 md:px-12">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-500">
        Про мене
      </p>

      <h2 className="mb-5 text-3xl font-black text-slate-900">
        Коротко про мій напрям
      </h2>

      <p className="max-w-3xl text-base leading-8 text-slate-600">
        Початківець у сфері кібербезпеки, який цікавиться OSINT, аналізом витоків
        даних, перевіркою відкритих джерел та виявленням цифрових слідів. Маю інтерес
        до дослідження інформації з публічних джерел, структурування даних і базового
        аналізу інцидентів, пов’язаних із безпекою інформації.
      </p>
    </section>
  );
}

export default About;