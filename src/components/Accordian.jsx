import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../components/styles.css'

function Accordian({heading,subText}) {
    const [open, setOpen]  = useState(false)
    const handleOpen = ()=>{
        setOpen(!open)
    }

  return (
    <>
<div onClick={handleOpen}   className=' h-[58px] w-[848px] sm:w-full  px-[24px] borderGrad  flex items-center  ' >
    <div className='flex justify-between items-center w-full'>
    <p className='text-[1rem] font-[600] font-inter'>{heading}</p>
    <img
    src={arrow}
    className='w-[15px] h-[8px]'/>
    </div>
        
    </div>
    {/* {
        open && (
            <>
            <div className='w-full h-fit p-[20px]'>
                    content is here 
            </div>
            </>
        )
    } */}
    </>
  )
}

export default Accordian
