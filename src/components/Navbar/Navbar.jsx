import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        {["Home", "Menu", "Shop", "Gallery", "About us"].map((item, index) => (
          <li key={index}>
            <NavLink
              style={{ color: item === "Shop" && "#EE2B38" }}
              to={item === "Home" ? "/" : `/${item}`}
            >
              {item}
            </NavLink>
          </li>
        ))}
        <li className="app__navbar-button">Book Table</li>
      </ul>
    </div>
  );
};

export default Navbar;
