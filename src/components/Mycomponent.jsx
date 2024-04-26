

import React, { useState } from 'react';
// Adjust the path based on your file structure
import "../components/styles.css"
import Accordian from './Accordian';
const MyComponent = () => {
  const [formData,setFormData]=useState({
    first:"",
    second:"",
    third:""
  })

 

  function changeHandler(event){
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  console.log(formData);
  return (
    <div className="relative flex flex-col   gap-8 mb-[100px]">
      <h1 className="font-inter text-[48px] font-bold leading-[58px] bg-gradient-to-r text-transparent bg-clip-text from-blue1 to-blue2">FAQ</h1>
      <div className='w-full flex flex-col gap-y-8'>
        <Accordian heading="Can education flashcards be used for all age groups?"/>
        <Accordian heading="How do education flashcards work?"/>
        <Accordian heading="Can education flashcards be used for test preparation?"/>
      </div>
    </div>
  );
};

export default MyComponent;
