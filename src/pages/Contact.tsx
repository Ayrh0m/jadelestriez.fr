import contact from "../assets/images/CONTACT.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import SEO from "../components/SEO";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <SEO
        title="Contact"
        description="Contactez Jade pour toute collaboration ou information. Envoyez un message ou retrouvez-moi sur les réseaux sociaux."
      />
      <div className="outer-container">
        <div className="inner-container">
          <img src={contact} alt="Contact" className="contact-image" />
          <div className="tabs">
            <span>Email</span>
          </div>
          <form action="">
            <input type="text" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Que voulez-vous me dire ?"
              rows={4}
              required
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
          <div className="socials">
            <FaInstagram size={64} />
            <FaLinkedin size={64} />
          </div>
        </div>
      </div>
    </section>
  );
}
