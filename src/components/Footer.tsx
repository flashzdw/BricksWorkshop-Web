import { MapPin, Hash } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 pt-16 pb-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src="/logo_3048.jpeg" alt="Bricks Workshop Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-zinc-500 font-normal leading-relaxed max-w-md text-sm sm:text-base">
              点燃青少年的科技梦想，培养未来世界的创新领袖。<br />
              卓越科技，见证每一次成长。
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">
              联系我们
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-zinc-500 text-sm sm:text-base hover:text-zinc-900 transition-colors">
                <MapPin className="w-4 h-4 mr-2 shrink-0 mt-1" />
                <span>中国陕西省汉中市<br />滨江路校区</span>
              </li>
              <li className="flex items-center text-zinc-500 text-sm sm:text-base hover:text-zinc-900 transition-colors">
                <Hash className="w-4 h-4 mr-2 shrink-0" />
                <span>小红书: VEX8009</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">
              快速链接
            </h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-zinc-500 text-sm sm:text-base hover:text-zinc-900 transition-colors">关于我们</a></li>
              <li><a href="#curriculum" className="text-zinc-500 text-sm sm:text-base hover:text-zinc-900 transition-colors">课程体系</a></li>
              <li><a href="#gallery" className="text-zinc-500 text-sm sm:text-base hover:text-zinc-900 transition-colors">风采展示</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} 卓越科技 BricksWorkshop. All rights reserved.
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">
            西北首家 VEX 学苑
          </p>
        </div>
      </div>
    </footer>
  );
}
