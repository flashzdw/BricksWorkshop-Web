import { motion } from 'framer-motion';
import { useRef } from 'react';

const row1 = [
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
];

const row2 = [
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg"
];

// Combine copies to make the sequence long enough for seamless infinite scroll
const marqueeItems1 = [...row1, ...row1, ...row1];
const marqueeItems2 = [...row2, ...row2, ...row2];

export default function Gallery() {
  const containerRef = useRef(null);

  return (
    <section id="gallery" ref={containerRef} className="py-24 sm:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 mb-6 tracking-tight">
            课堂<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">瞬间</span>
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-500 font-normal max-w-3xl mx-auto">
            见证成长的轨迹。<br className="hidden sm:block" />
            在每一次拼接、调试与运行中，记录下孩子们最纯粹的专注与喜悦。
          </p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-6 sm:gap-8">
        {/* Row 1: Scrolling Left */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex animate-marquee-left gap-6 sm:gap-8 min-w-max pr-6 sm:pr-8">
            {marqueeItems1.map((src, i) => (
              <div 
                key={`row1-a-${i}`} 
                className="relative aspect-[4/3] w-56 sm:w-72 md:w-80 overflow-hidden rounded-3xl bg-zinc-200 flex-shrink-0"
              >
                <img src={src} alt={`课堂风采上 ${i + 1}`} loading="lazy" className="w-full h-full object-cover pointer-events-none" />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-left gap-6 sm:gap-8 min-w-max pr-6 sm:pr-8">
            {marqueeItems1.map((src, i) => (
              <div 
                key={`row1-b-${i}`} 
                className="relative aspect-[4/3] w-56 sm:w-72 md:w-80 overflow-hidden rounded-3xl bg-zinc-200 flex-shrink-0"
              >
                <img src={src} alt={`课堂风采上 ${i + 1}`} loading="lazy" className="w-full h-full object-cover pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex animate-marquee-right gap-6 sm:gap-8 min-w-max pr-6 sm:pr-8">
            {marqueeItems2.map((src, i) => (
              <div 
                key={`row2-a-${i}`} 
                className="relative aspect-[4/3] w-56 sm:w-72 md:w-80 overflow-hidden rounded-3xl bg-zinc-200 flex-shrink-0"
              >
                <img src={src} alt={`课堂风采下 ${i + 1}`} loading="lazy" className="w-full h-full object-cover pointer-events-none" />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-right gap-6 sm:gap-8 min-w-max pr-6 sm:pr-8">
            {marqueeItems2.map((src, i) => (
              <div 
                key={`row2-b-${i}`} 
                className="relative aspect-[4/3] w-56 sm:w-72 md:w-80 overflow-hidden rounded-3xl bg-zinc-200 flex-shrink-0"
              >
                <img src={src} alt={`课堂风采下 ${i + 1}`} loading="lazy" className="w-full h-full object-cover pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
