import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import myCourses from "../../courses.json"
import commentStyle from "./home.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CoursesSlider = () => {
  const navigate = useNavigate();
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };
  const gap = 24;
  let allCourses = myCourses.HomePageCourses
  const [position, setPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const itemWidth = 288;
  const totalItems = allCourses.length;
  const sliderRef = useRef();

  const visibleItems = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      return Math.floor(sliderWidth / itemWidth);
    }
    return 1;
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
      if (position - 1 === 0) {
        setShowLeftArrow(false);
      }
    }
  };

  const handleNext = () => {
    const visibleItemCount = visibleItems();
    if (position < totalItems - visibleItemCount) {
      setPosition((prevPosition) => prevPosition + 1);
      setShowLeftArrow(true);
    } else if (position < totalItems - 1) {
      setPosition(totalItems - visibleItemCount);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPosition(0);
      setShowLeftArrow(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
 
  return (
    <>
       <div>
       <div ref={sliderRef} className=" review w-[90%] relative h-[400px] mx-auto  ">
        <h1 className="font-bold text-[24px] mx-auto">
          Learners are viewing
        </h1>
        <div className={commentStyle.container}  >
        <div  className=" gap-8 flex absolute overflow-hidden"  style={{
                 transform: `translateX(-${position * (itemWidth + gap)}px)`,
                transition: "transform 0.3s ease",
              }}>
        {allCourses.map(course => (
          <div className="card w-72 h-80 cursor-pointer" key={course.id} onClick={() => handleCourseClick(course.id)}>
            <img src={course.image} alt="" />
            <h1 className="mt-4 h-10 font-bold text-sm leading-[1.4]">{course.title}</h1>
            <h4 className="h-6 text-xs text-[#6a6f73]">{course.instructors[0].name}</h4>
            <p className="h-6 review text-xs font-bold">Rate: {course.rating.toFixed(1)}</p>
            <h3 className="price font-bold text-base text-[#2d2f31]">${course.price}</h3>
          </div>
        ))}
        </div>
        
        </div>
        {showLeftArrow && (
          <FaArrowCircleLeft
            onClick={handlePrev}
            size={40}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        )}
        
        {position < totalItems - visibleItems() && (
          <FaArrowCircleRight
            onClick={handleNext}
            size={40}
            className="cursor-pointer z-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
          />
        )}
        </div>
      </div>
    
    </>
  );
};

export default CoursesSlider;
