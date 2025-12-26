import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanityClient";
import type { Project } from "../types";
import "../styles/Home.css";

export default function Home() {
  const [latestProjects, setLatestProjects] = useState<Project[]>([]);

  useEffect(() => {
    const query = `*[_type == "projet"] | order(_createdAt desc)[0...3] {
      _id,
      miniature,
      titre,
      "slug": slug.current
    }`;

    client
      .fetch(query)
      .then((data) => setLatestProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="home-container">
      <div className="latest-projects">
        {latestProjects.map((project) => (
          <div key={project._id} className="latest-project-card">
            {project.miniature && (
              <Link to={`/projets/${project.slug}`}>
                <img
                  src={urlFor(project.miniature).width(400).height(300).url()}
                  alt={project.titre || ""}
                  className="latest-project-image"
                />
              </Link>
            )}
          </div>
        ))}
      </div>
      <section className="home-section">
        <h1 className="home-title">Étudiante en communication</h1>
        <p className="home-description">
          Candy icing sugar plum marshmallow sweet candy canes marzipan muffin
          pastry. Cake apple pie tiramisu gummi bears tootsie roll macaroon
          pudding chocolate. Tootsie roll gingerbread jelly beans marshmallow
          gummies ice cream cotton candy biscuit. Jujubes tart sweet roll lemon
          drops topping cake muffin chees
        </p>
        <div className="home-link-container">
          <Link to="/projets" className="home-link">
            Voir mes projets
          </Link>
        </div>
      </section>
    </div>
  );
}
