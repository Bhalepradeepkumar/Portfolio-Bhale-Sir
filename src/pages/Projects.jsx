import Navbar from "../components/navbar/Navbar";
import Scroller from "../components/Projects/Scroller";
import ProjectData from "../components/Projects/ProjectData";
import { projects } from "../data/data";
import { useSelector } from "react-redux";
import "./css/Projects.css";

const Projects = () => {
  const {index} = useSelector((state) => state.index);

  return (
    <div className="projects">
      {console.log("index yha hai",index)}
      {/* navbar  */}
      <div className="absolute">
        <Navbar />
      </div>
      <div className="w-[100vw] flex h-[100vh] pt-[10vh]">
        <Scroller />
        {index.payload ? <ProjectData
          title={projects[index.payload].title}
          field={projects[index.payload].field}
          description={projects[index.payload].description}
          link={`https://tailwindcss.com/docs/text-decoration-style`}
        /> : <ProjectData
        title={projects[index].title}
        field={projects[index].field}
        description={projects[index].description}
        link={`https://tailwindcss.com/docs/text-decoration-style`}
      />
        
        }
      </div>
    </div>
  );
};

export default Projects;