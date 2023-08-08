import React from 'react'
import HeroImage from '../assets/hero-image.png'
import { OurPartners } from '../constants/index';
import { styles } from '../style'

const Hero = () => {
  return (
    <section id="home" className='flex md:flex-row flex-col sm:py-16 py-6'>
       {/* Increase Your Customers Loyalty and Satisfaction */}
       <div className='flex md:flex-row flex-col sm:py-16 py-6 md:mt-[-80px] sm:px-16 px-6'>
          <div className='flex flex-col justify-center w-full'>
              <h1 className='text-3xl md:text-5xl font-poppins mb-3 md:max-w-[550px] font-semibold'>Increase Your Customers Loyalty and Satisfaction</h1>
              <p className='mb-5 font-avenir md:max-w-[430px] font-normal'>We help businesses like yours earn more customers, standout from competitors, make more money</p>
            <div>
              <button className='border border-[#20B15A] p-2 rounded-lg bg-[#20B15A] text-white text-[12px] w-24'>Get Started</button>
            </div>
          </div>

          {/* right side of the screen image section  */}
          <div className="w-full md:my-0 my-10 relative items-center justify-center mb-10">
            <img
              src={HeroImage}
              alt="billing"
              className="w-[100%] h-[100%] relative items-center justify-center pl-6"
            />
          </div>
       </div>

       <div className='bg-white md:w-[1280px] md:h-[70px] h-[50px] absolute md:mt-[420px] mt-[570px]'>
          <div className='flex items-center justify-between md:mt-6 md:px-16 px-6 mt-5 gap-10'>
            {OurPartners.map((part) => (
              <div key={part.id} className={`content-center`}>
                <img src={part.icon} alt="client_logo" className="xs:w-[100px] w-[1500px] object-contain" />
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}

export default Hero