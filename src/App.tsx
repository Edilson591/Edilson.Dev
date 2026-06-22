import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <ToastContainer />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
