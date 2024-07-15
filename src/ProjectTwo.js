import ReactWeatherApp from "./images/1-ReactWeatherApp.png";

export default function ProjectTwo() {
  return (
    <div className="ProjectTwo">
      <img src={ReactWeatherApp} alt="A screenshot of my React Weather App" />
      <h3>React Weather App</h3>
      <p>
        This app, built with React, integrates with a weather API to display
        accurate forecasts for any city you search.
      </p>
      <br />
      <a
        href="https://react-project-weather-application.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  );
}
