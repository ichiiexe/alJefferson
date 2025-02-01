import { useEffect, useState } from "react";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(showInfo);
  }, [showInfo]);

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
    <header className="w-4/5 text-[1.8rem] mx-auto my-24 flex justify-between">
      <div
        className=""
        onMouseMove={handleMouseMove}
        onMouseEnter={handleOver}
        onMouseLeave={handleOut}
      >
        <h1 className="relative">[Albert J. Abuy]</h1>
        {showInfo && (
          <div
            className="absolute w-1/3 bg-black"
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            hello
          </div>
        )}
      </div>

      <a download={null}>Resume [+]</a>
    </header>
  );
};

export default Header;
