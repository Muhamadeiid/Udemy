import React, { Fragment, useEffect, useRef, useState } from "react";
import CoursesSlider from "./CoursesSlider";
import compStyle from "./home.module.css";
import myCourses from "../../../public/courses.json";
import commentStyle from "./home.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  let CoursesObj = [
    {
      title: "Python",
      head: myCourses.python.header,
      paragraph: myCourses.python.description,
      coursesApi: myCourses.python,
    },
    {
      title: "Microsoft Excel",
      head: myCourses.Excel.header,
      paragraph: myCourses.Excel.description,
      coursesApi: myCourses.Excel,
    },
    {
      title: "Web Development",
      head: myCourses.WebDev.header,
      paragraph: myCourses.WebDev.description,
      coursesApi: myCourses.WebDev,
    },
    {
      title: "JavaScript",
      head: myCourses.javaScript.header,
      paragraph: myCourses.javaScript.description,
      coursesApi: myCourses.javaScript,
    },
    {
      title: "Data Science",
      head: myCourses.dataScience.header,
      paragraph: myCourses.dataScience.description,
      coursesApi: myCourses.dataScience,
    },
    {
      title: "Amazon AWS",
      head: myCourses.aWS.header,
      paragraph: myCourses.aWS.description,
      coursesApi: myCourses.aWS,
    },
    {
      title: "Drawing",
      head: myCourses.draw.header,
      paragraph: myCourses.draw.description,
      coursesApi: myCourses.draw,
    },
  ];
  const navigate = useNavigate();
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };
  const gap = 24;
  const [position, setPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const itemWidth = 288;

  const visibleItems = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      return Math.floor(sliderWidth / itemWidth);
    }
    return 1;
  };
  const sliderRef = useRef();

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
  const [index, setIndex] = useState(0);
  let getElement = (e) => {
    const newIndex = e.getAttribute("data-index");
    setIndex(newIndex);
    setPosition(0);
    setShowLeftArrow(false);
  };
  let totalItems = CoursesObj[index].coursesApi.courses.length;
  return (
    <>
      <div ref={sliderRef} className="w-[90%] mx-auto">
        <div className="text">
          <h2 className="font-bold text-3xl leading-[1.35] tracking-[-.012rem]">
            A broad selection of courses
          </h2>
          <p className="mt-[20px]">
            Choose from over 220,000 online video courses with new additions
            published every month
          </p>
        </div>
        <div className=" mt-[20px]">
          <ul className="flex gap-4 flex-wrap">
            {CoursesObj.map((el, idx) => (
              <Fragment key={idx}>
                <li
                  data-index={idx}
                  onClick={(e) => {
                    getElement(e.target);
                    setIndex(idx);
                  }}
                  className={
                    index == idx
                      ? "font-bold text-black cursor-pointer"
                      : "font-bold cursor-pointer text-[#73787c]"
                  }
                >
                  {el.title}
                </li>
              </Fragment>
            ))}
          </ul>
          <div className="details width-full border p-8 mt-4">
            {CoursesObj.map((el, idx) =>
              index == idx ? (
                <Fragment key={idx}>
                  <h1 className="text-[24px] mb-[8px] font-bold">{el.head}</h1>
                  <p style={compStyle} className={compStyle.parag}>
                    {el.paragraph}
                  </p>
                  <button className="p-2 border border-black font-bold hover:bg-slate-200">
                    Explore {el.title}
                  </button>
                </Fragment>
              ) : (
                ""
              )
            )}
            <div className="relative">
              <div className={commentStyle.container}>
                <div
                  className=" gap-8 flex absolute overflow-hidden mt-12"
                  style={{
                    transform: `translateX(-${position * (itemWidth + gap)}px)`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {CoursesObj[index].coursesApi.courses.map((course, idx) => (
                    <div className="card w-72 h-80 cursor-pointer" key={idx} onClick={() => handleCourseClick(course.id)}>
                      <img className="" src={course.image} alt={course.title} />
                      <h1 className="mt-4 h-10 font-bold text-sm leading-[1.4]">
                        {course.title}
                      </h1>
                      <h4 className="h-10 text-xs text-[#6a6f73]">
                        {course.instructors[0].name}
                      </h4>
                      <p className="h-6 review text-xs font-bold">
                        Rate: {course.rating.toFixed(1)}
                      </p>
                      <h3 className="price font-bold text-base text-[#2d2f31]">
                        ${course.price}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              {showLeftArrow && (
                <FaArrowCircleLeft
                  onClick={() => {
                    handlePrev();
                  }}
                  size={40}
                  className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                />
              )}

              {position < totalItems - visibleItems() && (
                <FaArrowCircleRight
                  onClick={() => {
                    handleNext();
                  }}
                  size={40}
                  className="cursor-pointer z-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
