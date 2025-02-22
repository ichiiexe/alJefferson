import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ExpCard = (props) => {
  const [show, setShow] = useState(null);
  const gridItem = {
    inv: { opacity: 0, translateY: -50 },
    vis: { opacity: 1, translateY: 0 },
  };
  const handleHover = () => {
    setShow(true);
  };

  const handleLeave = () => {
    setShow(false);
  };

  return (
    <motion.div variants={gridItem} className="mb-10">
      <div
        className="h-[300px] relative border-2"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img className="w-full h-full object-contain " src={props.img} />
      </div>
      <h1 className="pt-4">{props.title}</h1>
      <p className="text-p opacity-50">
        {props.start} - {props.end}
      </p>
    </motion.div>
  );
};
export default ExpCard;
