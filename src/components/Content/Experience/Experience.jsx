import athTechLogo from "/education/athtech-logo-color.png";
import kmb from "/education/kissmybutton_logo1.png";
import Grid from "../utils/Grid";
import ExpCard from "../utils/ExpCard";

const Education = () => {
  return (
    <Grid title="Education">
      <ExpCard
        img={athTechLogo}
        title="Athens Tech"
        start="October 2024"
        end="Present"
      />
      <ExpCard
        img={kmb}
        title="KissMyButton Academy"
        start="October 2023"
        end="July 2024"
      />
    </Grid>
  );
};

export default Education;
