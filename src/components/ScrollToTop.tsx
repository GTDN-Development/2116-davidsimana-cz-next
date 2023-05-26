import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { scrollY } = useScroll();

  // Handeling scroll events
  useEffect(() => {
    return scrollY.on("change", (y) => {
      const current = y;

      if (current > 1024) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY, setIsVisible]);

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 z-fixed rounded-full bg-primary p-5 transition-colors duration-300 hover:bg-primary-700"
          onClick={ScrollToTop}
        >
          <HiArrowUp className="h-5 w-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
