import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const HoursButtonWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HoursButton = styled.button`
  background: transparent;
  padding: 0.2rem 1rem;
  border-style: solid;
  border-width: 0.5px;
  border-color: white;
  border-radius: 1rem;
  outline: none;
  margin: 0.5rem;
  color: white;

  &:focus {
    background: rgb(90 132 109);
  }
`;

const HoursSelection = ({ six, twelve, twentyfour }) => {
  return (
    <HoursButtonWrapper>
      <HoursButton onClick={six}> 6 Stunden</HoursButton>
      <HoursButton onClick={twelve}>12 Stunden</HoursButton>
      <HoursButton onClick={twentyfour}>24 Stunden</HoursButton>
    </HoursButtonWrapper>
  );
};

export default HoursSelection;

HoursSelection.propTypes = {
  six: PropTypes.func,
  twelve: PropTypes.func,
  twentyfour: PropTypes.func,
};
