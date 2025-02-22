import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/outlined";
import { motion } from "framer-motion";

const ThemeButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <header>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="material-symbols-outlined text-[clamp(1.2rem,3vw,2.4rem)] p-2 rounded-full"
        style={{
          color: isDarkMode ? "#ffffff" : "#1a1a1a",
        }}
      >
        <MaterialSymbol
          icon={isDarkMode ? "light_mode" : "dark_mode"}
          size={24}
          fill
        />
      </motion.button>
    </header>
  );
};

export default ThemeButton;
