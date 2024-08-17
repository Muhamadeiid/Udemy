import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import mine from "../../Images/Logo-me.jpg"


const Customers = () => {
  return (
    <>
      <div className="customers mb-16 flex flex-col gap-8 bg-[#f7f9fa] py-12">
        <div className="relative border bg-white flex justify-between m-auto w-[850px] p-8">
          <div className="text flex flex-col justify-between items-start">
          <p className=" max-w-96">
            Thanks to Udemy Business, Booz Allen has armed our workforce,
            specifically its <strong>data scientists, with highly relevant and in-demand
            tech skills</strong> that are enabling consultants to stay ahead of big data
            trends and raise the bar on proficiency, skills, and competencies to
            meet client demand.
          </p>
          <button className="text-maincolor font-bold">Read Full Story</button>
          </div>
          <div className="person flex flex-col items-center justify-start">
            <img src={mine} alt="" className="rounded w-[170px] h-[170px]" />
            <h3>Jim Hemgen</h3>
            <h4>Principal</h4>
            <h4>Booz Allen Hamilton</h4>
          </div>
          <FaArrowCircleRight size={40} className='bg-white absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2'/>
        </div>
        <button className="text-maincolor font-bold">View More customer stories</button>
        
      </div>
    </>
  )
}

export default Customers
