import React, { useState, useEffect } from "react";
import ContentContainer from "./ContentContainer";
import ZipInputPopUp from "./ZipInputPopUp";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Chart from "./Chart";

const ZipButton = styled.button`
  border: none;
  padding: 0.2rem;
  margin-top: 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  color: #ffffff;
`;

export const ForecastChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const zip = useParams();

  useEffect(() => {
    setIsOpen(false);
  }, [zip]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContentContainer>
      <ZipButton onClick={togglePopup}>PLZ Eingabe</ZipButton>
      {isOpen && <ZipInputPopUp handleClose={togglePopup} />}
      <Chart />
    </ContentContainer>
  );
};

export default ForecastChart;
