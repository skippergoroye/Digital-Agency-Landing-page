import React, { useState } from 'react';
import {styles} from './style'
import { Navbar, Hero, CTA, WhatWeDo, Stats, Portfolio, Subscribe, Footer } from './components';



function App() {
  

  return (
    <>
      <div className={`overflow-hidden`}>
        <div className={`bg-secondary  ${styles.paddingX}`}>
          {/* <div className={`${styles.boxWidth}`}> */}
            <Navbar />
          {/* </div> */}
        </div>


        <div className={`bg-secondary md:h-[650px]`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>




        <div className={`bg-primary`}>
          <WhatWeDo />
          <Stats />
          <Portfolio />
          {/* <CTA /> */}
          <Subscribe />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
