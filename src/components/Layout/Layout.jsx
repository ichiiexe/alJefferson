const Layout = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <>
      <div className="overflow-y-scroll no-scrollbar px-10 snap-mandatory snap-y scroll-smooth">
        {children}
      </div>
    </>
  );
};

export default Layout;
