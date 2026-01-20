import { motion } from "motion/react";
import { urlFor } from "../../../../sanityClient";
import type { Project } from "../../../../types";

interface MainImageProps {
  project: Project;
}

export default function MainImage({ project }: MainImageProps) {
  if (!project.mainImage) return null;

  return (
    <motion.div
      className="project-layout2-main-image"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={urlFor(project.mainImage)
          .width(600)
          .height(1200)
          .format("webp")
          .quality(90)
          .url()}
        alt={project.titre}
        loading="lazy"
      />
    </motion.div>
  );
}
