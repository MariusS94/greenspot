import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { LogoHeader } from "../components/LogoHeader.js";

export default {
  title: "LogoHeader",
  component: LogoHeader,
};

const Template = () => (
  <Router>
    <LogoHeader />
  </Router>
);

export const BulpLogoHeader = Template.bind({});
