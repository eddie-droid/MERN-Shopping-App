import { mobile } from '../responsive'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position: relative;
`
const Image = styled.img`
   width:100%;
   height:100%;
   object-fit:cover;
   ${mobile({height:"20vh"})}
`
const Info = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
    color:White;
    margin-bottom: 20px;
    text-shadow: 1px 1px 1px gray;
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:black;
    font-weight: 600;
    cursor: pointer;
`
const CategoryItem = ({item}) => {
  return (
      <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem