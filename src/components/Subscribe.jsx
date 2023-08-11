import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribing with email: ${email}`);
  };
  return (
    <section id="Contact Us" className='flex items-center justify-center sm:py-6 py-6 sm:px-16 px-6'>
        <div className='flex flex-col items-center justify-center py-12 gap-8'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-[#20B15A] font-poppins font-medium text-xs py-3'>SUBSCRIBE</h2>
                <h1 className='max-w-[300px] text-center font-poppins text-xl text-black'>Subscribe to get the latest news about us</h1>
                <p className='text-[#8B8B8B] text-xs font-poppins font-thin py-1 text-center '>Please drop your email below to get daily update about what we do</p>
            </div>

            <div className=''>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Adress"
                  className="border border-gray-300 md:w-[400px] w-[300px] rounded-2xl py-[10px] px-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#8B8B8B] text-xs"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className="absolute bg-[#F55F1D] text-xs text-white mt-[5px] mr-[10px] rounded-xl py-[6px] px-5 right-0 top-0  hover:bg-[#F55F1D"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Subscribe