import React from 'react'
import pic10 from '../Header/image/less.png'
import styled from 'styled-components'

const Finance = () => {
  return (
    <Financ>
     <Why>
         WHY USE QUICKTELLER BUSINESS
     </Why>
     <Approach>
         We use a Technology-First Approach to payments and finance
     </Approach>
     <FinanceWrap>
      <LeftFinance>
        <Multiple>MULTIPLE PAYMENT CHANNELS</Multiple>
        <Paid>Get paid securely, how and when you want</Paid>
        <Tools>As with toools, payments are centural to the exprience. Even with online payments, you benefitfrom our lover rates and fast deposits. Quickteller businmess seamlessly integrates with your existing website or store and we provide various payment options.</Tools> 
        <Checks>
          <Cardswrap>
            <Card>cards</Card>
            <Card>USSD</Card>
            <Card>Bank Transfer</Card>
          </Cardswrap>
          <Qrwrap>
            <Qr>QR</Qr>
            <Qrs>paycode</Qrs>
            <Qrs>Mobile Transfer</Qrs>
          </Qrwrap>
          </Checks> 
      </LeftFinance>
      <RightFinance src={pic10}/>
     </FinanceWrap>
    </Financ>
  )
}

export default Finance

const Financ = styled.div`
background:rgb(151,216,244,0.20);
margin-top:40px;
display: flex;
align-items: center;
flex-direction:column;
padding:60px
`

const Why = styled.div`
font-size:20px;

`
const Approach = styled.div`
font-weight: bold;
font-size: 2rem;
width:650px;
text-align: center;
color:rgb(3,59,110);
margin-top:20px
`
const FinanceWrap = styled.div`
display: flex;
jusitfy-content:space-between;
align-items: center;
margin-top:80px;
`

const LeftFinance = styled.div`
width:420px
`
const RightFinance = styled.img`
margin-left:120px
`
const Multiple = styled.div`
color:rgb(3,59,110);
margin-bottom:20px;
font-size:20px

`
const Paid = styled.div`
font-weight: bold;
font-size: 2rem;
color:rgb(3,59,115);
margin-bottom:20px
`
const Tools = styled.div`
font-size:20px
`
const Checks = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
text-align: center;
margin-top:25px

`
const Cardswrap = styled.div`
display: flex;
justify-content:space-between;
`
const Card = styled.span`
display: flex;
justify-content- space-around
`
const Qrwrap = styled.div`
display:flex;
justify-content:space-between;

`
const Qr= styled.span`
display:flex;
justify-content:space-between;
margin-left:5px;
margin-top:12px;

`
const Qrs = styled.span`
display:flex;
justify-content:space-between;
margin-right:-15px;
margin-top:12px;
`
