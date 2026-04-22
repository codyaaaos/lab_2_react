function Languages() {
  return (
    <section className="px-8 py-8">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
        Володіння мовами
      </p>

      <ol className="space-y-3 pl-5 text-sm text-slate-200 marker:text-sky-300">
        <li>
          Українська <span className="text-slate-400">— рідна</span>
        </li>
        <li>
          Англійська <span className="text-slate-400">— технічна</span>
        </li>
      </ol>
    </section>
  );
}

export default Languages;