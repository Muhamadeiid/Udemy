import React, { useEffect, useRef, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import commentStyle from "./home.module.css";

const Comments = () => {
  const [position, setPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const itemWidth = 390;
  const totalItems = 4;
  const sliderRef = useRef();

  const visibleItems = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      return Math.floor(sliderWidth / itemWidth);
    }
    return 1; // fallback value in case ref is not ready
  };
  const handlePrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
    if (position - 1 === 0) {
      setShowLeftArrow(false);
    }
  };

  const handleNext = () => {
    if (position < totalItems - visibleItems()) {
      setPosition(position + 1);
      setShowLeftArrow(true);
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
    <div className="bg-[#f7f9fa] py-20 w-full mt-16 h-[580px]">
      <div ref={sliderRef} className="w-[90%] relative mx-auto ">
        <h1 className="font-bold text-[24px]">
          How learners like you are achieving their goals
        </h1>
        <div className={commentStyle.container}>
          <div
            className={commentStyle.comments}
            style={{
              display: "flex",
              transform: `translateX(-${position * itemWidth}px)`,
              transition: "transform 0.6s ease",
            }}
          >
            <div className="comment">
              <p>
                I am proud to say that after a few months of taking this
                course...
                <strong>
                  I passed my exam and am now an AWS Certified Cloud
                  Practitioner!
                </strong>{" "}
                This content was exactly what the CCP exam covered.
              </p>
            </div>
            <div className="comment">
              <p>
                This course helped me{" "}
                <strong>
                  freshen up on my product manager skills and land a job at
                  Facebook!
                </strong>{" "}
                Thanks guys :)
              </p>
            </div>
            <div className="comment">
              <p>
                One of the best courses on management and leadership I have come
                across so far. The advice is practical, and examples highly
                relatable.
                <strong> Would help anyone become a better manager.</strong>
              </p>
            </div>
            <div className="comment">
              <p>
                I highly{" "}
                <strong>
                  recommend this course for all budding data scientists.
                </strong>{" "}
                Even people with no prior knowledge of any visualization tools
                can become a master after completing this course.
              </p>
            </div>
          </div>
        </div>
        {showLeftArrow && (
          <FaArrowCircleLeft
            onClick={handlePrev}
            size={40}
            className="cursor-pointer bg-white absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
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
  );
};
export default Comments;
