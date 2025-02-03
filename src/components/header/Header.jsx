import { useEffect, useState } from "react";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  return (
    <header className="my-24 flex justify-between">
      <div className="" onClick={handleClick}>
        <h1 className="relative text-header">[Albert J. Abuy]</h1>
        {showInfo && (
          <div className="absolute bg-[#b0b0b0] w-1/5 p-2 flex z-50">
            <img className="max-w-40" src="/public/unnamed.jpg" />
            <div>
              <h1>Albert Jefferson Abuy</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>
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
