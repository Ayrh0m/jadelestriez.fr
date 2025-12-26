import { useEffect, useState } from "react";
import { client, urlFor, type SanityImageSource } from "./sanityClient";
import Header from "./components/Header";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource;
  link: string;
}

function App() {
  /* const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const query = `*[_type == "project"]{
      _id,
      title,
      description,
      image,
      link
    }`;

    client
      .fetch(query)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []); */

  return (
    <main>
      {/* <h1>Mon Portfolio Sanity</h1>
      <div>
        {projects.map((p) => (
          <article key={p._id}>
            {p.image && (
              <img src={urlFor(p.image).width(400).url()} alt={p.title} />
            )}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            )}
          </article>
        ))}
      </div> */}
      <Header />
      <div>
        <h1>Étudiante en communication</h1>
        <p>
          Candy icing sugar plum marshmallow sweet candy canes marzipan muffin
          pastry. Cake apple pie tiramisu gummi bears tootsie roll macaroon
          pudding chocolate. Tootsie roll gingerbread jelly beans marshmallow
          gummies ice cream cotton candy biscuit. Jujubes tart sweet roll lemon
          drops topping cake muffin chees
        </p>
        <a href="/projets">Voir mes projets</a>
      </div>
    </main>
  );
}

export default App;
