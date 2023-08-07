import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">

       {/* Increase Your Customers Loyalty and Satisfaction */}
        <div className='flex flex-col justify-center w-full'>
            <h1 className='text-3xl md:text-5xl font-poppins mb-3 md:max-w-[550px] font-semibold'>Increase Your Customers Loyalty and Satisfaction</h1>
            <p className='mb-5 font-poppins md:max-w-[430px] font-normal'>We help businesses like yours earn more customers, standout from competitors, make more money</p>
           <div>
             <button className='border border-[#20B15A] p-3 rounded-lg bg-[#20B15A] text-white text-[12px]'>Get Started</button>
           </div>
        </div>

        {/* right side of the screen image section  */}
        <div className="w-full md:my-0 my-10 relative items-center justify-center">
          <img
             src={HeroImage}
             alt="billing"
             className="w-[100%] h-[100%] relative z-[5] items-center justify-center pl-6"
           />
        </div>

    </section>
  )
}

export default Hero