import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Star,
    title: '零基础启蒙',
    desc: '从 VEX 123/GO 入门，培养兴趣，了解基础物理结构和无屏编程逻辑。',
    color: 'from-orange-400 to-red-400'
  },
  {
    icon: ShieldCheck,
    title: '系统化进阶',
    desc: '过渡到 VEX IQ，学习传感器应用、遥控与自动编程，提升解决问题的能力。',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Award,
    title: '校队与省市赛',
    desc: '选拔进入竞赛梯队，参与陕西省乃至全国范围内的 VEX 机器人比赛，积累实战经验。',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Trophy,
    title: '亚洲及世锦赛',
    desc: '与全球顶尖选手同台竞技，冲击 VEX 亚洲公开赛和世锦赛，为升学简历增光添彩。',
    color: 'from-yellow-400 to-orange-500'
  }
];

export default function Pathway() {
  return (
    <section id="pathway" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            从<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">零基础</span>到世界舞台
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            清晰的进阶赛事规划，让孩子每一次的进步都能得到权威认证。
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-zinc-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className={`w-8 h-8 text-transparent bg-clip-text fill-transparent stroke-zinc-700`} style={{ stroke: 'url(#gradient-' + index + ')' }} />
                    <svg width="0" height="0">
                      <linearGradient id={"gradient-" + index} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--tw-gradient-from)" className={step.color.split(' ')[0].replace('from-', 'text-')} />
                        <stop offset="100%" stopColor="var(--tw-gradient-to)" className={step.color.split(' ')[1].replace('to-', 'text-')} />
                      </linearGradient>
                    </svg>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-tr ${step.color} blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-150 rounded-full -z-10`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}