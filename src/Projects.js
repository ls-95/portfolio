import "./Projects.css";
import DisplayedProjects from "./DisplayedProjects";

export default function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      <p>
        During my studies with SheCodes, I developed several projects.{" "}
        <span className="Yellow">
          These projects are hosted on <strong>Netlify</strong>. You can
          checkout the source code on my <strong>GitHub page</strong>
        </span>
        , where can also find and explore my extensive collection of code
        repositories, collaborative projects, and contributions to open-source
        initiatives. Additionally, you will be taken to my Netlify page, where
        you can see my deployed web applications and interactive projects in
        action, providing a comprehensive view of my work and technical skills.
      </p>
      <br />
      <a
        href="https://app.netlify.com/teams/ls-95/overview"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
      <a href="https://github.com/ls-95" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <p className="ProjectsParagraph">
        Presented below are select projects that I've developed. Feel free to
        click on the buttons to access each project and explore its
        functionalities in detail.
      </p>
      <DisplayedProjects />
    </div>
  );
}
