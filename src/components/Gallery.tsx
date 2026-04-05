import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.jpeg",
  "/gallery/1.jpeg",
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
    <section id="gallery" ref={containerRef} className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">课堂瞬间</span> <br />
            见证成长的轨迹
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light max-w-2xl">
            在每一次拼接、调试与运行中，我们记录下孩子们最纯粹的专注与喜悦。
          </p>
        </motion.div>
      </div>

      {/* Responsive Grid View */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img 
                src={src} 
                alt={`课堂风采 ${i + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover filter transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
