import React from "react";
import { useState } from "react";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";

function Carousel({ logement }) {
  const pictures = logement.pictures;

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : pictures.length - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < pictures.length - 1 ? prevSlide + 1 : 0
    );
  };

  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <article
          className={index === currentSlide ? "visible" : "hidden"}
          key={index}
        >
          <img src={picture} alt={`Slide ${index + 1}`} />
        </article>
      ))}
      <button className="arrow arrow-left" onClick={goToPreviousSlide}>
        <img src={arrowLeft} alt="" />
      </button>
      <button className="arrow arrow-right" onClick={goToNextSlide}>
        <img src={arrowRight} alt="" />
      </button>
      <span>
        {currentSlide + 1}/{pictures.length}
      </span>
    </div>
  );
}

export default Carousel;
