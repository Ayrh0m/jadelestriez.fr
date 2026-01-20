import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, type Variants } from "motion/react";
import { client } from "../sanityClient";
import SEO from "../components/SEO";
import { usePageExitAnimation } from "../hooks/usePageExitAnimation";
import type { Project } from "../types";
import ProjectLayout1 from "../components/pages/project/ProjectLayout1/index";
import "../styles/pages/ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { isExiting, handleExitComplete } = usePageExitAnimation();

  useEffect(() => {
    if (!slug) {
      return;
    }

    const query = `*[_type == "projet" && slug.current == $slug][0]{
      _id,
      layout,
      titre,
      subtitle,
      short_description,
      long_description,
      mainImage,
      categorie->{
        nom,
        "slug": slug.current
      }
    }`;

    client
      .fetch(query, { slug })
      .then((data) => {
        setProjectData(data);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch du projet:", err);
        setError("Erreur lors du chargement du projet");
      });
  }, [slug]);

  if (!slug || error || !projectData) {
    return null;
  }

  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Determine layout - default to layout_1 if not specified or unknown
  // In the future, this can switch on projectData.layout
  return (
    <motion.div
      initial="hidden"
      animate={isExiting ? "exit" : "visible"}
      variants={pageVariants}
      onAnimationComplete={handleExitComplete}
    >
      <SEO
        title={projectData.titre || "Projet"}
        description={projectData.short_description || "Détails du projet"}
      />
      <ProjectLayout1 project={projectData} />
    </motion.div>
  );
}
