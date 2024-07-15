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
        <section className="homepage-section">
          <Homepage />
        </section>
        <section className="about-section">
          <About />
        </section>
        <section className="projects-section">
          <Projects />
        </section>
      </main>
      <footer>
        <section className="contact-section">
          <Contact />
        </section>
      </footer>
    </div>
  );
}
