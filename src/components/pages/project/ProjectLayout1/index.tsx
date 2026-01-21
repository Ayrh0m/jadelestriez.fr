import Navigation from "../Navigation";
import Header from "./Header";
import MainImage from "./MainImage";
import type { ProjectLayout1 } from "../../../../types";
import "../../../../styles/project/ProjectLayout1.css";

interface ProjectLayout1Props {
  project: ProjectLayout1;
}

export default function ProjectLayout1({ project }: ProjectLayout1Props) {
  return (
    <div className="project-detail">
      <Navigation project={project} />
      <Header project={project} />
      <MainImage project={project} />
    </div>
  );
}
