import "./About.css";
import Education from "./Education";

export default function Header() {
  return (
    <div className="About" id="About">
      <div className="about-section">
        <h2>About me</h2>
        <p>
          I am passionate about the outdoors, with a particular love for hiking
          and knitting. Additionally, I am bilingual in both English and French.
          I have had the enriching experience of living in Brighton, England,
          for 10 years, and in the south of France for 11 years, which has
          provided me with a deep cultural understanding and proficiency in both
          languages. I am currently expanding my linguistic skills by learning
          Swedish.
        </p>
        <br />
        <p>
          <span className="Red">
            A brief overview of my inspiring journey to becoming a front-end
            developer:
          </span>
        </p>
        <p>
          I am a 29-year-old woman from France who has taken an inspiring
          journey to discover my true passion in life. While many of my peers
          went off to university with clear goals, I explored various subjects,
          striving to find my own path. Although my initial university studies
          didn't resonate with me, and I eventually chose to work as a waitress,
          this period taught me resilience and adaptability. When COVID-19 hit,
          the hotel where I worked unfortunately closed. This setback gave me an
          opportunity to rethink my career. Through a support service at the
          unemployment centre, I connected with a professional who was dedicated
          to helping me uncover a fulfilling career path. Her guidance was
          invaluable, and after many months,{" "}
          <span className="Yellow">
            I discovered my passion for front-end development
          </span>
          . Now, I am excited to pursue this new and exciting career.
        </p>
      </div>
      <div className="about-section">
        <Education />
      </div>
    </div>
  );
}
