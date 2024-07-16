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
        <section className="HomepageSection" id="home">
          <Homepage />
        </section>
        <section className="AboutSection" id="about">
          <About />
        </section>
        <section className="ProjectSection" id="projects">
          <Projects />
        </section>
      </main>
      <footer>
        <section className="ContactSection" id="contact">
          <Contact />
        </section>
      </footer>
    </div>
  );
}
