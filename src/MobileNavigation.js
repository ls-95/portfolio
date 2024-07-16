import { useState } from "react";
import NavLinks from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import "./Navbar.css";

const MobileNavigation = () => {
  const [click, setclick] = useState(false);

  const Hamburger = (
    <TiThMenu
      className="HamburgerMenu"
      size="30px"
      color="white"
      onClick={() => setclick(!click)}
    />
  );

  const Close = (
    <IoIosCloseCircle
      className="HamburgerMenu"
      size="30px"
      color="white"
      onClick={() => setclick(!click)}
    />
  );

  const closeMenu = () => setclick(false);

  return (
    <nav className="MobileNavigation">
      <p className="logo">
        <strong>Laetitia Saunders</strong>
      </p>
      {click ? Close : Hamburger}
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  );
};

export default MobileNavigation;
