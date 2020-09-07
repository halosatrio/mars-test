import React, { useState } from "react";

import Button from "../Button";

import "./carousel.scss";

const Carousel = () => {
  const slidesData = [
    {
      id: 1,
      header: "Bane",
      body:
        "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    },
    {
      id: 2,
      header: "Ra's Al Ghul",
      body:
        "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    },
    {
      id: 3,
      header: "Joker",
      body:
        "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    },
    {
      id: 4,
      header: "Bruce Wayne",
      body:
        "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevSlide = () => {
    let index = activeSlide;
    let slidesLength = slidesData.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    setActiveSlide(index);
  };

  const goToNextSlide = () => {
    let index = activeSlide;
    let slidesLength = slidesData.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    setActiveSlide(index);
  };

  return (
    <div className="carousel mb-5">
      <Button
        type="button"
        className="carousel__arrow carousel__arrow--left"
        onClick={() => goToPrevSlide()}
      >
        <span className="fa fa-angle-left" />
      </Button>

      <ul className="carousel__slides">
        {slidesData.map((slide, index) => (
          <li
            key={index}
            className={
              index === activeSlide
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
          >
            <p>
              <strong className="carousel-slide__author">{slide.header}</strong>
            </p>
            <p className="carousel-slide__content">{slide.body}</p>
          </li>
        ))}
      </ul>

      <Button
        type="button"
        className="carousel__arrow carousel__arrow--right"
        onClick={() => goToNextSlide()}
      >
        <span className="fa fa-angle-right" />
      </Button>
      <ul className="carousel__indicators">
        {slidesData.map((slide, index) => (
          <li key={index}>
            <Button
              type="button"
              className={
                index === activeSlide
                  ? "carousel__indicator carousel__indicator--active"
                  : "carousel__indicator"
              }
              onClick={() => goToSlide(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
