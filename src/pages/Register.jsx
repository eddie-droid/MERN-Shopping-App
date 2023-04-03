import styled from "styled-components"

import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)),
    url("https://cdn.shopify.com/s/files/1/0101/0653/5993/collections/plp_coily_desktop2_2800x_6d158b84-73e3-4ffb-922d-080347783313_2800x.webp?v=1674837935")
    no-repeat center; 
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;


`


const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color:white;
${mobile({width:"80%"})}

`
    

const Form = styled.h1`
display: flex;
flex-wrap:wrap;
`
    

const Title = styled.div`
font-weight: 300;
font-size: 24px;
`
    

const Input = styled.input`
flex: 1;
min-width:40%;
margin:20px 10px 0px 0px;
padding: 10px;
`
    

const Agreement = styled.span`
font-size: 12px;
margin:20px 0px;
`
    

const Button = styled.button`
padding: 15px 20px;
border:none;
width:40%;
background-color:teal;
color:white;
`
    




const Register = () => {
  return (
    <Container>
      
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Phone Number"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                By creating an account, I consent to the processing of my personal data with the <b> PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register