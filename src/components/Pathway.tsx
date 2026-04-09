import { motion } from 'framer-motion';

const steps = [
  {
    title: '零基础启蒙',
    desc: '从 VEX 123/GO 入门，培养兴趣，了解基础物理结构和无屏编程逻辑。',
  },
  {
    title: '系统化进阶',
    desc: '过渡到 VEX IQ，学习传感器应用、遥控与自动编程，提升解决问题的能力。',
  },
  {
    title: '校队与省市赛',
    desc: '选拔进入竞赛梯队，参与陕西省乃至全国范围内的 VEX 机器人比赛，积累实战经验。',
  },
  {
    title: '亚洲及世锦赛',
    desc: '与全球顶尖选手同台竞技，冲击 VEX 亚洲公开赛和世锦赛，为升学简历增光添彩。',
  }
];

export default function Pathway() {
  return (
    <section id="pathway" className="py-24 lg:py-40 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 sm:mb-32"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tighter">
            从零基础到<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">世界舞台</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            清晰的进阶赛事规划，让孩子每一次的进步都能得到权威认证。
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[5px] left-0 w-full h-[2px] bg-zinc-200" />
          
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute top-0 left-[5px] w-[2px] h-full bg-zinc-200" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex-1 pl-8 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-0 top-[6px] md:relative md:top-0 md:left-0 w-3 h-3 bg-zinc-900 rounded-full ring-8 ring-zinc-50 md:mb-8" />
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-lg text-zinc-500 font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
