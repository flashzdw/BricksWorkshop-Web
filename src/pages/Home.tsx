import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Curriculum from '../components/Curriculum';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans antialiased selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
