import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa6";
import { motion } from "motion/react";

type SocialNetwork =
  | "instagram"
  | "linkedin"
  | "github"
  | "twitter"
  | "website";

interface SocialIconProps {
  network: SocialNetwork;
  href: string;
  size?: number;
  className?: string;
}

const iconMap: Record<SocialNetwork, IconType> = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaTwitter,
  website: FaGlobe,
};

export default function SocialIcon({
  network,
  href,
  size = 24,
  className = "",
}: SocialIconProps) {
  const IconComponent = iconMap[network];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon ${className}`}
      whileHover={{ opacity: 0.7 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "inline-flex",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <IconComponent size={size} />
    </motion.a>
  );
}
