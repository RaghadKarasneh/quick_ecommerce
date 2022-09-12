import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Person } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import { mobile } from "../responsive";
import Register from '../pages/Register';
import Login from '../pages/Login';

const Container = styled.div`
height: 70px;
background-color: teal;
color: white;
font-size: 14px;
font-weight: 500;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color:#fff;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const x=sessionStorage.getItem("user_info");
const logout=()=>{
  sessionStorage.removeItem('user_info');
}
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Center>
          <Logo>
            <Link to="/">QUICK E-COMMERCE</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            {/*  */}
                <Link to="/Profile" style={{ display:x?"block":"none"}}><Person /></Link>
                <button type="submit" style={{ display:x?"block":"none"}} onClick={logout}>Logout</button>
                <Link to ='/Register' style={{ display:x?"none":"block"}}>SIGN UP</Link>
                <Link to ='/Login' style={{ display:x?"none":"block"}}> SIGN IN</Link>

           
            {/*  */}
          </MenuItem>

          {/* <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
