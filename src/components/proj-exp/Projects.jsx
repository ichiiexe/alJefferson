import Card from "./utils/Card";
import { motion, transform } from "framer-motion";

const gridVariants = {
  inv: { opacity: 0, translateY: -50 },
  vis: { opacity: 1, translateY: 0, transition: { staggerChildren: 0.2 } },
};

const gridItem = {
  inv: { opacity: 0, translateY: -50 },
  vis: { opacity: 1, translateY: 0 },
};

const Project = () => {
  return (
    <motion.div
      variants={gridVariants}
      initial="inv"
      animate="vis"
      className="w-11/12 grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-[repeat(3,minmax(600px,1000px)] lg:grid-cols-2 md:flex md:flex-col gap-4 gap-y-8 items-center justify-center text-center text-[1.5rem]"
    >
      <motion.div variants={gridItem}>
        <Card
          img={"/projects/Screenshot 2025-01-31 014554.png"}
          github="https://github.com/ichiiexe/weatherAPI-"
          link="https://ichiiexe.github.io/weatherAPI-/"
          title="Weatherizt"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={"/projects/splitter-tipper.png"}
          github=""
          link=""
          title="Splitter-Tipper"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={"/projects/portfoliov2.png"}
          github="https://github.com/ichiiexe/portfoliov2"
          link="https://ichiiexe.github.io/portfoliov2/"
          title="Portfolio"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={"/projects/anime-app.png"}
          github=""
          link=""
          title="Anime Streaming (ongoing)"
        />
      </motion.div>
    </motion.div>
  );
};

export default Project;
