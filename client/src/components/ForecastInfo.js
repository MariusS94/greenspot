import React from "react";
import ContentContainer from "./ContentContainer";
import styled from "@emotion/styled";

const InfoText = styled.p`
  padding: 0 2rem;
`;

export const ForecastInfo = () => {
  return (
    <ContentContainer>
      <h1>Ökostrom</h1>
      <InfoTextContainer>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </InfoTextContainer>
    </ContentContainer>
  );
};

export default ForecastInfo;
