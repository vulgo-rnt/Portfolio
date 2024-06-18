"use client";
import useScrollPosition from "@/hooks/useScrollPosition";
import { TopBtn } from "./icons/top-btn";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollTopBtn() {
  const { scrollY } = useScrollPosition();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      {scrollY > 100 && (
        <motion.button
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}
          className="fixed bottom-10 right-2"
        >
          <TopBtn />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
