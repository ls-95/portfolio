import ReactDictionaryApp from "./images/1-ReactDictionaryApp.png";

export default function ProjectOne() {
  return (
    <div className="ProjectOne">
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
      <a
        href="https://dictionaryproject-react.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  );
}
