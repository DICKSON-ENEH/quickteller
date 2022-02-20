import React from 'react'
import styled from 'styled-components'
import pic14 from '../Header/image/storefront.png'
import pic15 from '../Header/image/connect.svg'

const Fashion = () => {
  return (
     <Faashion>
     <Store>
      <Storeleft>
        With Storefront You Now Have Everything You Need to Sell Online with ease
      </Storeleft>
      <Storeright>
       set up a fully-hosted online store in just minutes. The online store was designed with you in mind, meaning you dont need to hire any web designer or proggrammer to get Started 
       <Get>Lets get you started</Get>
      </Storeright>
     </Store>
     <BackStore src ={pic15} />
     <Storefront src={pic14}/>
     </Faashion>
  )
}

export default Fashion

const Faashion= styled.div`
background:rgb(234,247,253);
padding:60px;
height:1000px


`
const Store = styled.div`
display: flex;
justify-content:space-between;
`
const Storeleft = styled.div`
width:450px;
font-weight: bold;
color:rgb(3,59,110);
font-size:2rem;
margin-left:30px
`
const Storeright = styled.div`
width:450px;
font-size:20px;
margin-right:0px
`

const Get = styled.div`

`
const Storefront = styled.img`
margin-left:30px;
margin-top:20px;
position:absolute;
margin-top:90px;

`
const BackStore = styled.img`
position:absolute;
right:40px;
margin-top:80px;

`