import React from 'react'
import FooterMobile from './footerMobile'

export default function footer() {
  return (
    <footer className='bg-black py-3 mt-[60px]'>
      <div className='container mx-auto px-4 max-sm:hidden'>
        <div className='flex justify-between'>
          <div>
            <p className='text-[white] px-5'>Copyright © Maruti Suzuki India Limited</p>
          </div>
          <div>
          <p className=' text-[white] px-5'>Privacy policy</p>
          </div>
        </div>
      </div>
      <FooterMobile/>
    </footer>
  )
}
