import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const myFunction = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" className="active">
        Laetitia Saunders
      </a>
      <a href="#about">Contact</a>
      <a href="#projects">Projects</a>
      <a href="#contact">About</a>
      <button className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
}
