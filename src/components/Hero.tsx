import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Minimalist Tech Background with Rainbow Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-red-100 via-orange-50 to-transparent opacity-40 blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-blue-100 via-indigo-50 to-transparent opacity-40 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-green-100 via-emerald-50 to-transparent opacity-30 blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center pt-8 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm shadow-sm inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium text-zinc-600 tracking-wider">西北首家 VEX 学苑</span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-tight text-zinc-900 mb-6 leading-none">
            <span className="block mb-2">Bricks</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-gradient">
              Workshop
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto mb-12">
            专注力与创造力的起点。在纯粹的科技空间中，探索机器人教育的无限可能。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
             <a href="#curriculum" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/20">探索课程</a>
             <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95">了解我们</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">向下探索</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-zinc-200 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-zinc-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
