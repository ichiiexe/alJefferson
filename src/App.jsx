import { useEffect, useState } from "react";
import Header from "./components/header/header";

function App() {
  const [section, setSection] = useState(true);

  const handleSection = () => {
    if (section) {
      setSection(false);
    } else {
      setSection(true);
    }
  };

  useEffect(() => {
    console.log(section);
  });

  return (
    <>
      <Header />
      <div className="w-full ">
        <ul className="w-1/4 m-auto py-10 flex justify-around md:justify-center items-center gap-10 text-[1.5rem]">
          <li onClick={handleSection}>Projects</li>
          <li onClick={handleSection}>Experience</li>
        </ul>
      </div>
    </>
  );
}

export default App;
