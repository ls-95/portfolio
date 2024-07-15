import PoemGeneratorPhoto from "./images/1-PoemGenerator.png";
import ReactDictionaryApp from "./images/1-ReactDictionaryApp.png";
import ReactWeatherApp from "./images/1-ReactWeatherApp.png";
import TravelProject from "./images/1-TravelProject.png";
import WeatherForecast from "./images/1-WeatherForecastApp.png";
import WorldClock from "./images/1-WorldClockApp.png";

export default function DisplayedProjects() {
  const projects = [
    {
      imagesource: ReactDictionaryApp,
      imagealt: "A screenshot of my React Dictionary App",
      title: "React Dictionary App",
      text: "This project, built with React, utilizes two distinct APIs to create a dictionary app that displays word meanings and corresponding photos.",
      buttonlink: "https://dictionaryproject-react.netlify.app/",
    },
    {
      imagesource: ReactWeatherApp,
      imagealt: "A screenshot of my React Weather App",
      title: "React Weather App",
      text: "This app, built with React, integrates with a weather API to display accurate forecasts for any city you search.",
      buttonlink: "https://react-project-weather-application.netlify.app/",
    },
    {
      imagesource: TravelProject,
      imagealt: "A screenshot of my Grid Travel App",
      title: "Travel App",
      text: "This project, developed using CSS grid layout, demonstrates a different approach to building a webpage without relying on Bootstrap.",
      buttonlink: "https://greenland-travel-project.netlify.app/",
    },
    {
      imagesource: PoemGeneratorPhoto,
      imagealt: "A screenshot of my Poem Generator App",
      title: "Poem Generator App",
      text: "Created using an AI API, this innovative tool can generate a complete poem by simply entering a single word as the topic.",
      buttonlink: "https://english-poem-generator-ai.netlify.app/",
    },
    {
      imagesource: WeatherForecast,
      imagealt: "A screenshot of my Weather Forecast App",
      title: "Weather Forecast App",
      text: "Built with an API, this app shows the current and next five days' weather forecasts, with icons that adjust to the weather conditions.",
      buttonlink: "https://meteo-weatherforecast-shecodes-app.netlify.app/",
    },
    {
      imagesource: WorldClock,
      imagealt: "A screenshot of my World Clock App",
      title: "World Clock App",
      text: "Developed utilizing an API, this application showcases the time of various cities while adhering to their respective time zones.",
      buttonlink: "https://world-clock-javascript-project.netlify.app/",
    },
  ];
  return (
    <div className="container">
      {projects.map(function (project, index) {
        return (
          <div className="project-box" key={index}>
            <img src={project.imagesource} alt={project.imagealt} />
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <br />
            <a href={project.buttonlink} target="_blank" rel="noreferrer">
              Launch App
            </a>
          </div>
        );
      })}
    </div>
  );
}
