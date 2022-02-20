import React from 'react'
// import styled from 'styled-components'
import Header from './components/Header/Header'
import Hero from './components/heroSec/Hero'
import Trustee from './components/trustee/trust'
import Finance  from './components/app/finance'
import Fashion from './components/Fashion/Fashion'
import Payments from './components/payments/Payments'
import Shopping from './components/Shoppings/Shopping'
import Pos from './components/Pos/Pos'
import Base from './components/Base/Base'
const  App=() => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Trustee/>
      <Finance/>
       <Payments/>
       <Fashion/>
       <Shopping/>
       <Pos/>
       <Base/>
    </div>
  );
}

export default App;
