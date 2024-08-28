import React, { useEffect, useState } from "react";
import Nav from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
const CoursePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showingNav, setNav] = useState(false);
  const [data, setData] = useState();
  const { courseId } = useParams();
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 300) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    axios
      .get("../../../public/courses.json")
      .then((res) => setData(res.data.HomePageCourses))
      .catch((err) => console.log(err));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const course = data ? data.find((c) => c.id === parseInt(courseId)) : null;
  console.log(course);
  return (
    <>
      <Nav />
      <div className={showingNav ? "inner-nav w-full h-10 fixed" : "hidden"}>
        <h1>{course?.title}</h1>
        <div>{course?.rating.toFixed(1)}</div>
      </div>
      <div className="Course-data w-96">
        <img src={course?.image} alt={`image for ${course?.title}`} />

          <ul className="w-full h-14 flex">
            <li className="w-1/2">Personal</li>
            <li className="w-50%">Teams</li>
          </ul>
        <div>
        <h2>Subscribe to Udemy’s top courses</h2>
        <p>Get this course, plus 11,000+ of our top-rated courses, with Personal Plan.</p>
        <button>Try personal Plan for free</button>
        <h4>Price:${course?.price}</h4>
        <button>Add to Cart</button>
        </div>
      </div>
      <div className="py-10">
        <div>
          <h1>{course?.title}</h1>
          <p>{course?.headline}</p>
          <div>{course?.rating.toFixed(1)}</div>
          <div>
            Created By:{" "}
            {course?.instructors.map((el, idx) => (
              <span key={idx}>
                <span>
                  {el.name}, {el.jop}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="course-landing-page">
        <div className="container max-w-5xl">Instructor</div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
