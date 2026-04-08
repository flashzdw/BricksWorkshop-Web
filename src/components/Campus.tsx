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
    <section id="campus" ref={containerRef} className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 mb-6 tracking-tight">
            校区环境
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-500 font-normal max-w-3xl mx-auto">
            沉浸式的创造空间。<br className="hidden sm:block" />
            配备专业级 VEX 比赛场地与全套硬件器材，为孩子们提供最优质的学习体验。
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-zinc-100"
            >
              <img
                src={src}
                alt={`校区环境 ${i + 1}`}
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
