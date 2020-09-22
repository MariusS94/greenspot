import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../components/Footer.js";

export default {
  title: "Footer",
  component: Footer,
};

const Template = () => (
  <Router>
    <Footer />
  </Router>
);

export const EnergyFooter = Template.bind({});
