import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg"
];

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
            课堂瞬间
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-500 font-normal max-w-3xl mx-auto">
            见证成长的轨迹。<br className="hidden sm:block" />
            在每一次拼接、调试与运行中，记录下孩子们最纯粹的专注与喜悦。
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-zinc-200"
            >
              <img 
                src={src} 
                alt={`课堂风采 ${i + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
