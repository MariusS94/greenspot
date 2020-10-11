import React from "react";
import SearchIconSrc from "../assets/searchIcon.svg";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ZipButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0.2rem 1rem;
  padding-right: 0.5rem;
  border-style: solid;
  border-width: 0.5px;
  border-color: white;
  border-radius: 1rem;
  outline: none;
  margin: 0.6rem;
  margin-bottom: 1.5rem;
`;

const CityName = styled.div`
  margin-right: 1rem;
  color: white;
  font-size: 1rem;
`;

const ImageContainer = styled.div`
  height: 1rem;
  width: 1rem;
`;

const ZipButton = ({ children, onClick }) => {
  return (
    <ZipButtonContainer onClick={onClick}>
      <CityName>{children}</CityName>
      <ImageContainer>
        <img src={SearchIconSrc} alt="search icon" />
      </ImageContainer>
    </ZipButtonContainer>
  );
};

export default ZipButton;

ZipButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
