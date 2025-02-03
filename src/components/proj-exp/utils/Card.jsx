import { useEffect, useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/outlined";

const Card = (props) => {
  const [show, setShow] = useState(null);
  const handleHover = () => {
    setShow(true);
  };

  const handleLeave = () => {
    setShow(false);
  };

  return (
    <div className="">
      <div
        className="h-[300px] relative "
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img className="w-full h-full object-cover" src={props.img} />
        <div
          className={`w-full h-full absolute bg-black z-10 top-0 text-white p-4 text-right transition-all duration-500 ${
            show ? "bg-opacity-50" : "bg-opacity-0"
          }`}
        >
          <a href={props.github} target="_blank">
            <MaterialSymbol
              className={`inline cursor-pointer transition-all duration-300 ${
                show ? "opacity-100" : "opacity-0"
              }`}
              icon="code"
              size={24}
              fill
            />
          </a>
          <a href={props.link} target="_blank">
            <MaterialSymbol
              className={`inline cursor-pointer transition-all duration-300 ${
                show ? "opacity-100" : "opacity-0"
              }`}
              icon="public"
              size={24}
              fill
            />
          </a>
        </div>
      </div>
      <h1 className="p-4">{props.title}</h1>
    </div>
  );
};

export default Card;
