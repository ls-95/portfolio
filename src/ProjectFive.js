import WeatherForecast from "./images/1-WeatherForecastApp.png";

export default function ProjectFive() {
  return (
    <div className="ProjectFive">
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
      <a
        href="https://meteo-weatherforecast-shecodes-app.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  );
}
