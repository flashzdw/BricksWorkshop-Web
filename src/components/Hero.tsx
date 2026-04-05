import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-yellow-200 via-green-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center pt-8 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-zinc-900 mb-6 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <img src="/logo.png" alt="VEX Academy Logo" className="h-24 sm:h-32 md:h-48 w-auto object-contain" />
            <span>VEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">Academy</span></span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto mb-12">
            专注力与创造力的起点。西北首家 VEX 学苑，探索未来科技的无限可能。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#curriculum" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors shadow-xl shadow-zinc-900/20">探索课程</a>
             <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-colors">了解我们</a>
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
