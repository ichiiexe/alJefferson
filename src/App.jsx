import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Project from "./components/proj-exp/Projects";
import Exp from "./components/proj-exp/Experience";

function App() {
  const [section, setSection] = useState(0);

  const handleSection = (e) => {
    setSection(e.target.value);
  };

  useEffect(() => {
    console.log(section);
  });

  return (
    <div className="w-4/5 mx-auto">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <ul className="w-1/4 m-auto py-10 flex justify-around md:justify-center items-center gap-10 text-[1.5rem]">
          <li value="0" onClick={handleSection}>
            Projects
          </li>
          <li value="1" onClick={handleSection}>
            Experience
          </li>
        </ul>
        {section == 0 ? <Project /> : <Exp />}
      </div>
    </div>
  );
}

export default App;
