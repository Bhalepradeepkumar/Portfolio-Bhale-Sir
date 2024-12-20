import Navbar from "../components/navbar/Navbar";
import { webDevelopmentProjects, blockchainProjects, mobileDevelopmentProjects, machineLearningProjects } from "../data/projects";
import { useSelector } from "react-redux";
import CategoryBar from "../components/ResearchWork/CategoryBar";
import SideList from "../components/ResearchWork/SideList";
import ProjectData from "../components/Projects/ProjectData";
import "./css/Projects.css";

const ResearchWork = () => {
  const { sideListVar } = useSelector((state) => state.research);
  const { topListVar } = useSelector((state) => state.research);
  const data = [webDevelopmentProjects, blockchainProjects, mobileDevelopmentProjects, machineLearningProjects];
  const category = ["Web Development", "Blockchain", "Mobile Development", "Machine Learning"];
  return (
    <div className="projects">
      {/* navbar  */}
      <div className="absolute">
        <Navbar />
      </div>

      <div className="w-[100vw] flex h-[100vh] pt-[10vh]">
        {/* side list  */}
        {topListVar.payload >= 0 ? (
          <SideList data={data[topListVar.payload]} />
        ) : (
          <SideList data={data[topListVar]} />
        )}
        <div>
          {/* top bar  */}
          <CategoryBar data={category}/>

              {(topListVar.payload === 0 && sideListVar.payload) && (
                <ProjectData
                  title={webDevelopmentProjects[sideListVar.payload]?.title}
                  description={webDevelopmentProjects[sideListVar.payload]?.description}
                  link={`https://tailwindcss.com/docs/text-decoration-style`}
                />
              ) }

            {console.log(blockchainProjects)}
          {(topListVar.payload === 1 && sideListVar.payload) && (
            <ProjectData
              title={blockchainProjects[sideListVar.payload]?.title}
              description={blockchainProjects[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          ) }

          {(topListVar.payload === 2 && sideListVar.payload) && (
            <ProjectData
              title={mobileDevelopmentProjects[sideListVar.payload]?.title}
              description={mobileDevelopmentProjects[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          )}
          {(topListVar.payload === 3 && sideListVar.payload) && (
            <ProjectData
              title={machineLearningProjects[sideListVar.payload]?.title}
              description={machineLearningProjects[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchWork;
