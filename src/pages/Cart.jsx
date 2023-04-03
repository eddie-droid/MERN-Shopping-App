import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type==="filled" && "none"};
    background-color: ${(props)=>props.type==="filled"?  "black" : "transparent"};
    color: ${(props)=>props.type==="filled" && "white"};
`
const TopTexts = styled.div`
    text-decoration:underline;
    cursor: pointer;
    ${mobile({display:"none"})}
    
`
const TopText = styled.span`
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    display: flex;
    justify-content:space-between;
    flex-direction:column;
    flex:3;
   
    ${mobile({flexDirection:"column", maxHeight:"none"})}
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    max-height:200px;
`
const Details = styled.div`
    display: flex;
    flex-direction:column;
    padding: 20px;
    justify-content:space-around;
`
const ProductName = styled.span`
    
`
const ProductID = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color:${props=>props.color};
    border-radius:50%;
`
const ProductSize = styled.span`
    
`
const PriceDetails = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    max-height:200px;
    
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
   ${mobile({margin:"5px 15px"})}
   
`
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight:200;
   ${mobile({marginBottom:"20px"})}
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height:100%;
    //max-height:380px;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content:space-between;
    
`
const SummaryItemText = styled.div`
    font-weight: ${props=>props.type === "total" && "600"};
    font-size: ${props=>props.type === "total" && "24px"};
    
`
const SummaryItemPrice = styled.div`
    
`
const Button = styled.button`
    padding: 10px;
    width:100%;
    background-color:black;
    color:white;
    font-weight: 600;
`

const Cart = () => {

    const cart = useSelector(state=>state.cart)
    console.log(cart);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
            <TopButton type="">CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product=>(
                        
                        <ProductDetail>
                        <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b>{product.title}</ProductName>
                            <ProductID><b>ID:</b>{product._id}</ProductID>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size:</b>{product.size}</ProductSize>
                        </Details>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>${product.price * product.quantity}</ProductPrice>
                    </PriceDetails>
                    </ProductDetail>
                        ))}
                </Info>
                <Summary>
                    <SummaryTitle>CHECKOUT SUMMARY</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>${cart.total}.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Tax</SummaryItemText>
                        <SummaryItemPrice>$2.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SummaryItemPrice>${cart.total}.00</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart