import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <div className="flex gap-4 tablet:flex-col">
      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
        <PlaceOutlinedIcon fontSize="large" /> Athens, Greece
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        href="tel:6934639627"
      >
        <LocalPhoneOutlinedIcon fontSize="large" /> (+30) 693 463 9627{" "}
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        href="mailto:jeffabuy@gmail.com"
      >
        <EmailOutlinedIcon fontSize="large" /> jeffabuy@gmail.com
      </motion.a>
    </div>
  );
};
export default Details;
