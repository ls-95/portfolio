import "./About.css";

export default function Education() {
  return (
    <div className="Education">
      <h2>Education</h2>
      <p>
        I have been dedicated to studying front-end development online for
        nearly a year. Initially, I spent six months learning through
        freeCodeCamp. While I gained a solid understanding of individual
        elements, I felt that the program didn't adequately demonstrate how
        these components work together. Seeking a more comprehensive approach, I
        transitioned to SheCodes, which offers workshop-based learning. Over the
        past six months with SheCodes, my confidence has grown significantly.
        Additionally, being surrounded by experienced professionals in the field
        has provided invaluable support and guidance. As a result,{" "}
        <span className="Yellow">
          I have successfully acquired skills in <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Bootstrap</strong>, <strong>API Integration</strong>,{" "}
          <strong>AI API Integration</strong>, <strong>Responsiveness</strong>,
          and <strong>React</strong>
        </span>
        .
      </p>
      <p className="about-last-paragraph">
        Below is a button linking to my SheCodes profile, where you can view my
        certificates, completed projects, and acquired skills .
      </p>
      <a
        href="https://www.shecodes.io/graduates/116123-laetitia-saunders"
        className="Button"
        target="_blank"
        rel="noreferrer"
      >
        SheCodes Profile
      </a>
    </div>
  );
}
