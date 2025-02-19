import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/header/header";
import Me from "./components/me/Me";
import Project from "./components/proj-exp/Projects";
import History from "./components/proj-exp/History";

function App() {
  const [section, setSection] = useState(0);

  const handleSection = (e) => {
    setSection(e.target.value);
  };

  return (
    <div className="w-4/5 mx-auto">
      <Header />
      <Me />
      <div className="flex flex-col justify-center ">
        <ul className="w-1/4 m-auto  py-10 flex justify-around md:justify-center items-center gap-10 text-[1.5rem] mb-20">
          <li
            value="0"
            className={
              section == 0
                ? "underline underline-offset-4 font-semibold transition-all duration-50"
                : "cursor-pointer opacity-50"
            }
            onClick={handleSection}
          >
            Projects
          </li>
          <li
            value="1"
            className={
              section == 1
                ? "underline underline-offset-4 font-semibold transition-all duration-50"
                : "cursor-pointer opacity-50"
            }
            onClick={handleSection}
          >
            Experience
          </li>
        </ul>
        {section == 0 ? (
          <Project />
        ) : (
          <>
            <History />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
