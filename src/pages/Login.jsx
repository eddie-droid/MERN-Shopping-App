import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)),
    url("https://wallup.net/wp-content/uploads/2019/09/08/523174-bangtan-boys-bulletproof-boy-scouts-bts-kpop-hip-hop-r-b-dance.jpg")
    no-repeat center; 
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;


`


const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color:white;
${mobile({width:"80%"})}

`
    

const Form = styled.form`
display: flex;
flex-direction:column;

`
    

const Title = styled.h1`
font-weight: 300;
font-size: 24px;
`
    

const Input = styled.input`
flex: 1;
min-width:40%;
margin:10px 0px;
padding: 10px;
`
    
const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Link = styled.a`
font-size: 12px;
margin:5px 0px;
text-decoration:underline;
`
    

const Button = styled.button`
padding: 15px 20px;
border:none;
width:40%;
background-color:teal;
color:white;
margin-bottom: 10px;
cursor: pointer;
&:disabled{
    color:green;
    cursor: not-allowed;
}
`
    
const Error = styled.span`
    color:red;
`


const Login = () => {
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user);

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username, password});
    }
  return (
    <Container>
    <Wrapper>
        <Title>LOGIN</Title>
        <Form>
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
           
            <Button type="submit" onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something went wrong</Error>}
            <LinkWrapper>
                <Link>Forgot Password?</Link>
                <Link>Create a New Account</Link>
            </LinkWrapper>
            
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login