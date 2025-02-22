import tipper from "/projects/splitter-tipper.png";
import portfolio from "/projects/portfoliov2.png";
import animeApp from "/projects/anime-app.png";
import trackerApp from "/projects/riotApp.png";
import weatherApp from "/projects/Screenshot 2025-01-31 014554.png";
import Grid from "../utils/Grid";
import Card from "./utils/Card";

const Projects = (ref) => {
  const projectData = [
    {
      img: weatherApp,
      github: "https://github.com/ichiiexe/weatherAPI-",
      link: "https://ichiiexe.github.io/weatherAPI-/",
      title: "Weatherizt",
    },
    {
      img: tipper,
      github: "https://github.com/ichiiexe/tipper-splitter-",
      link: "https://ichiiexe.github.io/tipper-splitter-/",
      title: "Tipper/Splitter",
    },
    // {
    //   img: portfolio,
    //   github: "https://github.com/ichiiexe/portfoliov2",
    //   link: "https://ichiiexe.github.io/portfoliov2/",
    //   title: "Portfolio",
    // },
    {
      img: animeApp,
      github: "",
      link: "",
      title: "Anime Streaming (ongoing)",
    },
    {
      img: trackerApp,
      github: "",
      link: "",
      title: "Riot StatTrak (ongoing)",
    },
  ];
  return (
    <Grid>
      {projectData.map((item) => (
        <Card
          img={item.img}
          github={item.github}
          link={item.link}
          title={item.title}
        />
      ))}
    </Grid>
  );
};

export default Projects;
