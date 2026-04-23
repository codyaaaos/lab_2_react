import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-800">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-2xl font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          ×
        </button>

        <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">
          Зв'язок зі мною
        </h2>

        <form action="https://formspree.io/f/xgorpbdw" method="POST" className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Ім'я
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Повідомлення
            </label>
            <textarea
              name="message"
              rows="3"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-bold text-white transition-colors hover:bg-indigo-700"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;