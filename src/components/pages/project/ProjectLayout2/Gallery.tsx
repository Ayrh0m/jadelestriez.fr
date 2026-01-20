import { motion } from "motion/react";
import { urlFor } from "../../../../sanityClient";
import type { Project } from "../../../../types";

interface GalleryProps {
  project: Project;
}

export default function Gallery({ project }: GalleryProps) {
  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <motion.div 
      className="project-layout2-gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {project.gallery.map((image, index) => (
        <div key={`gallery-${index}`} className="gallery-item">
          <img 
            src={urlFor(image).width(400).height(400).fit("crop").url()} 
            alt={`Galerie ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
}
