import Card from "./utils/Card";
import { motion, transform } from "framer-motion";

const Project = () => {
  return (
    <div className="w-11/12 grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-[repeat(3,minmax(600px,1000px)] gap-4 gap-y-8 items-center justify-center text-center text-[1.5rem]">
      <motion.div
        initial={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card
          img={"/public/projects/Screenshot 2025-01-31 014554.png"}
          github="https://github.com/ichiiexe/weatherAPI-"
          link="https://ichiiexe.github.io/weatherAPI-/"
          title="Weatherizt"
        />
      </motion.div>
      <motion.div
        initial={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Card
          img={"/public/projects/splitter-tipper.png"}
          github=""
          link=""
          title="Splitter-Tipper"
        />
      </motion.div>
      <motion.div
        initial={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Card
          img={"/public/projects/portfoliov2.png"}
          github="https://github.com/ichiiexe/portfoliov2"
          link="https://ichiiexe.github.io/portfoliov2/"
          title="Portfolio"
        />
      </motion.div>
    </div>
  );
};

export default Project;
