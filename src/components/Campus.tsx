import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.jpeg",
  "/gallery/1.jpeg"
];

export default function Campus() {
  const containerRef = useRef(null);

  return (
    <section id="campus" ref={containerRef} className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-b from-indigo-50/80 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            校区环境
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight font-display">
            沉浸式的 <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">创造空间</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            汉中滨江路校区配备专业级 VEX 比赛场地与全套硬件器材，为孩子们提供最优质的学习体验。
          </p>
        </motion.div>
      </div>

      {/* Responsive Grid View */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] group border border-zinc-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10 pointer-events-none"></div>
              <img
                src={src}
                alt={`校区环境 ${i + 1}`}
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