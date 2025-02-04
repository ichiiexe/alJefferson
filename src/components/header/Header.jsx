import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setShowInfo(true);
  };

  return (
    <header className="my-24 flex justify-between">
      <div className="" onClick={handleClick}>
        <h1 className="relative text-header">[Albert J. Abuy]</h1>
        {showInfo && (
          <motion.div
            className="absolute bg-[#b0b0b0] w-1/5 p-2 flex z-50 my-5 transition-opacity duration-[.5]"
            onMouseLeave={() => {
              setShowInfo(false);
            }}
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img className="max-w-40" src="/public/unnamed.jpg" />
            <div>
              <h1>Albert Jefferson Abuy</h1>
              <h2>Software Engineer</h2>
            </div>
          </motion.div>
        )}
      </div>

      <a
        className="text-header"
        download
        href="/public/Albert_Jefferson_Abuy_-_Software_Engineer.pdf"
      >
        Resume [+]
      </a>
    </header>
  );
};

export default Header;
