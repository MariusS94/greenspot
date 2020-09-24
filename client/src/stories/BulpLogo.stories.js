import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BulpLogo from "../components/BulpLogo.js";

export default {
  title: "Bulp Logo",
  component: BulpLogo,
};

const Template = () => (
  <Router>
    <BulpLogo />
  </Router>
);

export const BulpLogoHome = Template.bind({});
