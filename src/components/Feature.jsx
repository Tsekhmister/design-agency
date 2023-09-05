import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px){
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px){
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px){
    width: 100%;
  }
`;
const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px){
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Description = styled.p`
  font-size: 20px;
  color: #656;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  width: 180px;
  border: 1px solid #8ea3b4;
  padding: 15px 25px;
  letter-spacing: 2px;
  margin-top: 20px;
  background-color: #8ea3b4;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.4s ease;
  &:hover {
    background-color: #3f00ff;
    border: 1px solid #3f00ff;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>excellent</b> design
          <br />
          <b>excellent</b> business
        </Title>
        <SubTitle>
          We believe that excellent design leads to excellent business results.
        </SubTitle>
        <Description>
          Our experienced team helps to create new, incredibly successful models
          for your business. Moreover, we have repeatedly increased the
          effectiveness of existing business trends by creating creative and
          modern concepts.
        </Description>
        <Description>
          We guarantee a positive result in the shortest possible time in
          projects of any complexity.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
