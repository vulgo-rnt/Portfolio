"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ElementType, ReactNode, useEffect, useRef } from "react";

interface PropsAnimate {
  animate: "left" | "right" | "up" | "down";
  tag?: ElementType;
  duration?: number;
  delay?: number;
  className?: string;
  updateUi?: boolean[];
  children: ReactNode | ReactNode[];
}

export default function SlideAnimation(props: PropsAnimate) {
  const setAnimate = (animate: string) => {
    switch (animate) {
      case "left":
        return {
          initial: { x: "100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      case "right":
        return {
          initial: { x: "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      case "up":
        return {
          initial: { y: "100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };
      case "down":
        return {
          initial: { y: "-100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };

      default:
        break;
    }
  };

  const MotionCustom = motion(props.tag || ("span" as ElementType));

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start("animate");
  }, [inView, controls, props.updateUi]);

  return (
    <MotionCustom
      ref={ref}
      className={props.className}
      variants={setAnimate(props.animate)}
      initial="initial"
      animate={controls}
      transition={{ duration: props.duration || 1, delay: props.delay || 0 }}
    >
      {props.children}
    </MotionCustom>
  );
}
