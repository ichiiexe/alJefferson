import { motion } from "framer-motion";
const GridCont = ({ title, children }) => {
  const gridVariants = {
    inv: { opacity: 0, translateY: -50 },
    vis: { opacity: 1, translateY: 0, transition: { staggerChildren: 0.2 } },
  };
  return (
    <div className="w-11/12 m-auto ">
      <h1 className="text-title pb-6 w-10/12 xl:w-full m-auto">{title}</h1>
      <motion.div
        variants={gridVariants}
        initial="inv"
        animate="vis"
        className="grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-[repeat(3,minmax(600px,1000px)] lg:grid-cols-2 md:flex md:flex-col gap-4 gap-y-8 items-center justify-center text-center text-[1.5rem]"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GridCont;
