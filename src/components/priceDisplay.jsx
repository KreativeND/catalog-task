import React from 'react'

const PriceDisplay = () => {
    return (
        <section className='flex items-center p-0 w-fit gap-2'>
            <div className='flex flex-col items-start gap-4'>
                <h1 className='text-[#1A243A] text-7xl'>63,179.71</h1>
                <span className='text-[#67BF6B] font-circular-book text-[18px]'>+ 2,161.42 (3.54%)</span>
            </div>
            <p className='text-[#BDBEBF] text-2xl font-circular-medium self-start mt-1'>USD</p>
        </section>
    )
}

export default PriceDisplay