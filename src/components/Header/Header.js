import React from 'react'
import styled from 'styled-components'
import pic from './image/app-logo.svg'
import Buttoncomp from '../buttoncomp/button'

const Header = () => {
  return (
    <Container>
     <Logo src ={pic}/>
     <Navhold>
         <Nav>Overview</Nav>
         <Nav>Storefront</Nav>
         <Nav>Checkout Demo</Nav>
         <Nav>Developers</Nav>
         
     </Navhold>
     <Navnxt>
     <Nav>sign in</Nav>
       <Buttoncomp/>
     </Navnxt>
    </Container>
  )
}

export default Header

const Container = styled.div`
width:100%;
height:60px;
display: flex;
justify-content:space-between;


`
const Logo = styled.img`
height:40px;
width:150px;
object-fit:cover;
margin-left:50px;
margin-top:12px;
`
const Navhold= styled.nav`
display: flex;
justify-content:space-between;
align-items: center;
margin-left:200px;
width: 420px;


`
const Nav = styled.nav`
color:#03435E

`
const Navnxt = styled.nav`
display:flex;
justify-content:space-between;
width:250px;
align-items: center;
margin-right:50px;

`
