import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-8 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-6 leading-tight sm:leading-none whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">BricksWorkshop</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-500 font-medium max-w-3xl mx-auto mb-12 tracking-tight">
            专注力与创造力的起点。<br className="hidden sm:block" />西北首家 VEX 学苑，探索未来科技的无限可能。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
             <a href="#curriculum" className="w-56 sm:w-auto text-center px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors">探索课程</a>
             <a href="#about" className="w-56 sm:w-auto text-center px-8 py-3 bg-white text-black border border-zinc-300 rounded-full text-lg font-medium hover:bg-zinc-50 transition-colors">了解我们</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">向下滚动</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Mouse className="w-6 h-6 text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
