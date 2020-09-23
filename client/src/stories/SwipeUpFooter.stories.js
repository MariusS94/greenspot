import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SwipeUpFooter } from "../components/SwipeUpFooter";

export default {
  title: "SwipeFooter",
  component: SwipeUpFooter,
};

const Template = () => (
  <Router>
    <SwipeUpFooter />
  </Router>
);

export const HomeSwipeUp = Template.bind({});
