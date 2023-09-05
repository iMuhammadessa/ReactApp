import "./navbar.bundle.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">ReactApp</a>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
