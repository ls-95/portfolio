import PoemGeneratorPhoto from "./images/1-PoemGenerator.png";

export default function ProjectFour() {
  return (
    <div className="ProjectFour">
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
      <a
        href="https://english-poem-generator-ai.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  );
}
