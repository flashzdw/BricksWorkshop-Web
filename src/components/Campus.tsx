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
    <section id="campus" ref={containerRef} className="py-16 sm:py-24 lg:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">校区环境</span> <br />
            沉浸式的创造空间
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light max-w-2xl">
            汉中滨江路校区配备专业级 VEX 比赛场地与全套硬件器材，为孩子们提供最优质的学习体验。
          </p>
        </motion.div>
      </div>

      {/* Responsive Grid View */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={src}
                alt={`校区环境 ${i + 1}`}
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