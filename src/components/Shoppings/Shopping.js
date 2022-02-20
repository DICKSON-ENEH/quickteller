import React from 'react'
import styled from 'styled-components'
import pic15 from  '../Header/image/selling-icon.svg' 
import pic16 from '../Header/image/fee-icon.svg'
import pic17 from '../Header/image/icon-cards.svg'
const Shopping = () => {
  return (
   <Shoop>
    <Onlinewrap>
    <Cart src={pic15}/>
    <Start> start selling online</Start>
    <Easily>Easily sell omnline and ship orders to customers, offer in shop pickup, or local delivery-no matter what type of business you have</Easily>
    </Onlinewrap>
    <Onlinewrap>
    <Cart src={pic16}/>
    <Start> start selling online</Start>
    <Easily>we give you the flexibility of handling your own packages delivery as well as provide the option to integrate with our dedicated logistics partners.</Easily>
    </Onlinewrap>
    <Onlinewrap>
    <Cart src={pic17}/>
    <Start> Built-in-payment solutions</Start>
    <Easily>As with all of our tools, payments are central to trhe exprience. Even with online payments. you benefit from our lower rates and fast ddeposits.</Easily>
    </Onlinewrap>
   </Shoop>
  )
}

export default Shopping

const Shoop = styled.div`
 display: flex;
 justify-content:space-around;
 background:rgb(234,247,253);
 padding:10px
`
const Onlinewrap = styled.div`
width:300px;

`
const Cart = styled.img`
margin-bottom:20px
`
const Start = styled.div`
font-weight: bold;
color:rgb(3,59,110);
font-size:20px;
margin-bottom:20px
`
const Easily = styled.div`

`