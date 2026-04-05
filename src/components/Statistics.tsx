import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(from + (to - from) * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

const stats = [
  { value: 500, suffix: '+', label: '服务学员', gradient: 'from-orange-400 to-red-500' },
  { value: 50, suffix: '+', label: '荣获奖项', gradient: 'from-purple-400 to-pink-500' },
  { value: 10, suffix: '+', label: '合作学校', gradient: 'from-teal-400 to-blue-500' },
  { value: 100, suffix: '%', label: '专注投入', gradient: 'from-yellow-400 to-orange-500' },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-white relative z-10 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center group"
            >
              <div className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} transition-transform duration-300 group-hover:scale-110`}>
                <Counter from={0} to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-zinc-500 font-medium tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
