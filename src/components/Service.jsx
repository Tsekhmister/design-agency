import React, { useState } from "react";
import styled from "styled-components";
import ImagePhoto from "../img/how2.png";
import MicroCard from "./MicroCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
 
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 100%;
  margin: 50px 0px 0px 0px;
`;

const Video = styled.iframe`
  display: ${(props) => !props.open && "none"};
  /* height: 320px;
  width: 640px; */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 50vh;
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-size: 46px;
  @media only screen and (max-width: 480px) {
    font-size: 36px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #656;
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
    font-size: 14px;
    text-align: justify;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 200px;
  border: 1px solid #8ea3b4;
  padding: 12px 25px;
  letter-spacing: 1px;
  margin-top: 50px;
  background-color: #8ea3b4;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #3f00ff;
    border: 1px solid #3f00ff;
    cursor: pointer;
    border-radius: 5px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100;
  position: absolute;
  top: 30vh;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
`

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image src={ImagePhoto} open={open} />
        <Video
          open={open}
          src="https://www.youtube.com/embed/53d5vRO8OoM?autoplay=1&loop=1&"
          frameborder="0"
          allowfullscreen
          height='320'
          width='640'
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>A couple of clicks to start</Title>
          <Description>
            We provide design services for start-ups of small companies and tech
            giants. Our team uses a huge amount of modern resources, working in
            constant contact with partners. Be sure that for us each client is
            an individual and deserves the highest quality of work on our part,
            taking into account all the provisions on your part.
          </Description>
          <CardContainer>
            <MicroCard />
            <MicroCard />
            <MicroCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works{" "}
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            src="https://www.youtube.com/embed/53d5vRO8OoM?autoplay=1&loop=1&"
            frameborder="0"
            allowfullscreen
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
