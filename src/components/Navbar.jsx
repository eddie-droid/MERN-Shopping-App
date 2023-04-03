import { Badge } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
const Container = styled.div`
  height:60px;
  ${mobile({height:"50px"})}

`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
  border: .5px solid lightgray;
  display:flex;
  align-items:center;
  padding: 5px;
  margin-left: 25px;
`
const Input = styled.input`
border:none;
outline:none;
${mobile({width:"100%"})}
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight: bolder;
${mobile({fontSize:"24px"})}
`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
${mobile({justifyContent:"center", flex:"2"})}
`
const MenuItem = styled.div`
  margin-left: 25px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <Search style={{color:grey, fontSize: 16}}></Search>
          </SearchContainer>
        </Left>
        <Link style={{ textDecoration: 'none', color:"black"}} to="/">
        <Center style={{ textDecoration: 'none'}}><Logo style={{ textDecoration: 'none'}}>MDRN.</Logo></Center>
        </Link>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar