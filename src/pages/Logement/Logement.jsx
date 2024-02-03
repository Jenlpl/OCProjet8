import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Logements from "/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  const { id } = useParams();
  const currentLogement = Logements.find((logement) => logement.id === id);

if (!currentLogement) {
  return <Navigate to="/error" />;
}

  return (
    <main>
      <Carousel logement={currentLogement} />
      <section className="wrapper-logement">
        <div className="title-host">
          <div className="title">
            <h2>{currentLogement.title}</h2>
            <p>{currentLogement.location}</p>
            <div className="tags">
              {currentLogement.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host">
              <p>{currentLogement.host.name}</p>
              <img src={currentLogement.host.picture} alt="" />
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={
                    index < currentLogement.rating ? "filled" : "empty"
                  }
                >
                  <FontAwesomeIcon icon={faStar} />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse-logement">
          <Collapse title="Description" content={currentLogement.description} />
          <Collapse
            title="Équipements"
            content={currentLogement.equipments.map((equipment, index) => (
              <React.Fragment key={index}>
                {equipment}
                <br />
              </React.Fragment>
            ))}
          />
        </div>
      </section>
    </main>
  );
}

export default Logement;
