import { motion } from "framer-motion";
import ThemeButton from "./Button";

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <motion.header
      className="absolute right-0 text-p p-10 w-full flex justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        CV [+]
      </motion.button>
      <ThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </motion.header>
  );
};

export default Header;
