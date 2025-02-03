import Card from "./utils/Card";

const Project = () => {
  return (
    <div className="w-11/12 grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-[repeat(3,minmax(600px,1000px)] gap-4 gap-y-8 items-center justify-center text-center text-[1.5rem]">
      <Card
        img={"/public/projects/Screenshot 2025-01-31 014554.png"}
        github="https://github.com/ichiiexe/weatherAPI-"
        link="https://ichiiexe.github.io/weatherAPI-/"
        title="Weatherizt"
      />
      <Card
        img={"/public/projects/splitter-tipper.png"}
        github=""
        link=""
        title="Splitter-Tipper"
      />
      <Card
        img={"/public/projects/portfoliov2.png"}
        github="https://github.com/ichiiexe/portfoliov2"
        link="https://ichiiexe.github.io/portfoliov2/"
        title="Portfolio"
      />
    </div>
  );
};

export default Project;
