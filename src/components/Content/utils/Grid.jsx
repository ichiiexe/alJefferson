import { motion } from "framer-motion";

const Grid = ({ title, children }) => {
  const gridVariants = {
    inv: { opacity: 0, translateY: -50 },
    vis: { opacity: 1, translateY: 0, transition: { staggerChildren: 0.2 } },
  };
  return (
    <motion.div
      variants={gridVariants}
      initial="inv"
      animate="vis"
      className="grid grid-cols-[repeat(3,clamp(200px,33%,300px))] justify-center gap-4 tablet:grid-cols-2 mobilem:grid-cols-1"
    >
      {children}
    </motion.div>
  );
};

export default Grid;
