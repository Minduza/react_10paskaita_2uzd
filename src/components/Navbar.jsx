import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="meniu">
        <Link to="/">Home</Link>
        <Link to="/users">Members</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
