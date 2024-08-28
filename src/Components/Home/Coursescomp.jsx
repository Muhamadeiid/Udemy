import React, { Fragment, useEffect, useRef, useState } from "react";
import CoursesSlider from "./CoursesSlider";
import compStyle from "./home.module.css";
import myCourses from "../../courses.json";
import commentStyle from "./home.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Courses = () => {
  let CoursesObj = [
    {
      title: "Python",
      head: "Expand your career opportunities with Python",
      paragraph: `Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language.
        Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal
        to both beginners and advanced developers alike.`,
      coursesApi: myCourses.python,
    },
    {
      title: "Microsoft Excel",
      head: "Analyze and visualize data with Excel",
      paragraph: `Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software.
       Real-world experts will show you the basics like how to organize data into sheets,
        rows and columns, and advanced techniques like creating complex dynamic formulas.
       Both small businesses and large companies use Excel to turn their raw data into actionable insights.`,
      coursesApi: myCourses.Excel,
    },
    {
      title: "Web Development",
      head: "Build websites and applications with Web Development",
      paragraph: `The world of web development is as wide as the internet itself.
       Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating,
       managing, and debugging the websites and applications that we increasingly rely on.`,
      coursesApi: myCourses.WebDev,
    },
    {
      title: "JavaScript",
      head: "Grow your software development skills with JavaScript",
      paragraph: `JavaScript is a text-based computer programming language used to make dynamic web pages.
       A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels,
        displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes,
         you can learn to build interactive web applications, choose the best framework,
          and work with other programming languages like HTML and CSS. `,
      coursesApi: myCourses.javaScript,
    },
    {
      title: "Data Science",
      head: "Lead data-driven decisions with Data Science",
      paragraph: `Data science application is an in-demand skill in many industries worldwide — including finance,
       transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python,
        statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics,
       and analytics.`,
      coursesApi: myCourses.dataScience,
    },
    {
      title: "Amazon AWS",
      head: "Become an expert in cloud computing with AWS Certification",
      paragraph: `Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services.
       Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud
        development, sales, engineering, networking, and more. The better you become at cloud computing, the more you can earn.
         Anyone can learn AWS skills, and with AWS online training, you can move at your own pace.`,
      coursesApi: myCourses.aWS,
    },
    {
      title: "Drawing",
      head: "Expand your creative skillset with Drawing",
      paragraph: `Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn
       pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, 
       shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve 
       with a specialized course. We’ve got tons of options to get — and keep — you going.`,
      coursesApi: myCourses.draw,
    },
  ];
  const gap = 24;
  const [position, setPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const itemWidth = 288;

  const visibleItems = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      return Math.floor(sliderWidth / itemWidth);
    }
    return 1; // fallback value in case ref is not ready
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
      <div ref={sliderRef} className="w-[90%]  mx-auto">
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
          <ul className="flex gap-4">
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
                    <div className="card w-72 h-80" key={idx}>
                      <img className="" src={course.image} alt={course.title} />
                      <h1 className="mt-4 h-10 font-bold text-sm leading-[1.4]">
                        {course.title}
                      </h1>
                      <h4 className="h-6 text-xs text-[#6a6f73]">
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
