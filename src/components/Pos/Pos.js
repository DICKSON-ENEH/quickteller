import React from 'react'
import styled from 'styled-components'
import pic17 from '../Header/image/backdrop.svg'
import pic18 from '../Header/image/pos@3x.png'
import pic19 from '../Header/image/icon-qr-code.svg'
import pic20 from '../Header/image/icon-cash.svg'
import pic21 from '../Header/image/icon-ussd.svg'
import pic22 from '../Header/image/icon-cards.svg'
import pic23 from '../Header/image/icon-transfer.svg'

const Pos = () => {
  return (
    <Card>
        <Cardleft>
         <Point>POINT OF SALE TERMINAL</Point>
         <All>One Card REader for All Your Payment Needs</All>
         <Intro>
             Introducing the one dance for all your payment needs. whether you're accepting payments at your counter top checkout or looking to accept payments on the go, the lightweight and easy to transport card reader contacts to as away of devices and offers your buisiness the flexibility to accept any type of payment, wherever you are
         </Intro>
         <Module>Payment module available</Module>
        <ModuleBase>
            
            <Qrwrap>
            <Qrc src={pic19}/>
            <Qr>QR CODE</Qr>
            </Qrwrap>
            <Qrwrap>

            <Qrc src={pic20}/>
            <Qr>Cash</Qr>
            </Qrwrap>
            <Qrwrap>

            <Qrc src={pic21}/>
            <Qr>USSD</Qr>
            </Qrwrap>
            <Qrwrap>

            <Qrc src={pic22}/>
            <Qr>CARDS</Qr>
            </Qrwrap>
            <Qrwrap>
            <Qrc src={pic23}/>
            <Qr>TRANSFERS</Qr>
            </Qrwrap>
        </ModuleBase>
        </Cardleft>
        <Cardright>
            <Cardeback src={pic17}/>
            <Cardfront src={pic18}/>
        </Cardright>
       
    </Card>
  )
}

export default Pos
const Card = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
padding:60px
`
const Cardleft = styled.div`
width:500px;
`
const Cardright = styled.div`
position:relative
`
const Cardeback= styled.img`
position:relative;
width:600px;
left:45px
`
const Cardfront = styled.img`
width:700px;
position:absolute;
top:-30px;
left:-0px
`
const Point = styled.div`
margin-bottom:20px;
color:rgb(3,59,110)
`
const All = styled.div`
font-size:2rem;
font-weight: bold;
color:rgb(3,59,110);
margin-bottom:20px
`
const Intro = styled.div`

`
const Module = styled.div`

`
const Qr = styled.div`
display: flex;
flex-direction:column;
font-size:13px

`
const Qrc = styled.img`

`
const ModuleBase = styled.div`
display: flex;

`
const Qrwrap = styled.div`
margin:20px;
margin-left:-0px
`