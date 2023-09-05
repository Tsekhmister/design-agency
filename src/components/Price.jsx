import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="15" type="Basic" />
      <PriceCard price="25" type="Basic+" />
      <PriceCard price="40" type="Premium" />
    </Container>
  );
};

export default Price;
