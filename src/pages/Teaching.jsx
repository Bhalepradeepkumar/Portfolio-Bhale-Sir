import Navbar from "../components/navbar/Navbar";
import { journals, conferences, workshops, preprints, patents } from "../data/researchData";
import { useSelector } from "react-redux";
import CategoryBar from "../components/ResearchWork/CategoryBar";
import SideList from "../components/ResearchWork/SideList";
import ProjectData from "../components/Projects/ProjectData";
import "./css/Projects.css";

const ResearchWork = () => {
  const { sideListVar } = useSelector((state) => state.research);
  const { topListVar } = useSelector((state) => state.research);
  const data = [journals, conferences, workshops, preprints, patents];

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
          <CategoryBar />

              {(topListVar.payload === 0 && sideListVar.payload) && (
                <ProjectData
                  title={journals[sideListVar.payload]?.title}
                  description={journals[sideListVar.payload]?.description}
                  link={`https://tailwindcss.com/docs/text-decoration-style`}
                />
              ) }

            {console.log(conferences)}
          {(topListVar.payload === 1 && sideListVar.payload) && (
            <ProjectData
              title={conferences[sideListVar.payload]?.title}
              description={conferences[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          ) }

          {(topListVar.payload === 2 && sideListVar.payload) && (
            <ProjectData
              title={workshops[sideListVar.payload]?.title}
              description={workshops[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          )}
          {(topListVar.payload === 3 && sideListVar.payload) && (
            <ProjectData
              title={preprints[sideListVar.payload]?.title}
              description={preprints[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          )}
          {(topListVar.payload === 4 && sideListVar.payload) && (
            <ProjectData
              title={patents[sideListVar.payload]?.title}
              description={patents[sideListVar.payload]?.description}
              link={`https://tailwindcss.com/docs/text-decoration-style`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchWork;
