import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";

export default function DisplayedProjects() {
  return (
    <div className="container">
      <div className="project-box">
        <ProjectOne />
      </div>
      <div className="project-box">
        <ProjectTwo />
      </div>
      <div className="project-box">
        <ProjectThree />
      </div>
      <div className="project-box">
        <ProjectFour />
      </div>
      <div className="project-box">
        <ProjectFive />
      </div>
      <div className="project-box">
        <ProjectSix />
      </div>
    </div>
  );
}
