import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Users, ShieldCheck, MapPin } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: '极致专注',
    description: '建模是专注度非常高的游戏。我们通过VEX机器人教育，培养孩子在复杂任务中的绝对专注力。'
  },
  {
    icon: Lightbulb,
    title: '西北首家',
    description: '作为中国西北首家VEX学苑，我们致力于将全球领先的STEM教育体系引入汉中。'
  },
  {
    icon: Rocket,
    title: '寓教于乐',
    description: '摒弃枯燥的理论灌输，让孩子们在小课堂的动手实践中，体验科技带来的纯粹乐趣。'
  },
  {
    icon: Users,
    title: '顶尖师资团队',
    description: '我们的导师团队具备丰富的 VEX 机器人赛事经验与教育心理学背景，亦师亦友，因材施教。'
  },
  {
    icon: ShieldCheck,
    title: '国际标准体系',
    description: '课程内容与 VEX 官方接轨，涵盖 123、GO、IQ、V5 全年龄段，打通国际赛事的升学与成长路径。'
  },
  {
    icon: MapPin,
    title: '专业校区环境',
    description: '汉中滨江路校区配备专业级 VEX 比赛场地与全套硬件器材，为孩子们提供沉浸式的创造空间。'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-100 to-transparent opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            关于我们
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight font-display">
            重新定义 <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">青少年科技教育</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light leading-relaxed">
            卓越科技 BricksWorkshop 是中国西北地区首家 VEX 官方授权学苑。我们坐落于美丽的陕西汉中滨江路，不仅是一个学习机器人搭建与编程的地方，更是一个激发潜能、塑造未来创新者的前沿阵地。坚信“在玩中学”的力量，让孩子尽早接触 VEX 机器人，锻炼逻辑思维与空间想象力。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-50 group-hover:bg-white group-hover:shadow-md transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-zinc-700 group-hover:text-purple-500 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light text-sm sm:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
