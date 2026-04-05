import { motion } from 'framer-motion';

const courses = [
  {
    id: '123',
    name: 'VEX 123',
    age: '4-7岁',
    desc: '启蒙阶段。通过无屏编程，引导幼儿在玩乐中理解基础逻辑与序列，激发对科技的初步好奇心。',
    gradient: 'from-red-400 to-orange-400',
    image: 'https://raw.githubusercontent.com/STEM-AI/RPAIR/main/frontend/src/assets/cards/vex-123.png'
  },
  {
    id: 'go',
    name: 'VEX GO',
    age: '8-10岁',
    desc: '探索阶段。结合结构搭建与简单代码，培养空间想象力和问题解决能力，完成从具象到抽象的过渡。',
    gradient: 'from-green-400 to-teal-400',
    image: 'https://raw.githubusercontent.com/STEM-AI/RPAIR/main/frontend/src/assets/cards/vex-go.webp'
  },
  {
    id: 'iq',
    name: 'VEX IQ',
    age: '11-14岁',
    desc: '进阶阶段。复杂机械结构与高级传感器编程，团队协作完成高难度挑战，为参与国际赛事打下坚实基础。',
    gradient: 'from-blue-500 to-indigo-500',
    image: 'https://raw.githubusercontent.com/STEM-AI/RPAIR/main/frontend/src/assets/cards/vexiq.webp'
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-16 sm:py-24 lg:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            全生命周期 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">机器人教育体系</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light">
            我们提供与国际接轨的 VEX 课程，陪伴孩子从零开始的每一次突破。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group rounded-3xl bg-white border border-zinc-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col cursor-default"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6">
                   <h3 className="text-3xl font-extrabold text-white mb-1 drop-shadow-md">
                     {course.name}
                   </h3>
                   <div className="text-white/90 font-medium text-sm uppercase tracking-widest">{course.age}</div>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between relative bg-white">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none`} />
                <p className="text-zinc-600 font-light leading-relaxed text-lg mb-8 relative z-10">{course.desc}</p>
                
                <div className="mt-auto flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500 relative z-10">
                  <div className={`w-8 h-px bg-gradient-to-r ${course.gradient}`} />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${course.gradient} text-sm font-bold tracking-widest`}>探索详情</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
