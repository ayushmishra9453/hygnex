import React from 'react'
import logo from "../assets/Component 40.png"
function Navbar() {
  return (
    <div className='relative flex justify-between items-center  mx-auto py-[27px]'>
      <img src={logo} alt="" loading='lazy' className='py-[5px] '/>
       <nav>
        <ul className='flex justify-between items-center gap-x-[40px] font-inter'>
            <li className='hover:text-blue2 cursor-pointer '>Home</li>
            <li className='hover:text-blue2 cursor-pointer'>Flashcard</li>
            <li className='hover:text-blue2 cursor-pointer'>Contact</li>
            <li className='hover:text-blue2 cursor-pointer'>FAQ</li>
            <button className='w-[128px] h-[48px] py-[13px] px-[40px] text-white rounded-[32px] bg-gradient-to-r from-blue1 via-100% to-blue2 to-100% hover:scale-110 transition-all duration-200'>Login</button>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar
