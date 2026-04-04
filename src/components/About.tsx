import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket } from 'lucide-react';

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
  }
];

export default function About() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">
            重新定义 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">青少年科技教育</span>
          </h2>
          <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            坐落于陕西汉中滨江路校区，卓越科技 BricksWorkshop 不仅是一个学习机器人的地方，更是一个激发潜能、塑造未来创新者的前沿阵地。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-50 group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-orange-100 transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-zinc-700 group-hover:text-orange-500 transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
