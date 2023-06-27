import React from 'react'
import Image from 'next/image'

export default function footerMobile() {
  return (
    <div className='bg-black py-3 grid grid-cols-4 fixed bottom-0 left-0 right-0 md:hidden'>
        <a href='#'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rReeKW0qmiligu593aWniTa0PeYVy8fKxdFGG8E&s" alt='Footer Img' width={20} height={20}/>
            <span className='block mt-2 text-white text-sm leading-none'>text</span>
        </a>
        <a href='#'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rReeKW0qmiligu593aWniTa0PeYVy8fKxdFGG8E&s" alt='Footer Img' width={20} height={20}/>
            <span className='block mt-2 text-white text-sm leading-none'>text</span>
        </a>
        <a href='#'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rReeKW0qmiligu593aWniTa0PeYVy8fKxdFGG8E&s" alt='Footer Img' width={20} height={20}/>
            <span className='block mt-2 text-white text-sm leading-none'>text</span>
        </a>
        <a href='#'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rReeKW0qmiligu593aWniTa0PeYVy8fKxdFGG8E&s" alt='Footer Img' width={20} height={20}/>
            <span className='block mt-2 text-white text-sm leading-none'>text</span>
        </a>
    </div>
  )
}
