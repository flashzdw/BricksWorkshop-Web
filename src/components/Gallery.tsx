import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxScroll } from './ui/parallax-scroll';

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

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ParallaxScroll images={images} />
      </div>
    </section>
  );
}
