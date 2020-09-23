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
  return (
    <SwipeFooter>
      <Link to="/forecast">
        <img src={SwipeArrowSrc} alt="Arrow up icon " />
      </Link>
    </SwipeFooter>
  );
};

export default SwipeUpFooter;
