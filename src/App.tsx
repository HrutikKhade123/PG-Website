import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { SupportProcess } from './sections/SupportProcess';
import { PanIndiaCoverage } from './sections/PanIndiaCoverage';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#070B14] text-[#F5F8FF] font-sans antialiased selection:bg-blue-600/30 selection:text-sky-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <SupportProcess />
        <PanIndiaCoverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
