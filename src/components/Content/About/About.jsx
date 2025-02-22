import profilePhoto from "/unnamed.jpg";
import Details from "./utils/Details";
import TechStack from "./utils/TechStack";

export const About = ({ isDarkMode }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 p-4 mobilem:flex-col ">
        <img
          className="w-[clamp(150px,2vw,500px)] rounded-full"
          src={profilePhoto}
        />
        <div className=" em-4 gap-4 w-full">
          <h1 className="text-title leading-snug">Hi ,👋I'm </h1>
          <h1 className="text-title pl-4 leading-snug font-bold">
            Albert Jefferson Abuy
          </h1>
          <h1 className="text-subtitle leading-snug">
            I'm a Frontend Developer
          </h1>
          <Details />
        </div>
      </div>
      <TechStack />
    </div>
  );
};

export default About;
