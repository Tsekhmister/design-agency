import React from "react";
import styled from "styled-components";

const Container = styled.div`
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
background-color: white;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px) {
    padding: 10px;
    margin-top: 6px;
    border: 1px solid black;
  }
`;
const PriceContainer = styled.div`
display: flex;
align-items: center;
`;
const Price = styled.span`
font-weight: bold;
font-size: 54px;
@media only screen and (max-width: 480px) {
  font-size: 30px;
  }
`;
const Type = styled.button`
padding: 10px;
margin: 15px 0px;
border: 2px solid #3f00ff;
color: #3f00ff;
background-color: white;
border-radius: 15px;
@media only screen and (max-width: 480px) {
  display: none;
  }
`;
const List = styled.ul`
list-style: none;

`;
const ListItem = styled.li`
margin: 30px 0px;
@media only screen and (max-width: 480px) {
  margin: 10px 0px;
  font-size: 12px;
  }
`;

const Button = styled.button`
  border: 1px solid #8ea3b4;
  padding: 15px 25px;
  letter-spacing: 2px;
  margin-top: 20px;
  background-color: #8ea3b4;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.4s ease;
  &:hover {
    background-color: #3f00ff;
    border: 1px solid #3f00ff;
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px 10px;
    margin-top: 5px;
  }
`;
const PriceCard = ({ price, type}) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
        <Type>{type} Plan</Type>
        <List>
          <ListItem> 400 Hand-Crafted Templates</ListItem>
          <ListItem> 150+ PreBuilt Amazing Websites</ListItem>
          <ListItem> Exclusive support</ListItem>
          <ListItem> Premium plugins</ListItem>
        </List>
        <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
