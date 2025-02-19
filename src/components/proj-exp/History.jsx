import GridCont from "./utils/GridCont";
import ExpCard from "./utils/ExpCard";
import athTechLogo from "/education/athtech-logo-color.png";
import kmb from "/education/kissmybutton_logo1.png";
import { motion } from "framer-motion";

const Exp = (props) => {
  return (
    <>
      <GridCont title="Education">
        <ExpCard
          img={athTechLogo}
          title="Athens Tech"
          start="October 2024"
          end="Present"
        />
        <ExpCard
          img={kmb}
          title="KissMyButton Academy"
          start="October 2023"
          end="July 2024"
        />
      </GridCont>

      <GridCont title="Work">
        <motion.div
          className="text-largeheader m-auto col-span-3 h-[200px] flex items-center"
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          no experience to show...
        </motion.div>
      </GridCont>
    </>
  );
};
export default Exp;
