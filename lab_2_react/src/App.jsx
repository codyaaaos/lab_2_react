import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-[#f3f2f8] px-4 py-8 transition-colors dark:bg-black">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-colors dark:bg-[#151515] md:p-10">
          <Header theme={theme} toggleTheme={toggleTheme} />

          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div>
              <About />
              <Experience />
              <Reviews />
            </div>

            <aside className="h-fit rounded-3xl bg-[#fafafa] p-6 transition-colors dark:bg-[#232323]">
              <Skills />
              <Languages />
            </aside>
          </div>

          <Footer />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;