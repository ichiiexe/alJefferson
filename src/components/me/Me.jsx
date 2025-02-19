import profile from "/public/unnamed.jpg";

const Me = () => {
  return (
    <div className="bg-opacity-20 w-[clamp(300px,60%,90%)] m-auto flex justify-center gap-4 px-20 py-10 rounded-md xl:w-full sm:px-0">
      <img className="rounded-full w-[clamp(100px,2vw,20%)]" src={profile} />
      <div className=" p-4 flex flex-col gap-4">
        <h1 className="text-title font-medium">Albert Jefferson Abuy</h1>
        <h2 className="text-subtitle px-4">
          FrontEnd Developer 📌<span className="italic">Athens, Greece</span>
        </h2>
        <p className="text-p">
          Greetings, I enjoy creating clean and minimalistic designs.
        </p>
      </div>
    </div>
  );
};

export default Me;
