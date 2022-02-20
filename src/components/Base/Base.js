import React from 'react'
import styled from 'styled-components'
import pic24 from '../Header/image/konet.svg'
import pic25 from '../Header/image/connect.png'

const Base = () => {
  return (
    <Basewrap>
    <Baseright>
    <Baseback src={pic24}/>
    <Basefront src ={pic25}/>
    </Baseright>
    <Baseleft>
     <Help>
         We're Here to Help You Get Started.
     </Help>
     <Helpconnect>
        connect with our sales team for one-on-one assitance with gettting started 
     </Helpconnect>
     <Contact>contact us</Contact>
     <Baselast>
     we'll call you within one business day, between 9.am qand 5.pm in your time zone. if we cant reach you, we'll send an email with phone number to call us back
     </Baselast>
    </Baseleft>
    </Basewrap>
  )
}

export default Base
const Basewrap = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
// margin-top:70px;
padding:80px;
height:500px;
background:rgb(234,247,253);
`
const Baseright = styled.div`
`

const Baseback = styled.img`
position:relative;
left:380px;
bottom:50px;
`
const Basefront = styled.img`
position:absolute;
width:600px;
left:45px

`
const Baseleft = styled.div`
width:500px;
margin-top:70px

`
const Help = styled.div`
font-weight: bold;
font-size: 2rem;
width: 360px;
color:rgb(3,59,110);
margin-bottom:20px
`
const Helpconnect = styled.div`
width:350px;
margin-bottom:20px
`
const Contact = styled.button`
width:120px;
padding:10px;
outline:none;
border:none;
background:rgb(3,59,110, 0.93);
color:white;
margin-bottom:20px
`
const Baselast = styled.div`
width:400px
`