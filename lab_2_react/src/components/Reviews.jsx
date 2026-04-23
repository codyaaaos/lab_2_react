import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/14/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Помилка завантаження коментарів:', error));
  }, []);

  return (
    <section className="mt-14">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-indigo-500">
        Відгуки (API)
      </h2>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
          >
            <p className="text-sm font-bold text-slate-800 dark:text-white">
              {comment.name}
            </p>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
              {comment.email}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;