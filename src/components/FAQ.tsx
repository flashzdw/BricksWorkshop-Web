import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';

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
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
            常见问题
          </h2>
          <p className="text-xl text-zinc-500 font-normal">
            为您解答关于卓越科技教育体系的疑问
          </p>
        </motion.div>

        <div className="border-t border-zinc-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-200">
              <button
                className="w-full py-6 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg sm:text-xl font-medium pr-8 transition-colors duration-300 ${openIndex === index ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-zinc-900'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300"
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-12 text-base sm:text-lg text-zinc-500 font-normal leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
