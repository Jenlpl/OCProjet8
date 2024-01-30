import React from 'react'
import Logements from "/logements.json";

function Carousel({ logement }) {

  const pictures = logement.pictures;
  

  return (
    <div className='carousel'>
        {pictures.map((picture, index) => (
            <article className='' key={index}>
                <img src={picture} alt={`Slide ${index + 1}`} />
            </article>
        ))}
    </div>
  )
}

export default Carousel