import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
