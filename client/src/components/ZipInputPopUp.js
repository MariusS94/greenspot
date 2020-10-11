import React, { useState } from "react";
import InputField from "./InputField";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import HoursSelection from "./HoursSelection";

const ZipInputWindow = styled.div`
  position: fixed;
  z-index: 2;
  background: rgb(105, 105, 105, 0.7);
  height: 15rem;
  width: 80%;
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  border-radius: 2rem;
  margin-top: 7rem;
`;

const SubmitButton = styled.button`
  border: none;
  padding: 0.3rem 3rem;
  margin-top: 0.1rem;
  background: #3d846d;
  border: solid 1px white;
  border-radius: 1rem;
  color: #ffffff;
`;

const CloseingItem = styled.span`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(105, 105, 105, 0.5);
  backdrop-filter: blur(5px);
`;

export const ZipInputPopUp = (props) => {
  const [query, setQuery] = useState("");
  const [hours, setHours] = useState(7);
  const history = useHistory();

  const hoursSix = () => {
    setHours(6);
  };

  const hoursTwelve = () => {
    setHours(12);
  };
  const hoursTwentyfour = () => {
    setHours(24);
  };

  const handleClick = () => {
    if (query === localStorage.getItem("zip")) {
      props.handleClose();
    }
    if (query === "") {
      window.location.reload();
    }
    localStorage.setItem("hours", hours);
    localStorage.setItem("zip", query);
    history.push(`/energy/forecast/${query}`);
  };

  return (
    <PopUpContainer>
      <ZipInputWindow>
        <CloseingItem onClick={props.handleClose}>x</CloseingItem>
        <InputField
          value={query}
          onChange={(value) => setQuery(value)}
          placeholder="PLZ Eingabe"
        />

        <HoursSelection
          six={hoursSix}
          twelve={hoursTwelve}
          twentyfour={hoursTwentyfour}
        />

        <SubmitButton onClick={handleClick} disabled={query.length === !5}>
          Bestätigen
        </SubmitButton>
      </ZipInputWindow>
    </PopUpContainer>
  );
};

export default ZipInputPopUp;

ZipInputPopUp.propTypes = {
  handleClose: PropTypes.func,
  callBackFunc: PropTypes.func,
  onClick: PropTypes.func,
};
