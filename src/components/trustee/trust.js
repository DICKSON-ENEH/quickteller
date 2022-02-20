import React from 'react'
import styled from 'styled-components'
import pic4 from '../Header/image/oando.png'
import pic5 from '../Header/image/konga.png'
import pic6 from '../Header/image/multi-choice.png'
import pic7 from '../Header/image/betking.png'
import pic8 from '../Header/image/dominos.png'

const Trust = () => {
  return (
    <Trustee>
      <Tru>TRUSTED BY BRANDS YOU TRUST</Tru>
      <Brandwrap>
      <Brand src ={pic6}/>
      <Brand src ={pic4}/>
      <Brand src ={pic8}/>
      <Brand src ={pic5}/>
      <Brand src ={pic7}/>
      </Brandwrap>
    </Trustee>
  )
}

export default Trust

const Trustee = styled.div`
height:200px;
display: flex;
jusify-content: center;
align-items: center;
flex-direction:column;

margin-top:90px

`
const Tru = styled.div`
display: flex;
jusify-content: center;

align-items: center;
font-size:1.8rem;
font-weight: bold;
`
const Brand = styled.img`
width:100px;
height:100px;
margin:50px;
object-fit:contain
`
const Brandwrap = styled.div`
display: flex;
`