import profilePhoto from "/unnamed.jpg";
import Details from "./utils/Details";
import TechStack from "./utils/TechStack";

export const About = ({ isDarkMode }) => {
  return (
    <div className="h-[50vh] my-20">
      <div className=" flex justify-center items-center gap-4 p-4 mobilem:flex-col ">
        <img
          className="w-[clamp(150px,2vw,500px)] rounded-full"
          src={profilePhoto}
        />
        <div className="flex flex-col m-4 gap-4 w-full">
          <h1 className="text-title">Hi ,👋I'm </h1>
          <h1 className="text-title pl-4">Albert Jefferson Abuy</h1>
          <h1 className="text-subtitle">I'm a Frontend Engineer</h1>
          <Details />
        </div>
      </div>
      <TechStack />
    </div>
  );
};

export default About;
