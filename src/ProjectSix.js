import WorldClock from "./images/1-WorldClockApp.png";

export default function ProjectSix() {
  return (
    <div className="ProjectSix">
      <img src={WorldClock} alt="A screenshot of my World Clock App" />
      <h3>World Clock</h3>
      <p>
        Developed utilizing an API, this application showcases the time of
        various cities while adhering to their respective time zones.
      </p>
      <br />
      <a
        href="https://world-clock-javascript-project.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  );
}
