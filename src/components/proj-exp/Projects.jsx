import Card from "./utils/Card";
import tipper from "/projects/splitter-tipper.png";
import portfolio from "/projects/portfoliov2.png";
import animeApp from "/projects/anime-app.png";
import trackerApp from "/projects/riotApp.png";
import weatherApp from "/projects/Screenshot 2025-01-31 014554.png";

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
          img={weatherApp}
          github="https://github.com/ichiiexe/weatherAPI-"
          link="https://ichiiexe.github.io/weatherAPI-/"
          title="Weatherizt"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={tipper}
          github="https://github.com/ichiiexe/tipper-splitter-"
          link="https://ichiiexe.github.io/tipper-splitter-/"
          title="Tipper/Splitter"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={portfolio}
          github="https://github.com/ichiiexe/portfoliov2"
          link="https://ichiiexe.github.io/portfoliov2/"
          title="Portfolio"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={animeApp}
          github=""
          link=""
          title="Anime Streaming (ongoing)"
        />
      </motion.div>
      <motion.div variants={gridItem}>
        <Card
          img={trackerApp}
          github=""
          link=""
          title="Riot StatTrak (ongoing)"
        />
      </motion.div>
    </motion.div>
  );
};

export default Project;
