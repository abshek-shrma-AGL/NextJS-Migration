"use client"
import React,{useState} from 'react'
import Image from 'next/image'

export default function footerModal() {
    const [showFooterModal, setShowFooterModal] = useState(true)
    function closeFooterModal(){
        setShowFooterModal(false)
    }
    return (
        <>
            <div className={`modal fixed left-0 right-0 bottom-0 inline-flex items-center z-10 max-sm:hidden ${(showFooterModal)?"new":"animate-hide"}`}>
                <div className='modal-body relative bg-white block mx-auto p-5 w-full shadow shadow-[#000]'>
                    <a href='#' className='absolute top-5 right-5' onClick={() => closeFooterModal()}>
                        <Image src="/images/download.svg" alt="close-popup" width={15} height={15} />
                    </a>
                    <div className='grid grid-cols-6 gap-4 gap-y-6'>
                        <h2 className="mb-0 text-center text-xl font-semibold">Get A Quote</h2>
                        <div className='block'>
                            <input type="text" className="text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none border-t-0 border-s-0 border-e-0" placeholder='Name*' />
                        </div>
                        <div className='block'>
                            <input type="email" className="text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none border-t-0 border-s-0 border-e-0" placeholder='Email ID*' />
                        </div>
                        <div className='block'>
                            <input type="text" className="text-base border border-1 border-[#c0c0c0] w-full text-[#555] py-[5px] px-[15px] h-[45px] rounded-none border-t-0 border-s-0 border-e-0" placeholder='Mobile No*' />
                        </div>
                        <div className='block'>
                            <select className='w-full text-base border border-1 border-[#c0c0c0] text-[#555] py-[5px] px-[15px] h-[45px] rounded-none border-t-0 border-s-0 border-e-0'>
                                <option>Please Select Model*</option>
                                <option>Please Select Model*</option>
                                <option>Please Select Model*</option>
                            </select>
                        </div>
                        <a href="#" className="text-[#fff] leading-[40px] px-4 bg-[#000] text-[16px] border-0 w-full  block max-w-[150px] mx-auto text-center">submit</a>
                    </div>
                    
                    
                    <div className='flex items-center mt-3 ml-[17%]'>
                        <input type='checkbox' className='w-5 h-5 border border-1 rounded-sm inline-block' id='check2' />
                        <label className='inline-block pl-4 text-sm'>I have read and understood thedisclaimer</label>
                    </div>
                </div>
            </div>
        </>
    )
}
