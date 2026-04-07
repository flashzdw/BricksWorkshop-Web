import { motion } from 'framer-motion';
import { MapPin, Hash, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
      <div className="absolute -bottom-[20rem] -right-[20rem] w-[50rem] h-[50rem] bg-gradient-to-bl from-purple-50 via-pink-50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-24">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-3xl font-extrabold text-zinc-900 mb-6 tracking-tighter flex items-center gap-3">
                <img src="/logo_3048.jpeg" alt="Bricks Workshop Logo" className="h-14 w-auto object-contain" />
              </h4>
              <p className="text-zinc-500 font-light leading-relaxed max-w-sm mb-8 text-lg">
                点燃青少年的科技梦想，培养未来世界的创新领袖。卓越科技，见证每一次成长。
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-purple-500 hover:border-purple-200 hover:bg-white hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <Sparkles size={20} />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>联系我们
            </h5>
            <ul className="space-y-6">
              <li className="flex items-start text-zinc-500 font-light group">
                <MapPin className="w-5 h-5 mr-4 text-zinc-300 group-hover:text-purple-500 transition-colors shrink-0 mt-0.5" />
                <span className="leading-relaxed">中国陕西省汉中市<br />滨江路校区</span>
              </li>
              <li className="flex items-center text-zinc-500 font-light group">
                <Hash className="w-5 h-5 mr-4 text-zinc-300 group-hover:text-purple-500 transition-colors shrink-0" />
                <span>小红书: VEX8009</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h5 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>快速链接
            </h5>
            <ul className="space-y-4">
              <li><a href="#about" className="text-zinc-500 hover:text-blue-500 font-light transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors"></span>关于我们</a></li>
              <li><a href="#curriculum" className="text-zinc-500 hover:text-blue-500 font-light transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors"></span>课程体系</a></li>
              <li><a href="#gallery" className="text-zinc-500 hover:text-blue-500 font-light transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors"></span>风采展示</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-zinc-100 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-zinc-400 text-sm font-light">
            &copy; {new Date().getFullYear()} 卓越科技 BricksWorkshop. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm font-light mt-4 sm:mt-0 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100">
            西北首家 VEX 学苑
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
