import profile from "/unnamed.jpg";

const Me = () => {
  return (
    <div className="bg-opacity-20 w-[clamp(300px,60%,90%)] m-auto flex px-20 py-10 xl:w-full sm:px-0 border-b-[1px]">
      <img
        className="rounded-full h-full w-[clamp(100px,20%,40%)] "
        src={profile}
      />
      <div className="flex flex-col gap-4 mx-20 sm:mx-0 xsm:px-0">
        <h1 className="text-title font-medium">
          Hi 👋, I'm Albert Jefferson Abuy
        </h1>
        <h2 className="text-subtitle">
          FrontEnd Developer 📌<span className="italic">Athens, Greece</span>
        </h2>
        <p className="text-p">
          I enjoy creating clean and minimalistic designs.
        </p>
      </div>
    </div>
  );
};

export default Me;
