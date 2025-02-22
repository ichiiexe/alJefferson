import { motion, useInView, useScroll } from "framer-motion";
import { forwardRef, useEffect } from "react";

const Container = forwardRef(({ children }, ref) => {
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px -100px 0px",
  });

  useEffect(() => {
    console.log(`${ref} ${isInView}`);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
});

export default Container;
