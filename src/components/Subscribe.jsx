import React from 'react'

const Subscribe = () => {
  return (
    <section className='flex items-center justify-center sm:py-6 py-6 sm:px-16 px-6'>
        <div className='flex flex-col items-center justify-center py-12 gap-8'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-[#20B15A] font-poppins font-medium text-xs py-3'>SUBSCRIBE</h2>
                <h1 className='max-w-[300px] text-center font-poppins text-xl text-black'>Subscribe to get the latest news about us</h1>
                <p className='text-[#8B8B8B] text-xs font-poppins font-thin py-1'>Please drop your email below to get daily update about what we do</p>
            </div>

            <div className='border-[2px] border-black rounded-lg'>
                <input type="text" placeholder='hell' />
            </div>
        </div>
    </section>
  )
}

export default Subscribe