import Link from "./ui/Link";
import SocialIcon from "./ui/SocialIcon";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/projets">Projets</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="social-links">
        <SocialIcon
          network="instagram"
          href="https://instagram.com/jade_lstz"
          size={32}
        />
        <SocialIcon
          network="linkedin"
          href="https://linkedin.com/in/jade-lestriez"
          size={32}
        />
      </div>
    </footer>
  );
}
