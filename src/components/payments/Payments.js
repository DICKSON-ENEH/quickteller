import React from 'react'
import styled from 'styled-components'
import  pic11 from '../Header/image/instant.png'
import  pic12 from '../Header/image/confirm.png'


const Payments = () => {
  return (
    <Ypees>
        <Ypeesleft>
            <Ypeesleftback src={pic11}/>
            <Ypeesleftbck src={pic12}/>
        </Ypeesleft>
        <Ypeesright>
            <Ypeesrightwrap>
            <Instant>INSTANT PAYMENTS</Instant>
            <Built>Built to save Time and Get you paid Faster</Built>
            <Send>
                Send professional invoices, track them in real time, and accept payments online-all from one place. Save time with auto-biling, stored information , and powerul reporting tools. Customers can pay in one click. They can pay an online invoice through their computer, in person, or right through thir phone.
            </Send>
            <Links>
            <LInkspan>Payments Links</LInkspan>
            <LInkspan>invoices</LInkspan>
            <LInkspan>Subscriptions</LInkspan>
            </Links>
            </Ypeesrightwrap>
        </Ypeesright>
    </Ypees>
  )
}

export default Payments


const Ypees= styled.div`
display:flex;
justify-content:space-between;
align-items: center;
margin-top:50px
`
const Ypeesleft = styled.div`
width:500px;
margin-left:80px
`
const Ypeesleftback = styled.img`
width:450px;
position:relative;
`
const Ypeesleftbck = styled.img`
width:380px;
position:absolute;
left:300px;
top:1850px

`
const Ypeesright = styled.div`

`
const Ypeesrightwrap = styled.div`
width:450px;
margin-right:50px
`
const Instant = styled.div`
color:rgb(3,59,110);
font-size:20px;
margin-bottom:20px
`
const Built = styled.div`
font-weight: bold;
color:rgb(3,59,119);
font-size: 2rem;
margin-bottom:20px
`
const Send = styled.div`
font-size:20px
`
const Links = styled.div`
display:flex;
margin-top:20px;
justify-content-space-between;
`
const LInkspan = styled.span`
 display:flex;
 justify-content:space-between;
 width:250px
`