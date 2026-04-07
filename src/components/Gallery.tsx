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
    <section id="gallery" ref={containerRef} className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-pink-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            风采展示
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight font-display">
            课堂的 <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">闪光瞬间</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            在每一次拼接、调试与运行中，我们记录下孩子们最纯粹的专注与喜悦。
          </p>
        </motion.div>
      </div>

      {/* Responsive Grid View */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] group border border-zinc-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src={src} 
                alt={`课堂风采 ${i + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover filter transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
