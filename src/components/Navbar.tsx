import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-zinc-900 tracking-tight">
              Bricks<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Workshop</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                首页
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                机构介绍
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                课程体系
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                风采展示
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
