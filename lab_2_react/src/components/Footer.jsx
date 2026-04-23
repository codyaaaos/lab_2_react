import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({
    userAgent: '',
    platform: '',
    language: '',
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    localStorage.setItem('reactSysInfo', JSON.stringify(info));
    const savedInfo = JSON.parse(localStorage.getItem('reactSysInfo'));
    setSysInfo(savedInfo);
  }, []);

  return (
    <footer className="mt-14 border-t border-slate-200 pt-6 dark:border-slate-700">
      <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
        © 2026 CV - Костюк Дмитро Васильович
      </p>

      <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
        <p><span className="font-bold">Платформа:</span> {sysInfo.platform}</p>
        <p><span className="font-bold">Мова:</span> {sysInfo.language}</p>
        <p className="break-words">
          <span className="font-bold">Браузер:</span> {sysInfo.userAgent}
        </p>
      </div>
    </footer>
  );
}

export default Footer;