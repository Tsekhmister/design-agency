import React from "react";
import styled from "styled-components";
import Woman from '../img/w1.png';
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px){
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px){
    width: 100%;
    font-size: 50px;
  }
`;
const Description = styled.div`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px){
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media only screen and (max-width: 480px){
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  border: 2px solid #8ea3b4;
  padding: 10px 20px;
  background-color: #8ea3b4;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease;
  letter-spacing: 2px;
  font-size: 16px;
  &:hover {
    background-color: #3F00FF;
    color: white;
    border: 2px solid #3F00FF;
    cursor: pointer;
    border-radius: 5px;
  }
  @media only screen and (max-width: 480px){
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #c83349;
  font-weight: bold;
  @media only screen and (max-width: 480px){
    color: black;
  }
`;
const ContactText = styled.span`
  color: #a2b3c2;
  margin-bottom: 5px;
  @media only screen and (max-width: 480px){
    color: black;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px){
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;

`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Creativity is difficult, but not impossible</Title>
        <Description>
          In developing a design to solve your business problems, the creativity
          of our team allows us to achieve excellent results in the best
          traditions of modern trends.
        </Description>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <ContactText>For any questions or concerns</ContactText>
            <Phone>Call Us + 1 (302) 614- 0508</Phone>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman}/>
      </Right>
     <AnimatedShapes />
    </Container>
  );
};

export default Intro;
