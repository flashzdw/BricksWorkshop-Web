import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "孩子零基础可以报名学习吗？",
    answer: "完全可以。我们的 VEX 123 和 VEX GO 课程专为零基础的低龄段孩子设计，通过无屏编程和简单拼搭，引导孩子逐步建立对机器人和编程的兴趣与信心。每个阶段都有完善的成长体系。"
  },
  {
    question: "VEX 机器人课程和其他乐高课程有什么区别？",
    answer: "乐高更多偏向于静态结构拼搭与玩具性质，而 VEX 是专为 STEM 教育和专业机器人赛事设计的体系。VEX 在机械结构、传感器精度、编程深度（支持 C++ 和 Python）上更具专业性，是全球认可度极高的机器人教育标准。"
  },
  {
    question: "学习 VEX 对孩子未来的升学或科技特长生有帮助吗？",
    answer: "非常有帮助。VEX 机器人世界锦标赛（VEX Worlds）是吉尼斯世界纪录认证的全球最大规模机器人赛事。在国内外各级 VEX 比赛中获奖，不仅能锻炼综合能力，也是申请国内外知名学府、科技特长生的重要加分项。"
  },
  {
    question: "滨江路校区的上课频率和班型是怎样的？",
    answer: "我们采用小班化教学（通常 4-6 人/班），以确保每位学员都能得到导师的充分关注。上课频率一般为每周 1-2 次，每次 90-120 分钟，具体可根据孩子的年龄段和所处阶段（常规班或集训班）进行调整。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
      <div className="absolute -left-[20rem] top-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-red-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            常见问题
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight font-display">
            家长<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">关心的问题</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 font-light">
            我们整理了最常见的疑问，帮助您更好地了解卓越科技的教育体系。
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-base sm:text-lg font-semibold pr-4 transition-colors duration-300 ${openIndex === index ? 'text-orange-500' : 'text-zinc-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-500' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 text-sm sm:text-base text-zinc-500 font-light leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}