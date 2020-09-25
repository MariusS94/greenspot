import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ForecastInfo } from "../components/ForecastInfo.js";

export default {
  title: "Carousel",
  component: ForecastInfo,
};

const Template = () => (
  <Router>
    <ForecastInfo />
  </Router>
);

export const CarouselInfo = Template.bind({});
