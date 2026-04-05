import { motion } from 'framer-motion';
import { MapPin, Hash, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 py-12 sm:py-16 lg:py-24 border-t border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-3xl font-extrabold text-zinc-900 mb-4 tracking-tighter">
                Bricks<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Workshop</span>
              </h4>
              <p className="text-zinc-500 font-light leading-relaxed max-w-sm mb-6">
                点燃青少年的科技梦想，培养未来世界的创新领袖。卓越科技，见证每一次成长。
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-200 transition-colors">
                  <Sparkles size={18} />
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
            <h5 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-6">联系我们</h5>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-500 font-light">
                <MapPin className="w-5 h-5 mr-3 text-zinc-400 shrink-0 mt-0.5" />
                <span>中国陕西省汉中市<br />滨江路校区</span>
              </li>
              <li className="flex items-center text-zinc-500 font-light">
                <Hash className="w-5 h-5 mr-3 text-zinc-400 shrink-0" />
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
            <h5 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-6">快速链接</h5>
            <ul className="space-y-3">
              <li><a href="#about" className="text-zinc-500 hover:text-zinc-900 font-light transition-colors">关于我们</a></li>
              <li><a href="#curriculum" className="text-zinc-500 hover:text-zinc-900 font-light transition-colors">课程体系</a></li>
              <li><a href="#gallery" className="text-zinc-500 hover:text-zinc-900 font-light transition-colors">风采展示</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-zinc-200 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-zinc-400 text-sm font-light">
            &copy; {new Date().getFullYear()} 卓越科技 BricksWorkshop. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm font-light mt-2 sm:mt-0">
            西北首家 VEX 学苑
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
