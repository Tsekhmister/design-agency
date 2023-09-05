import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #c83349;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px){
    display: none;
  }
  `
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #bccad6;
  transition: all 0.4s ease;
  &:hover {
  display: inline-block;
  position: relative;
  color: #3F00FF;
  cursor: pointer;
  
  }
  &:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #c83349;
  transform-origin: bottom right;
  transition: transform 0.4s ease;
}

&:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 20px;
  background-color: #c83349;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease;
  &:hover {
    background-color: #3F00FF;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 5px;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>YourAgency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
