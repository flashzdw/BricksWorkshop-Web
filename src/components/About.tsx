import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Users, ShieldCheck, MapPin } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: '极致专注',
    description: '建模是专注度非常高的游戏。通过VEX体系，培养孩子在复杂任务中的绝对专注力与创造力。'
  },
  {
    icon: Lightbulb,
    title: '西北首家',
    description: '2015年成立，2022年正式升级为西北首家官方校区，为汉中带来前沿的 STEAM 教育资源。'
  },
  {
    icon: Rocket,
    title: '寓教于乐',
    description: '摒弃枯燥的理论灌输，以学生为中心，让孩子们在小课堂的动手实践中，体验科技带来的真实乐趣。'
  },
  {
    icon: Users,
    title: '用心倾听',
    description: '导师团队因对 STEAM 教育的热爱走到一起，不仅传授知识，更用心倾听每一个孩子的真实反馈。'
  },
  {
    icon: ShieldCheck,
    title: '直通国际赛事',
    description: '开设 VEX GO、IQ 等课程，并带领 8009 战队征战世锦赛、WRC世界机器人大会等顶尖赛事。'
  },
  {
    icon: MapPin,
    title: '专业校区环境',
    description: '坐落于天汉长街 E区，自然光透过大面积玻璃门窗，原木色陈列柜与专业练习场地一览无余。'
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
            重新定义 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">青少年科技教育</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-light leading-relaxed flex-1">
              源起秦岭南麓，卓越科技 BricksWorkshop 成立于2015年。身处教育资源有限的小城市，我们始终坚持教育的初心与情怀，致力于将全球领先的高品质教育带给这里的孩子。2022年，我们正式升级为中国西北地区首家 VEX 学苑官方校区。
            </p>
            <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed flex-1">
              “关于孩子，我们不想凑合”是我们成立至今未改变的Slogan。在这里，导师们不仅是知识的传授者，更是倾听者与观察者，陪伴孩子们在真实赛场上历练，享受作为一名 VEXer 的纯粹时光。
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
