import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { EnergyInfo } from "../components/EnergyInfo.js";

export default {
  title: "Carousel",
  component: EnergyInfo,
};

const Template = () => (
  <Router>
    <EnergyInfo />
  </Router>
);

export const CarouselInfo = Template.bind({});
