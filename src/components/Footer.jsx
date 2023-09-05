import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #bccad6;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const Right = styled.div`
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
      </Left>
      <Right>
        <Copyright>Tse Agency ©</Copyright>
      </Right>
    </Container>
  );
};

export default Footer;
