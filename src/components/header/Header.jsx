import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

const Header = () => {
  return (
    <header className="mt-24 flex justify-between">
      <div>
        <h1 className="relative text-header">[Albert J. Abuy]</h1>
      </div>
      <a
        className="text-header relative"
        download
        href="/public/Albert_Jefferson_Abuy_-_Software_Engineer.pdf"
      >
        Resume [+]
      </a>
    </header>
  );
};

export default Header;
