import { useEffect, useState, useRef } from "react";
import { animate, motion, useInView, useScroll } from "framer-motion";
import Header from "./components/Content/Header/Header";
import Nav from "./components/Content/utils/Nav";
import Layout from "./components/Layout/Layout";
import About from "./components/Content/About/About";
import Projects from "./components/Content/Projects/Projects";
import Experience from "./components/Content/Experience/Experience";
import Container from "./components/Content/utils/Container";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const containers = document.querySelectorAll("div.snap-center");
  }, [aboutRef]);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#1a1a1a",
      }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      className="h-dvh flex justify-center"
    >
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Nav />

      <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
        <Container ref={aboutRef}>
          <About />
        </Container>
        <Container ref={projectRef}>
          <h1>Projects</h1>
          <Projects />
        </Container>
        <Container ref={experienceRef}>
          <h1>Projects</h1>
          <Experience />
        </Container>
      </Layout>
    </motion.div>
  );
}

export default App;
