import "./Navbar.css";

const NavLinks = ({ isClicked, closeMenu }) => {
  const handleClick = (scrollToId) => {
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });

    if (isClicked) {
      closeMenu();
    }
  };
  return (
    <nav className="NavLinks">
      <ul>
        <li onClick={() => handleClick("home")}>
          <a className="links">Homepage</a>
        </li>
        <li onClick={() => handleClick("about")}>
          <a className="links">About</a>
        </li>
        <li onClick={() => handleClick("projects")}>
          <a className="links">Projects</a>
        </li>
        <li onClick={() => handleClick("contact")}>
          <a className="links">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
