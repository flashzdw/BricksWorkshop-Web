import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    id: '123',
    name: 'VEX 123',
    age: '4-7岁',
    desc: '启蒙阶段。通过无屏编程，引导幼儿在玩乐中理解基础逻辑与序列，激发对科技的初步好奇心。',
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
    <section id="curriculum" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tighter">
            全生命周期<br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">机器人教育</span>体系
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            我们提供与国际接轨的 VEX 课程，陪伴孩子从零开始的每一次突破。
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
              >
                <div className="w-full lg:w-1/2 overflow-hidden bg-zinc-50 aspect-[4/3] flex items-center justify-center">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">{course.age}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tighter">
                    {course.name}
                  </h3>
                  <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                    {course.desc}
                  </p>
                  
                  <div>
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className="inline-flex items-center text-zinc-900 font-medium hover:opacity-70 transition-opacity"
                    >
                      <span className="text-lg">探索详情</span>
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            >
              <div className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto relative shadow-2xl">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-zinc-500 hover:text-zinc-900 transition-colors bg-white/50 backdrop-blur-sm rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="w-full md:w-2/5 h-64 md:h-auto bg-zinc-50 flex-shrink-0">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-3/5 p-8 sm:p-12 overflow-y-auto custom-scrollbar">
                  <div className="mb-8">
                    <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2 block">
                      {selectedCourse.age}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tighter mb-4">
                      {selectedCourse.name}
                    </h3>
                    <p className="text-lg text-zinc-500 font-light leading-relaxed">
                      {selectedCourse.desc}
                    </p>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">
                        核心特点
                      </h4>
                      <ul className="space-y-4">
                        {selectedCourse.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-600 font-light">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-zinc-900" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">
                        培养目标
                      </h4>
                      <ul className="space-y-4">
                        {selectedCourse.details.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-600 font-light">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-zinc-900" />
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-zinc-50 p-6 rounded-xl">
                      <h4 className="text-sm font-semibold text-zinc-900 mb-2 tracking-tight">硬件配置</h4>
                      <p className="text-zinc-500 text-sm font-light leading-relaxed">
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
