import "./Navbar.css";

const NavLinks = ({ isClicked, closeMenu }) => {
  const handleClick = () => {
    if (isClicked) {
      closeMenu();
    }
  };
  return (
    <nav className="NavLinks">
      <ul>
        <li onClick={handleClick}>
          <a href="/">Homepage</a>
        </li>
        <li onClick={handleClick}>
          <a href="/#about">About</a>
        </li>
        <li onClick={handleClick}>
          <a href="/#projects">Projects</a>
        </li>
        <li onClick={handleClick}>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
/*
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
*/
