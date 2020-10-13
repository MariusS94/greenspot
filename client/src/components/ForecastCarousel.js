import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ForecastChart from "./ForecastChart";
import ForecastInfo from "./ForecastInfo";
import { useParams } from "react-router-dom";
import ZipInputPopUp from "./ZipInputPopUp";

const CarouselContainer = styled(Carousel)`
  display: flex;
  li.slide {
    background: transparent;
  }
  ul.control-dots {
    position: fixed;
    bottom: 5rem;
  }
`;

const CarouselWrapper = styled.div`
  /*   display: flex;
  justify-content: center; */
  flex-grow: 1;
`;

export const ForecastCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { zip } = useParams();

  useEffect(() => {
    setIsOpen(false);
  }, [zip]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CarouselWrapper>
      {isOpen && <ZipInputPopUp handleClose={togglePopup} />}
      <CarouselContainer
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
      >
        <ForecastChart zipOnClick={togglePopup} />
        <ForecastInfo />
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default ForecastCarousel;
