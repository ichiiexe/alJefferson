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
          <div className="absolute bg-[#b0b0b0] p-2 flex z-50 left-0">
            <img className="" src="/public/unnamed.jpg" />
            <div>
              <h1>Albert Jefferson Abuy</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>
        )}
      </div>

      <a className="text-header" href="/">
        Resume [+]
      </a>
    </header>
  );
};

export default Header;
