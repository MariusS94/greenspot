import React from "react";
import ContentContainer from "./ContentContainer";
import styled from "@emotion/styled";

const InfoText = styled.p`
  padding: 0 2rem;
`;
const Headline = styled.h2`
  margin: 0.1rem;
`;
export const ForecastInfo = () => {
  return (
    <ContentContainer>
      <Headline>Information</Headline>
      <InfoText>
        Der Anteil von Strom aus regenerativen Quellen in unserem Stromnetz
        schwangt extrem. Wäre es also nicht super zu wissen wann der Ökostromanteil im heimischen
        Stromnetz besonders hoch ist, damit man seine energieintensiven
        Tätigkeiten am besten für einen solchen Zeitraum einplant? Genau dabei
        möchte GreenSpot behilflich sein. Über die Eingabe seiner Postleitzahl
        bekommt man in einem Diagramm aufgeschlüsselt, wann der Ökstromanteil im
        heimischen Netz bei wie viel Prozent liegt. Dabei kann man selbst
        bestimmen ob man eine Prognose für 6, 12 oder 24 Stunden haben möchte.
        Somit kann jeder ganz persönlich die Energiewende unterstützen und
        seinen Beitrag zu einer gesunden Umwelt leisten.
      </InfoText>
    </ContentContainer>
  );
};

export default ForecastInfo;
