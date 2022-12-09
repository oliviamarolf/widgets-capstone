import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="about">
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="home">
        <NavLink to="/home">Home</NavLink>
      </div>

      <div className="widgets">
        <NavLink to="/widgets">Widgets</NavLink>
      </div>

      <div className="logout">
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  );
}
