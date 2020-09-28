import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ForecastChart } from "../components/ForecastChart.js";

export default {
  title: "Carousel",
  component: ForecastChart,
};

const Template = () => (
  <Router>
    <ForecastChart />
  </Router>
);

export const CarouselChart = Template.bind({});
