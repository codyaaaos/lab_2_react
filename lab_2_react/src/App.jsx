import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-300/40">
        <div className="grid md:grid-cols-[320px_1fr]">
          <aside className="bg-slate-900 text-white">
            <Header />
            <Skills />
            <Languages />
          </aside>

          <main className="bg-white">
            <About />
            <Experience />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;