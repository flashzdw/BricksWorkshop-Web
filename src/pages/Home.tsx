import { motion, useScroll } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import About from '../components/About';
import Curriculum from '../components/Curriculum';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans antialiased selection:bg-orange-200 selection:text-orange-900">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Curriculum />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
