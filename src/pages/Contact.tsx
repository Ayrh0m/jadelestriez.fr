import contact from "../assets/images/CONTACT.svg";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";
import { Input, Textarea } from "../components/ui/Input";
import SocialIcon from "../components/ui/SocialIcon";
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
            <Input type="text" placeholder="Email" required />
            <Textarea
              name="message"
              placeholder="Que voulez-vous me dire ?"
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="border"
              style={{ alignSelf: "center" }}
            >
              Envoyer
            </Button>
          </form>
          <div className="socials">
            <SocialIcon
              network="instagram"
              href="https://www.instagram.com"
              size={48}
            />
            <SocialIcon
              network="linkedin"
              href="https://www.linkedin.com"
              size={48}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
