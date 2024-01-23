import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import banner from "/src/assets/images/banner.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  })} to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  })} to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
