const Layout = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <>
      <div className="w-3/5 laptop:w-4/5 tablet:w-[90%] overflow-y-scroll no-scrollbar px-10 snap-mandatory snap-y scroll-smooth">
        {children}
      </div>
    </>
  );
};

export default Layout;
