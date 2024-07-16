import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main">
        <section className="homepage-section" id="home">
          <Homepage />
        </section>
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="projects-section" id="projects">
          <Projects />
        </section>
      </main>
      <footer>
        <section className="contact-section" id="contact">
          <Contact />
        </section>
      </footer>
    </div>
  );
}
