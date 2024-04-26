import React, { useEffect, useState } from "react";
import bodyImage from "../assets/Comp (1).png";
import refresh from "../assets/Vector.png";
import left from "../assets/Vector (1).png";
import right from "../assets/Vector (2).png";
import zoom from "../assets/Vector (3).png";
import logo2 from "../assets/Frame 41.png";
import add from "../assets/Frame (3).png";
import home from "../assets/Frame (4).png";
import arrow from "../assets/Frame (5).png";
function Body() {
  const [selectedItems, setSelectedItems] = useState([
    true,
    false,
    false,
    false,
    false,
  ]); // Assuming 5 list items initially

  const handleSelect = (index) => {
    const newSelectedItems = selectedItems.map((item, i) =>
      i === index ? true : false
    );
    if (index !== 0) {
      newSelectedItems[0] = false;
    }
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="">
      <div className="flex items-center ">
        <img src={home} alt="" />
        <img src={arrow} alt="" />
        <p className="font-inter font-medium text-lg leading-5 text-center text-[#696671]">
          Flashcard
        </p>
        <img src={arrow} alt="" />
        <p className="font-inter font-semibold text-lg leading-5 text-center text-[#696671]">
          Mathematics
        </p>
        <img src={arrow} alt="" />
        <p className="font-inter font-medium text-lg leading-5 text-center text-[#06286E]">
          Relation and Function
        </p>
      </div>

      <div>
        <h1 className="text-[32px] font-bold font-montserrat bg-gradient-to-r text-transparent bg-clip-text from-blue1 to-blue2 leading-10 mt-16">
          Relations and Functions ( Mathematics )
        </h1>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-x-[40px] mt-10 ">
          {["Study", "Quiz", "Test", "Game", "Others"].map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer font-inter  text-[20px]   ${
                selectedItems[index]
                  ? "font-bold   bg-gradient-to-r px-[12px] text-transparent bg-clip-text from-blue1 to-blue1 border-b-2 border-blue1"
                  : "font-medium text-[#696671]"
              }`}
              onClick={() => handleSelect(index)}
            >
              {item}
              <div className="absolute bottom-0 w-full bg-lightBlue h-1 hidden group-hover:block transition-all duration-200"></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col justify-center items-center c">
        <img src={bodyImage} alt="" className="ursor-pointer" />
        <div className="mt-6 flex justify-between items-center w-[45%]">
          <img src={refresh} alt="" className="cursor-pointer" />
          <div className="flex justify-center items-center gap-x-[30px]">
            <img src={left} alt="" className="cursor-pointer" />
            <p
              className="text-2xl font-inter font-bold text-[#202B37];
"
            >
              01/10
            </p>
            <img src={right} alt="" className="cursor-pointer" />
          </div>
          <img src={zoom} alt="" className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between -ml-10 items-center mt-4">
        <img src={logo2} alt="" className="cursor-pointer" />
        <div className="flex justify-center items-center gap-2">
          <img src={add} alt="" className="cursor-pointer" />
          <p className="font-inter font-semibold text-[28px] leading-[34px] text-blue1 ">
            Create Flashcard
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
