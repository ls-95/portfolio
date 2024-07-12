import PoemGeneratorPhoto from "./images/1-PoemGenerator.png";
import ReactDictionaryApp from "./images/1-ReactDictionaryApp.png";
import ReactWeatherApp from "./images/1-ReactWeatherApp.png";
import TravelProject from "./images/1-TravelProject.png";
import WeatherForecast from "./images/1-WeatherForecastApp.png";
import WorldClock from "./images/1-WorldClockApp.png";

export default function DisplayedProjects() {
  return (
    <div className="container">
      <div className="project-box">
        <img
          src={ReactDictionaryApp}
          alt="A screenshot of my React Dictionary App"
        />
        <h3>React Dictionary App</h3>
        <p>
          This project, built with React, utilizes two distinct APIs to create a
          dictionary app that displays word meanings and corresponding photos.
        </p>
        <br />
        <a>Launch App</a>
      </div>
      <div className="project-box">
        <img src={ReactWeatherApp} alt="A screenshot of my React Weather App" />
        <h3>React Weather App</h3>
        <p>
          This app, built with React, integrates with a weather API to display
          accurate forecasts for any city you search.
        </p>
        <br />
        <a>Launch App</a>
      </div>
      <div className="project-box">
        <img src={TravelProject} alt="A screenshot of my Grid Travel App" />
        <h3>Travel App</h3>
        <p>
          This project, developed using CSS grid layout, demonstrates a
          different approach to building a webpage without relying on Bootstrap.
        </p>
        <br />
        <a>Launch App</a>
      </div>
      <div className="project-box">
        <img
          src={PoemGeneratorPhoto}
          alt="A screenshot of my Poem Generator App"
        />
        <h3>Poem Generator App</h3>
        <p>
          Created using an AI API, this innovative tool can generate a complete
          poem by simply entering a single word as the topic.
        </p>
        <br />
        <a>Launch App</a>
      </div>
      <div className="project-box">
        <img
          src={WeatherForecast}
          alt="A screenshot of my Weather Forecast App"
        />
        <h3>Weather Forecast App</h3>
        <p>
          Built with an API, this app shows the current and next five days'
          weather forecasts, with icons that adjust to the weather conditions.
        </p>
        <br />
        <a>Launch App</a>
      </div>
      <div className="project-box">
        <img src={WorldClock} alt="A screenshot of my World Clock App" />
        <h3>World Clock</h3>
        <p>
          Developed utilizing an API, this application showcases the time of
          various cities while adhering to their respective time zones.
        </p>
        <br />
        <a>Launch App</a>
      </div>
    </div>
  );
}
