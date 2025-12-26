import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/projets">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="social-links">
        <Link
          to="https://instagram.com/jade_lstz"
          className="social-link"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://linkedin.com/in/jade-lestriez"
          className="social-link"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
}
