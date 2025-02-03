import Card from "./utils/Card";

const Project = () => {
  return (
    <div className="w-11/12 grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-[repeat(3,minmax(600px,1000px)] gap-4 gap-y-8 items-center justify-center text-center text-[1.5rem]">
      <Card
        img={"/public/projects/Screenshot 2025-01-31 014554.png"}
        title="Weatherizt"
      />
      <Card
        img={"/public/projects/splitter-tipper.png"}
        title="Splitter-Tipper"
      />
      <Card
        img={"/public/projects/Screenshot 2025-02-01 174447.png"}
        title="Portfolio"
      />
    </div>
  );
};

export default Project;
