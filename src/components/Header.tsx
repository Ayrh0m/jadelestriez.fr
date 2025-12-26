import logo from "../assets/images/JADE.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo JADE" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/projets">Projets</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
