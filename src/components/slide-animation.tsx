"use client";

import { motion } from "framer-motion";
import { ElementType, PropsWithChildren } from "react";

interface PropsAnimate {
  animate: "left" | "right" | "up" | "down";
  tag?: ElementType;
  duration?: number;
  className?: string;
}

export default function SlideAnimation(props: PropsWithChildren<PropsAnimate>) {
  const setAnimate = ({ animate }: PropsAnimate) => {
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

  return (
    <MotionCustom
      className={props.className}
      variants={setAnimate(props)}
      initial="initial"
      animate="animate"
      transition={{ duration: props.duration || 1 }}
    >
      {props.children}
    </MotionCustom>
  );
}
