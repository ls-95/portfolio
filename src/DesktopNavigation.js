import NavLinks from "./NavLinks";
import "./Navbar.css";

const DesktopNavigation = () => {
  return (
    <nav className="DesktopNavigation">
      <p className="logo">
        <strong>Laetitia Saunders</strong>
      </p>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
