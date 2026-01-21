import { motion } from "motion/react";
import { useState } from "react";
import { urlFor, type SanityImageSource } from "../../../../sanityClient";
import Lightbox from "../../../ui/Lightbox";

interface LabeledImageProps {
  image: SanityImageSource;
  label: string;
}

export default function LabeledImage({ image, label }: LabeledImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const lightboxUrl = urlFor(image)
    .width(1920)
    .quality(100)
    .format("webp")
    .url();

  return (
    <>
      <motion.div 
        className="labeled-image-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div 
          className="labeled-image-wrapper" 
          onClick={() => setIsLightboxOpen(true)}
          style={{ cursor: "zoom-in" }}
        >
          <img 
            src={urlFor(image).width(800).height(1000).fit("crop").url()} 
            alt={label}
            loading="lazy"
          />
        </div>
        <h3 className="labeled-image-title">{label}</h3>
      </motion.div>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageUrl={lightboxUrl}
        altText={label}
      />
    </>
  );
}
