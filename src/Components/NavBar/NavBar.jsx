import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import logo from "./../../Images/Udemy.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import myCourses from "./../../../public/courses.json";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const allCourses = [
    ...myCourses.python.courses,
    ...myCourses.draw.courses,
    ...myCourses.dataScience.courses,
    ...myCourses.aWS.courses,
    ...myCourses.WebDev.courses,
    ...myCourses.javaScript.courses,
    ...myCourses.Excel.courses,
  ];
  const handleResize = () => {
    setMenu(window.innerWidth < 768);
    if (window.innerWidth >= 768) setShowMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCourseClick = (courseId) => {
    console.log("Course clicked:", courseId);
  };

  return (
    <header
      className={`relative gap-4 z-40 flex justify-between items-center px-4 shadow-lg ${
        menu ? "h-[60px]" : "h-[72px]"
      }`}
    >
        <RxHamburgerMenu
          size={24}
          className="cursor-pointer md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />

      <Link to="/">
        <img src={logo} alt="logo" className="w-28" />
      </Link>
      {!menu && (
        <>
          <p className="text-[#2d2f31] text-sm cursor-pointer hover:text-maincolor">
            Categories
          </p>
          <SearchBar
            allCourses={allCourses}
            onCourseClick={handleCourseClick}
          />
          <div className="flex gap-4">
            <p className="hidden lg:block text-sm cursor-pointer hover:text-maincolor">
              Udemy Business
            </p>
            <p className="hidden xl:block text-sm cursor-pointer hover:text-maincolor">
              Teach on Udemy
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/cart"> <IoCartOutline size={24} className="cursor-pointer hover:text-maincolor transition-colors duration-200"/> </Link>
           
            <button className="border border-black w-[80px] h-[40px] hover:bg-slate-200">
              Log In
            </button>
            <button className="border border-black w-[80px] h-[40px] bg-black text-white">
              Sign Up
            </button>
            <button className="border border-black w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200">
              <IoEarth size={18} />
            </button>
          </div>
        </>
      )}


      {showMobileMenu && (
        <>
        <div className="absolute top-[60px] left-0 w-full md:hidden bg-white shadow-lg flex flex-col items-center gap-4 p-4">
      
          <div className="w-full">
            <SearchBar allCourses={allCourses} />
          </div>
          <Link to="/cart"> <IoCartOutline size={28} className="hover:text-maincolor transition-colors duration-200 cursor-pointer"/> </Link>

          <button className="border border-black w-full h-[40px] rounded-md hover:bg-slate-200 transition-colors duration-200">
            Log In
          </button>

          <button className="border border-black w-full h-[40px] bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
            Sign Up
          </button>
          <button className="border border-black w-full h-[40px] rounded-md flex items-center justify-center hover:bg-slate-200 transition-colors duration-200">
            <IoEarth size={18} className="mr-2" />
            <span>Language</span>
          </button>
        </div>
      </>
      )}
    </header>
  );
};

export default NavBar;
