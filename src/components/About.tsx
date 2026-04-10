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
    title: '倾听与观察',
    description: '我们的教师是倾听者与观察者。接收来自学生、家长及赛场的真实反馈，以学生为中心，因材施教。'
  },
  {
    icon: ShieldCheck,
    title: '国际标准体系',
    description: '课程内容与 VEX 官方接轨，涵盖 123、GO、IQ、V5 全年龄段，打通国际赛事的升学与成长路径。'
  },
  {
    icon: MapPin,
    title: '专业校区环境',
    description: '坐落于天汉长街 E 区，配备大面积玻璃门窗与原木色陈列柜，为孩子们提供通透、沉浸式的创造空间。'
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 mb-8 tracking-tight">
            关于孩子 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">我们不想凑合</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-light leading-relaxed flex-1">
              卓越科技 BricksWorkshop 成立于 2015 年，2022 年正式升级为中国西北地区首家 VEX 官方授权学苑。坐落于美丽的陕西汉中滨江西路，这里不仅是学习机器人搭建与编程的地方，更是激发潜能、塑造未来创新者的前沿阵地。
            </p>
            <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed flex-1">
              教育要有初心、情怀，跟随前沿。在这个人工智能与机器人技术飞速发展的时代，尽早接触 VEX 机器人不仅能锻炼逻辑思维与空间想象力，更能培养面对挫折时的韧性与团队协作精神。“以学生为中心”是我们不变的坚持。
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-8 sm:gap-x-12 lg:gap-x-16 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="mb-6">
                <feature.icon className="w-8 h-8 text-zinc-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-base text-zinc-500 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
