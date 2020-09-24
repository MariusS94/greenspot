import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChartForecast } from "../components/ChartForecast.js";

export default {
  title: "Carousel",
  component: ChartForecast,
};

const Template = () => (
  <Router>
    <ChartForecast />
  </Router>
);

export const CarouselChart = Template.bind({});
