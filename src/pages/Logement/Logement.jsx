import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Logements from "/logements.json";
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  const currentLogement = Logements.find(logement => logement.id === id);
  


  return (
    <main>
        <Carousel logement={currentLogement} />
        </main>
  )
}

export default Logement