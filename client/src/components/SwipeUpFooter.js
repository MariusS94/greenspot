import React from "react";
import SwipeArrowSrc from "../assets/swipeArrow.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const SwipeFooter = styled.footer`
  height: 2rem;
  width: 100%;
  background: rgba(134, 134, 134, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwipeUpFooter = () => {
  const zip = localStorage.getItem("zip") || 53842;
  return (
    <SwipeFooter>
      <Link to={`/energy/forecast/${zip}`}>
        <img src={SwipeArrowSrc} alt="Arrow up icon " />
      </Link>
    </SwipeFooter>
  );
};

export default SwipeUpFooter;
