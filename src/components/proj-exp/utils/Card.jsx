import { useEffect, useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/outlined";

const Card = (props) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    console.log(show);
  }, [show]);

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
          className={`w-full h-full absolute bg-black z-10 top-0 cursor-pointer text-white p-4 flex justify-end gap-2 transition-all duration-75 ${
            show ? "bg-opacity-50" : "bg-opacity-0"
          }`}
        >
          <MaterialSymbol
            className={show ? "opacity-100" : "opacity-0"}
            icon="code"
            size={24}
            fill
          />
          <MaterialSymbol
            className={show ? "opacity-100" : "opacity-0"}
            icon="public"
            size={24}
            fill
          />
        </div>
      </div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Card;
