import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { client, urlFor } from "../sanityClient";
import SEO from "../components/SEO";
import type { Project } from "../types";
import "../styles/ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(!!slug);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const query = `*[_type == "projet" && slug.current == $slug][0]{
      _id,
      layout,
      titre,
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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch du projet:", err);
        setError("Erreur lors du chargement du projet");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <SEO title="Chargement..." description="Chargement du projet" />
        <div className="project-detail-loading">
          <p>Chargement...</p>
        </div>
      </>
    );
  }

  if (!slug || error || !projectData) {
    return (
      <>
        <SEO title="Erreur" description="Projet non trouvé" />
        <div className="project-detail-error">
          <p>Erreur : {error || "Projet non trouvé"}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={projectData.titre || "Projet"}
        description={projectData.short_description || "Détails du projet"}
      />
      <div className="project-detail">
        <Link to={`/projets`} className="project-back-link">
          <FaChevronLeft />
        </Link>

        {projectData.categorie && (
          <div className="project-category">
            {projectData.categorie.nom.toUpperCase()}
          </div>
        )}

        <header className="project-editorial-header">
          <div className="project-header-left">
            <h1 className="project-title">{projectData.titre}</h1>
            {projectData.short_description && (
              <h2 className="project-subtitle">{projectData.short_description}</h2>
            )}
          </div>
          <div className="project-header-texts">
            {projectData.long_description && (
              <div className="project-description-text">
                {projectData.long_description}
              </div>
            )}
          </div>
        </header>

        <div className="project-detail-content">
          <div className="project-main-image-section">
            {projectData.mainImage && (
              <img
                src={urlFor(projectData.mainImage).width(1200).url()}
                alt={projectData.titre || ""}
                className="project-main-image"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
