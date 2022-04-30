import "./style.css";
import projects from "../../utils/projects.json";
import { WebCard } from "../../Components/WebCard/WebCard";
import { useCallback, useState } from "react";

export const SectionProjects = (): JSX.Element => {
  const [elems, setElems] = useState(projects);
  const filterItems = useCallback(
    (id: string): any => {
      const data = id ? projects.filter((i) => i.type === id) : projects;
      setElems(data);
    },
    [setElems]
  );

  return (
    <section className="section_projects" id="projects">
      <div className="container_projects">
        <div className="projects_title">My Projects</div>
        <div className="projects_navlist">
          <ul className="sorting_list">
            <li onClick={() => filterItems("")}>All</li>
            <li onClick={() => filterItems("commerce")}>Commerce</li>
            <li onClick={() => filterItems("mockups")}>Mockups</li>
            <li onClick={() => filterItems("design")}>Design</li>
          </ul>
        </div>

        <div className="projects_cards">
          {elems.map((item) => {
            return (
              <WebCard key={item.id} title={item.title} imageSrc={item.src} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
