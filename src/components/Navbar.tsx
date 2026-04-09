import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#hero', label: '首页' },
    { href: '#about', label: '机构介绍' },
    { href: '#curriculum', label: '课程体系' },
    { href: '#pathway', label: '赛事路径' },
    { href: '#campus', label: '校区环境' },
    { href: '#gallery', label: '风采展示' },
    { href: '#faq', label: '常见问题' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-zinc-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
            <span className="text-2xl sm:text-2xl md:text-xl font-bold tracking-tight">
              VEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">Academy</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-zinc-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-zinc-600 hover:to-zinc-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-zinc-200/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-sm">
              {links.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-zinc-600 hover:to-zinc-900 block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
