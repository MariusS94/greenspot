import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import styled from "@emotion/styled";
import ForecastChart from "./ForecastChart";
import ForecastInfo from "./ForecastInfo";

const CarouselContainer = styled(Carousel)`
  display: flex;
  flex-grow: 1;
  li.slide {
    background: transparent;
  }
  ul.control-dots {
    position: fixed;
    bottom: 5rem;
  }
`;

export const ForecastCarousel = () => {
  return (
    <CarouselContainer
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
    >
      <ForecastChart />
      <ForecastInfo />
    </CarouselContainer>
  );
};

export default ForecastCarousel;
