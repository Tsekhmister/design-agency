import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  background: url("https://www.pcclean.io/wp-content/uploads/2020/4/IbaeMr.jpg");
  height: 90%;
  opacity: 0.9;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
   flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  
`;

const Form = styled.form`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    margin-top: 15px;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #ffcc5c;
  text-shadow: 2px 2px 3px #c83349;

`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
  
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  border: 2px solid #034f84;
  padding: 10px 15px;
  letter-spacing: 2px;
  margin-top: 20px;
  background-color: #034f84;
  color: white;
  font-weight: bold;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  transition: all 0.4s ease;
  &:hover {
    background-color: white;
    border: 2px solid #c83349;
    cursor: pointer;
    border-radius: 5px;
    color: #c83349;
    box-shadow: rgba(255, 134, 0, 0.2) 0px 60px 40px -7px;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 16px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 24px;
  color: white;
  margin-right: 15px;
  text-shadow: 2px 2px 3px #c83349;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Write Us</Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>239 Greene St, New York, NY 10003, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 (212) 921-1984</Text>
            <Text>+1 (212) 921-1984</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@agency.com</Text>
            <Text>sales@agency.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
