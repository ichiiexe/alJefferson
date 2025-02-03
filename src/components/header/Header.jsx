import { useEffect, useState } from "react";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleOver = () => {
    setShowInfo(true);
  };

  const handleOut = () => {
    setShowInfo(false);
  };

  return (
    <header className="my-24 flex justify-between">
      <div
        className=""
        onMouseMove={handleMouseMove}
        onMouseEnter={handleOver}
        onMouseLeave={handleOut}
      >
        <h1 className="relative text-header">[Albert J. Abuy]</h1>
        {showInfo && (
          <div
            className="absolute bg-[#b0b0b0] p-2 flex"
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            <img className="w-40" src="/public/unnamed.jpg" />
            <div>
              <h1>Albert Jefferson Abuy</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>
        )}
      </div>

      <a className="text-header" download={null}>
        Resume [+]
      </a>
    </header>
  );
};

export default Header;
