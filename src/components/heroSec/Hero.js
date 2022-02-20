import React from 'react'
import styled from 'styled-components'
import Buttoncom from '../buttoncomp/buttone'
import pic1 from '../Header/image/dashboard.png'
import pic2 from '../Header/image/tlap.png'
import pic3 from '../Header/image/wlap.png'

const Hero = () => {
  return (
    <Heero>
        <Lefthero>
        <Big>
            All the Tools You Need to Grow Your Business, In One Place.
        </Big>
        <Small>
            Our site of integrated tools save you time, so you can focus on growing and delivering exceptional service to your customers.
        </Small>
       <Buttoncom/>

        </Lefthero>
        <Righthero>
            <Back src = {pic1}/>
            <Back2 src = {pic3}/>

            <Back1 src = {pic2}/>


        </Righthero>
    </Heero>
  )
}

export default Hero

const Heero = styled.div`
height:500px;
margin-top:40px;
display: flex;
justify-content:space-between;
align-items: center;

`
const Lefthero= styled.div`
margin-left:60px
`
const Righthero = styled.div`

`
const Big = styled.div`
font-size:2rem;
font-weight: bold;
width: 360px
`
const Small = styled.div`
 width: 360px;
 margin-top:40px;
`

const Back = styled.img`
position:relative;

`
const Back1 = styled.img`
position:absolute;
right: 0px;
bottom:50px;
width:220px;


`
const Back2 = styled.img`
position:absolute;
right: 150px;
bottom:20px;
width:220px;
object-fit:contain



`