import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Asian%20children%20building%20a%20VEX%20robot%20in%20a%20classroom%2C%20bright%20lighting%2C%20high%20quality%20photography&image_size=landscape_16_9",
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kids%20programming%20a%20robot%20with%20a%20tablet%20in%20a%20robotics%20workshop%2C%20modern%20educational%20setting&image_size=landscape_16_9",
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20group%20of%20young%20students%20smiling%20with%20their%20VEX%20IQ%20robot%20at%20a%20competition%2C%20energetic%20atmosphere&image_size=landscape_16_9",
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close%20up%20of%20children%20hands%20assembling%20colorful%20plastic%20robot%20parts%2C%20focus%20on%20creativity%2C%20educational&image_size=landscape_16_9",
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Robotics%20competition%20arena%2C%20a%20futuristic%20robot%20navigating%20a%20field%2C%20teenagers%20watching%20excitedly&image_size=landscape_16_9"
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
    <section id="gallery" ref={containerRef} className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 sm:mb-24">
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

      {/* Mobile view: standard vertical stack */}
      <div className="md:hidden flex flex-col gap-6 px-6 sm:px-8">
        {images.map((src, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl group"
          >
            <img 
              src={src} 
              alt="课堂风采" 
              loading="lazy"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>

      {/* Desktop view: horizontal parallax */}
      <div className="hidden md:flex flex-col gap-8 w-[150vw] -ml-[25vw]">
        <motion.div style={{ x: x1 }} className="flex gap-8">
          {images.slice(0, 3).map((src, i) => (
            <div key={i} className="relative aspect-[16/9] w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl group">
              <img 
                src={src} 
                alt="课堂风采" 
                loading="lazy"
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
                loading="lazy"
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
