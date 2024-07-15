import TravelProject from "./images/1-TravelProject.png";

export default function ProjectThree() {
  return (
    <div className="ProjectThree">
      <img src={TravelProject} alt="A screenshot of my Grid Travel App" />
      <h3>Travel App</h3>
      <p>
        This project, developed using CSS grid layout, demonstrates a different
        approach to building a webpage without relying on Bootstrap.
      </p>
      <br />
      <a
        href="https://greenland-travel-project.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  );
}
