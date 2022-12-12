import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logout">
        <NavLink to="/logout" className="logout">
          LOGOUT
        </NavLink>
      </div>
      <div className="widgets">
        <NavLink to="/widgets">WIDGETS</NavLink>
      </div>
      <div className="about">
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    </div>
  );
}
