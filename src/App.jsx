import React, { useState } from 'react';
import {styles} from './style'
import { Navbar, Hero, CTA, Footer } from './components';


function App() {
  

  return (
    <>
      <div className={`bg-primary w-full overflow-hidden`}>
        <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        

        <div className={`bg-secondary md:h-[550px] ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>


        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
