import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxScroll } from './ui/parallax-scroll';

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

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ParallaxScroll images={images} />
      </div>
    </section>
  );
}