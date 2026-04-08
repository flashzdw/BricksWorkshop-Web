"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const firstPart: string[] = [];
  const secondPart: string[] = [];
  const thirdPart: string[] = [];
  
  images.forEach((el, idx) => {
    if (idx % 3 === 0) firstPart.push(el);
    else if (idx % 3 === 1) secondPart.push(el);
    else thirdPart.push(el);
  });

  return (
    <div
      className={cn("items-start w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-4 sm:gap-6 lg:gap-8"
      >
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={el}
                className="h-64 sm:h-80 w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                alt="thumbnail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={el}
                className="h-64 sm:h-80 w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                alt="thumbnail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={el}
                className="h-64 sm:h-80 w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                alt="thumbnail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
