import React from 'react'
import logo from "../assets/Component 40.png"
function Navbar() {
  return (
    <div className='relative flex justify-between items-center  mx-auto py-[27px]'>
      <img src={logo} alt="" loading='lazy' className='py-[5px] '/>
       <nav>
        <ul className='flex justify-between items-center gap-x-[40px] font-inter'>
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
            <button className='w-[128px] h-[48px] py-[13px] px-[40px] text-white rounded-[32px] bg-gradient-to-r from-blue1 via-100% to-blue2 to-100%'>Login</button>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar
