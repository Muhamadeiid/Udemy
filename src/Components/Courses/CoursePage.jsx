import React, { useEffect, useState } from "react";
import Nav from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../Redux/cartSlice";
const CoursePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(true);
  const [showingNav, setNav] = useState(true);
  const [data, setData] = useState();
  const { courseId } = useParams();
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 100) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  const pageWidth = () => {
    if (window.innerWidth > 1060) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", pageWidth);
    axios
      .get("../../../public/courses.json")
      .then((res) => {
        const pythonCourses = res.data.python?.courses;
        const javaScriptCourses = res.data.javaScript?.courses;
        const drawCourses = res.data.draw?.courses ;
        const aWsCourses = res.data.aWS?.courses;
        const webCourses = res.data.WebDev?.courses;
        const ExcelCourses = res.data.Excel?.courses ;
        const dataScience = res.data.dataScience?.courses;

        const allCourses = [
          ...pythonCourses,
          ...javaScriptCourses,
          ...drawCourses,
          ...aWsCourses,
          ...webCourses,
          ...ExcelCourses,
          ...dataScience
        ];
        setData(allCourses);
      })
      .catch((err) => console.log(err));
      
  }, []);
  

  const course = data ? data.find((c) => c.id === parseInt(courseId)) : null;
  
  const dispatch = useDispatch();
  return (
    <>
      <Nav />
      {
         width?<div
         className={
           showingNav
             ? "Course-data w-80 fixed right-40 bg-white border border-white z-10 shadow-lg"
             : "Course-data w-80 fixed top-0 right-40 bg-white border border-white z-10 shadow-lg}"
         }
       >
         {showingNav ? (
           <img
             className="w-full"
             src={course?.image}
             alt={`image for ${course?.title}`}
           />
         ) : undefined}
         <ul className="w-full h-16 flex justify-center items-center font-bold shadow-lg">
           <li className="w-1/2">Personal</li>
           <li className="w-50% text-gray-600">Teams</li>
         </ul>
         <div className="px-6">
           <h2 className="font-serif text-lg font-bold mt-6">
             Subscribe to Udemy’s top courses
           </h2>
           <p className="text-sm text-slate-500 mb-4">
             Get this course, plus 11,000+ of our top-rated courses, with
             Personal Plan.
           </p>
           <button className="w-full h-14 bg-[#a435f0] text-white hover:bg-maincolor">
             Try personal Plan for free
           </button>
           <div className="text-xs text-slate-500 flex justify-center my-2">
             Starting at E£204.00 per month after trial
           </div>
           <div className="text-xs text-slate-500 flex justify-center my-2">
             Canel Any time
           </div>
           <h4>Price:${course?.price}</h4>
           <button
             onClick={() => {
               if (course) {
                 dispatch(cartSlice.actions.addToCard(course));
               }
             }}
             className="w-full h-14 bg-white text-black border border-black mt-6 font-bold mb-6 hover:bg-slate-200"
           >
             Add to Cart
           </button>
         </div>
       </div>:
        <div className="w-full flex justify-center">
          <div className="w-[600px] mt-11">
          <img
            className="w-full h-[400px]"
            src={course?.image}
            alt={`image for ${course?.title}`}
          />
          <h1 className="font-bold text-3xl mt-5 text-[#2d2f31]">{course.title}</h1>
          <p className="text-l my-6">{course.headline}</p>
          <div className="text-amber-400 font-bold mb-8">
          Rate:{course?.rating.toFixed(1)}
        </div>
        <ul className="w-full h-16 flex justify-center items-center font-bold shadow-lg">
          <li className="w-1/2">Personal</li>
          <li className="w-50% text-gray-600">Teams</li>
        </ul>
        <div className="px-6">
          <h2 className="font-serif text-lg font-bold mt-6">
            Subscribe to Udemy’s top courses
          </h2>
          <p className="text-sm text-slate-500 mb-4">
            Get this course, plus 11,000+ of our top-rated courses, with
            Personal Plan.
          </p>
          <button className="w-full h-14 bg-[#a435f0] text-white hover:bg-maincolor">
            Try personal Plan for free
          </button>
          <div className="text-xs text-slate-500 flex justify-center my-2">
            Starting at E£204.00 per month after trial
          </div>
          <div className="text-xs text-slate-500 flex justify-center my-2">
            Canel Any time
          </div>
          <h4>Price:${course?.price}</h4>
          <button
            onClick={() => {
              if (course) {
                dispatch(cartSlice.actions.addToCard(course));
              }
            }}
            className="w-full h-14 bg-white text-black border border-black mt-6 font-bold mb-6 hover:bg-slate-200"
          >
            Add to Cart
          </button>
        </div>
        </div>
      </div>
      }

      {width? <div className="bg-[#2d2f31] px-14 py-10 md:block hidden">
        <h1 className="text-3xl text-white font-bold max-w-[500px] mb-8">
          {course?.title}
        </h1>
        <p className="text-white  text-xl max-w-[500px] mb-8">
          {course?.headline}
        </p>
        <div className="text-amber-400 font-bold mb-8">
          {course?.rating.toFixed(1)}
        </div>
        <div className="text-white max-w-[500px]">
          Created By:{" "}
          {course?.instructors.map((el, idx) => (
            <span className="text-blue-400 " key={idx}>
              <Link to={"#"} className="text-blue-400 underline">
                {el.name}
              </Link>{" "}
              <span>, | </span>
              <Link to={"#"} className="text-blue-400 underline">
                {el.jop}
              </Link>
            </span>
          ))}
        </div>
      </div>: ""}
      <div className="flex justify-center">
        <div className="course-landing-page my-10 w-[90%]">
          <div className="container max-w-5xl text-3xl text-[#2d2f31] font-bold mb-4">
            Instructor
          </div>
          <div className="max-w-[500px]">
            {course?.instructors.map((el, idx) => (
              <div
                className="text-maincolor underline text-xl font-bold mb-4 "
                key={idx}
              >
                <Link to={"#"}>{el.name}</Link> <span> | </span>
                <Link to={"#"}>{el.jop}</Link>
                <div className="mt-4">
                  <img className="rounded-full" src={el.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CoursePage;
