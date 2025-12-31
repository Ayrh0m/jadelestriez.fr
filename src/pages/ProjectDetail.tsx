import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanityClient";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [projectData, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [layout, setLayout] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("Slug manquant");
      setLoading(false);
      return;
    }

    const query = `*[_type == "projet" && slug.current == $slug][0]`;

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

  useEffect(() => {
    if (projectData) {
      const projectLayout = projectData.layout || null;
      setLayout(projectLayout);
      console.log("Données du projet:", projectData);
    }
  }, [projectData]);

  if (loading) {
    return (
      <>
        <SEO title="Chargement..." description="Chargement du projet" />
        <div style={{ padding: "2rem" }}>
          <p>Chargement...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !projectData) {
    return (
      <>
        <SEO title="Erreur" description="Projet non trouvé" />
        <div style={{ padding: "2rem" }}>
          <p>Erreur : {error || "Projet non trouvé"}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={projectData.titre || "Projet"}
        description={projectData.description_principale || "Détails du projet"}
      />
      <div style={{ padding: "2rem" }}>
        <h1>Layout du projet</h1>
        <p>{layout || "Aucun layout défini"}</p>
      </div>
      <Footer />
    </>
  );
}

