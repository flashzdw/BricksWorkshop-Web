import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Users, ShieldCheck, MapPin } from 'lucide-react';
import { HoverEffect } from './ui/card-hover-effect';

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
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">
            重新定义 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">青少年科技教育</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 font-light leading-relaxed flex-1">
              卓越科技 BricksWorkshop 是中国西北地区首家 VEX 官方授权学苑。我们坐落于美丽的陕西汉中滨江路，不仅是一个学习机器人搭建与编程的地方，更是一个激发潜能、塑造未来创新者的前沿阵地。
            </p>
            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed flex-1">
              我们坚信“在玩中学（Learning by doing）”的力量。在这个人工智能与机器人技术飞速发展的时代，让孩子尽早接触 VEX 机器人，不仅能锻炼逻辑思维与空间想象力，更能培养面对挫折时的韧性与团队协作精神。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <HoverEffect items={features} className="gap-8 sm:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-0" />
        </motion.div>
      </div>
    </section>
  );
}
