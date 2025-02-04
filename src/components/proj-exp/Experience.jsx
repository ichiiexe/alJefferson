import { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const Exp = (props) => {
  return (
    <motion.div
      className="text-largeheader m-auto"
      initial={{ translateY: -50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      no experience to show...
    </motion.div>
  );
};
export default Exp;
