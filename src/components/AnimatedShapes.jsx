import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #3f00ff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 15s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff69b4;
  position: absolute;
  bottom: 200px;
  left: -100px;
  z-index: -1;

  animation: circle 10s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Rectangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 55px 55px 55px;
  border-color: transparent transparent #03c03c transparent;

  opacity: 0.6;
  position: absolute;
  top: 300px;
  left: 0;
  z-index: -1;

  animation: rectangle 12s cubic-bezier(0.1, 0.7, 1, 0.1) alternate infinite;
  @keyframes rectangle {
    to {
      transform: translate(100vw, 50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  );
};

export default AnimatedShapes;
