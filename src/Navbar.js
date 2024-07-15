import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const myFunction = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" className="active brand">
        Laetitia Saunders
      </a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
}
