import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2938&auto=format&fit=crop"
];

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section id="gallery" ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">课堂瞬间</span> <br />
            见证成长的轨迹
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl">
            在每一次拼接、调试与运行中，我们记录下孩子们最纯粹的专注与喜悦。
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 w-[150vw] -ml-[25vw]">
        <motion.div style={{ x: x1 }} className="flex gap-8">
          {images.slice(0, 3).map((src, i) => (
            <div key={i} className="relative aspect-[16/9] w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl group">
              <img 
                src={src} 
                alt="课堂风采" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-8">
          {images.slice(2, 5).map((src, i) => (
            <div key={i} className="relative aspect-[16/9] w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl group">
              <img 
                src={src} 
                alt="课堂风采" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
