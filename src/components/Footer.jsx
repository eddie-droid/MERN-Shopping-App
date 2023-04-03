import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    flex: 1;
   padding-bottom:10px;
`
const List = styled.ul`
    flex: 1;
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
   width:50%;
   margin-bottom: 10px;
    
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#f9f9f9"})}
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
`
const Payment = styled.img`
    width:50%;
`
const Footer = () => {
  return (
   <Container>
    <Left>
        <Logo>MDRN.</Logo>
        <Desc>There are many variations of passages of Lorem Ipsum available, but
             the majority have suffered alteration in some form, by injected 
             humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3b5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="e4405f">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55acee">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="e60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Privacy</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Privacy</ListItem>
        </List>
    </Center>
    <Right>
    <Title>Useful Links</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>1 N State St, Chicago IL, 60602</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>+1 773 939 8676</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@mdrn.com</ContactItem>
            <Payment src="https://www.watchstation.com/on/demandware.static/-/Library-Sites-WatchStationSharedLibrary/default/dwd759a869/customer_care/payment/Mobile_Card_View@2x.png"/>
         
    </Right>
   </Container>
  )
}

export default Footer