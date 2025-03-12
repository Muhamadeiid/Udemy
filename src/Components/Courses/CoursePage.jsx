import React, { useEffect, useState } from "react";
import Nav from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartItem } from "../Redux/cartSlice";

const CoursePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth > 1060);
  const [showingNav, setNav] = useState(true);
  const [data, setData] = useState();
  const { courseId } = useParams();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.courses);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setNav(window.scrollY <= 100);
  };

  const pageWidth = () => {
    setWidth(window.innerWidth > 1060);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", pageWidth);

    axios
      .get("/courses.json")
      .then((res) => {
        const allCourses = [
          ...res.data.python?.courses,
          ...res.data.javaScript?.courses,
          ...res.data.draw?.courses,
          ...res.data.aWS?.courses,
          ...res.data.WebDev?.courses,
          ...res.data.Excel?.courses,
          ...res.data.dataScience?.courses,
        ];
        setData(allCourses);
      })
      .catch((err) => console.log(err));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", pageWidth);
    };
  }, []);

  const course = data?.find((c) => c.id === parseInt(courseId));

  const isInCart = cart.some((item) => item.id === course?.id);

  const handleCartAction = () => {
    if (course) {
      dispatch(toggleCartItem(course));
    }
  };

  return (
    <>
      <Nav />
      {width ? (
        <div
          className={`Course-data w-full md:w-80 fixed ${
            showingNav ? "right-4 md:right-40" : "top-0 right-4 md:right-40"
          } bg-white border border-white z-10 shadow-lg`}
        >
          {showingNav && (
            <img
              className="w-full"
              src={course?.image}
              alt={`image for ${course?.title}`}
            />
          )}
          <ul className="w-full h-16 flex justify-center items-center text-center font-bold shadow-lg">
            <li className="w-1/2">Personal</li>
            <li className="w-1/2 text-gray-600">Teams</li>
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
              Try Personal Plan for free
            </button>
            <div className="text-xs text-slate-500 flex justify-center my-2">
              Starting at E£204.00 per month after trial
            </div>
            <div className="text-xs text-slate-500 flex justify-center my-2">
              Cancel Any time
            </div>
            <h4>Price: ${course?.price}</h4>
            <button
              onClick={handleCartAction}
              className="w-full h-14 bg-white text-black border border-black mt-6 font-bold mb-6 hover:bg-slate-200"
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <div className="w-[50%] max-w-[600px] mt-11 flex flex-col items-center">
            <img
              className="w-full h-[300px]"
              src={course?.image}
              alt={`image for ${course?.title}`}
            />
            <h1 className="font-bold text-3xl mt-5 text-[#2d2f31]">
              {course?.title}
            </h1>
            <p className="text-lg my-6">{course?.headline}</p>
            <div className="text-amber-400 font-bold mb-8">
              Rate: {course?.rating?.toFixed(1)}
            </div>
            <h4>Price: ${course?.price}</h4>
            <button
              onClick={handleCartAction}
              className="w-full h-14 bg-white text-black border border-black mt-6 font-bold mb-6 hover:bg-slate-200"
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}

      {width && (
        <div className="bg-[#2d2f31] px-4 md:px-14 py-10 hidden md:block">
          <h1 className="text-3xl text-white font-bold max-w-[500px] mb-8">
            {course?.title}
          </h1>
          <p className="text-white text-xl max-w-[500px] mb-8">
            {course?.headline}
          </p>
          <div className="text-amber-400 font-bold mb-8">
            {course?.rating?.toFixed(1)}
          </div>
          <div className="text-white max-w-[500px]">
            Created By:{" "}
            {course?.instructors.map((el, idx) => (
              <span key={idx} className="text-blue-400">
                <Link to="#" className="text-blue-400 underline">
                  {el.name}
                </Link>
                <span>, | </span>
                <Link to="#" className="text-blue-400 underline">
                  {el.jop}
                </Link>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="course-landing-page my-10 w-[90%]">
          <h2 className="container max-w-5xl text-3xl text-[#2d2f31] font-bold mb-4">
            Instructor
          </h2>
          <div className="max-w-[500px]">
            {course?.instructors.map((el, idx) => (
              <div
                key={idx}
                className="text-maincolor underline text-xl font-bold mb-4"
              >
                <Link to="#">{el.name}</Link> <span> | </span>
                <Link to="#">{el.jop}</Link>
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
