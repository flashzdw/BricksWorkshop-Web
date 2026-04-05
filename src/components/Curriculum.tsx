import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    id: '123',
    name: 'VEX 123',
    age: '4-7岁',
    desc: '启蒙阶段。通过无屏编程，引导幼儿在玩乐中理解基础逻辑与序列，激发对科技的初步好奇心。',
    gradient: 'from-red-400 to-orange-400',
    image: '/gallery/vex-123.png',
    details: {
      features: [
        '触碰式编程：通过简单的触碰机器人控制动作和声音',
        '卡片编程：使用编码器和指令卡，脱离屏幕学习真正编程',
        '图形化编程：支持 VEXcode 123 解锁更多设备潜能'
      ],
      outcomes: [
        '建立基础逻辑与序列概念',
        '培养早期的计算思维',
        '激发对科学技术的纯粹好奇心'
      ],
      hardware: '发声发光的智能机器人底盘，配有独立编码器及场地拼块'
    }
  },
  {
    id: 'go',
    name: 'VEX GO',
    age: '8-10岁',
    desc: '探索阶段。结合结构搭建与简单代码，培养空间想象力和问题解决能力，完成从具象到抽象的过渡。',
    gradient: 'from-green-400 to-teal-400',
    image: '/gallery/vex-go.png',
    details: {
      features: [
        '模块化拼插结构：按颜色分类，易于搭建与无忧收纳',
        '图形化积木编程：基于 Scratch 的 VEXcode GO，简单直观',
        '多传感器组合：内置陀螺仪，支持电磁铁、辨色仪等扩展'
      ],
      outcomes: [
        '培养空间想象力和创造力',
        '完成从具象操作到抽象逻辑的认知过渡',
        '建立对工程和自动化技术的初步感知'
      ],
      hardware: '包含主控器、智能电机、碰撞开关及结构件的超级套装'
    }
  },
  {
    id: 'iq',
    name: 'VEX IQ',
    age: '11-14岁',
    desc: '进阶阶段。复杂机械结构与高级传感器编程，团队协作完成高难度挑战，为参与国际赛事打下坚实基础。',
    gradient: 'from-blue-500 to-indigo-500',
    image: '/gallery/vex-iq.png',
    details: {
      features: [
        '高级工程结构：无需工具即可构建出保持高强度的复杂机械',
        '多语言支持：从图形化编程进阶至 C++ 与 Python',
        '直通国际赛事：参加全球最大规模的 VEX 机器人世界锦标赛'
      ],
      outcomes: [
        '锻炼复杂系统的问题解决能力',
        '提升团队协作精神与赛事抗压能力',
        '为国内外知名学府申请及科技特长生打下基础'
      ],
      hardware: '多功能主控器、视觉传感器、第二代测距仪与高精度智能电机'
    }
  }
];

export default function Curriculum() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

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
                  <button 
                    onClick={() => setSelectedCourse(course)}
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${course.gradient} text-sm font-bold tracking-widest hover:opacity-80 transition-opacity`}
                  >
                    探索详情
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            >
              <div className="bg-white rounded-3xl overflow-hidden w-full max-w-3xl max-h-[90vh] flex flex-col pointer-events-auto shadow-2xl relative">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-48 sm:h-64 flex-shrink-0">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                      {selectedCourse.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-md`}>
                        {selectedCourse.age}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    {selectedCourse.desc}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${selectedCourse.gradient}`} />
                        核心特点
                      </h4>
                      <ul className="space-y-3">
                        {selectedCourse.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-600">
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${selectedCourse.gradient}`} style={{ color: 'inherit' }} />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${selectedCourse.gradient}`} />
                        培养目标
                      </h4>
                      <ul className="space-y-3">
                        {selectedCourse.details.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-600">
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0`} style={{ color: 'inherit' }} />
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">硬件配置</h4>
                      <p className="text-zinc-600 leading-relaxed">
                        {selectedCourse.details.hardware}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
