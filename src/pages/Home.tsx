import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import About from '@/components/About';
import Curriculum from '@/components/Curriculum';
import Pathway from '@/components/Pathway';
import Campus from '@/components/Campus';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans antialiased selection:bg-orange-200 selection:text-orange-900">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 z-[100]"
        style={{ clipPath }}
      />
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Curriculum />
        <Pathway />
        <Campus />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
