import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <section className="header-section">
          <Header />
        </section>
        <main>
          <section className="first-main-section">
            <About />
          </section>
          <section className="second-main-section">
            <Projects />
          </section>
        </main>
      </header>
    </div>
  );
}
