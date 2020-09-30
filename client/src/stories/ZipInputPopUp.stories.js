import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ZipInputPopUp } from "../components/ZipInputPopUp.js";

export default {
  title: "ZipInput",
  component: ZipInputPopUp,
};

const Template = () => (
  <Router>
    <ZipInputPopUp />
  </Router>
);

export const ZipPopUp = Template.bind({});
