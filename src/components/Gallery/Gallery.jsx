import { Link } from "react-router-dom";
import Logements from "/logements.json";


export default function Gallery() {

  return (
    <section className="main-logements">
      <div className="gallery">
        {Logements.map((logement) => (
          <article className="cover" key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <h2>{logement.title}</h2>
              <img src={logement.cover} alt="" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
