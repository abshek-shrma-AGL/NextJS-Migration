"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function modal({ isVisible, onClose, dataTitle }) {
    if (!isVisible) return null;
  return (
    <>
    <div className={`modal fixed inset-0 inline-flex items-center z-10`}>
        <div className='modal-body relative bg-white block mx-auto p-3 md:p-5 rounded border border-1 border-[#000] max-w-[800px] w-full
        max-sm:mx-3'>
            <a className='absolute top-5 right-5 cursor-pointer' onClick={()=>onClose()}>
                <Image src="/images/download.svg" alt='Get A Quote' width={15} height={15}/>
            </a>
            <h2 className="mb-0 text-center py-6 text-2xl font-semibold">{dataTitle}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-3 md:gap-y-6'>
                <div className='block'>
                    <input type="text" className="text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none" placeholder='Name*' />
                </div>
                <div className='block'>
                    <input type="email" className="text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none" placeholder='Email ID*' />
                </div>
                <div className='block'>
                    <input type="text" className="text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none" placeholder='Mobile No*' />
                </div>
                <div className='block'>
                   <select className='w-full text-base border border-1 border-[#c0c0c0] text-[#555] py-[5px] px-[15px] h-[45px] rounded-none'>
                    <option>Please Select Model*</option>
                    <option>Please Select Model*</option>
                    <option>Please Select Model*</option>
                   </select>
                </div>
                <div className='block'>
                   <select className='text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none'>
                    <option>Please Select CIty*</option>
                    <option>Please Select CIty*</option>
                    <option>Please Select CIty*</option>
                   </select>
                </div>
                <div className='block'>
                   <select className='text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none'>
                    <option>Please Select Dealer Name*</option>
                    <option>Please Select Dealer Name*</option>
                    <option>Please Select Dealer Name*</option>
                   </select>
                </div>
                <div className='block'>
                   <select className='text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none'>
                    <option>Please Select Outlet*</option>
                    <option>Please Select Outlet*</option>
                    <option>Please Select Outlet*</option>
                   </select>
                </div>
            </div>
            <div className='flex items-center mt-6'>
                    <input type='checkbox' className='w-5 h-5 border border-1 rounded-sm inline-block' id='check1'/>
                    <label className='inline-block pl-4 text-[12px]'>I have read and understood thedisclaimer</label>
            </div>
            <a href="#" className="text-[#fff] leading-[40px] px-4 bg-[#000] text-[16px] border-0 w-full mt-4 mb-2 block max-w-[150px] mx-auto text-center">submit</a>
        </div>
    </div>
    <div className={`backdrop fixed inset-0 bg-[#000]/[0.50] h-full z-index`}>

    </div>
    </>

  )
}
