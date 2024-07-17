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
        <li onClick={() => handleClick("home")}>Homepage</li>
        <li onClick={() => handleClick("about")}>About</li>
        <li onClick={() => handleClick("projects")}>Projects</li>
        <li onClick={() => handleClick("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavLinks;
