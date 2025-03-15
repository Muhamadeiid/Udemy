import { GoSearch } from "react-icons/go";
import { IoCartOutline, IoEarth } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import logo from "./../../Images/Udemy.png";
import myCourses from "../../../public/courses.json";

const SearchBar = ({ allCourses, onCourseClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate(); 

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleCourseClick = (id) => {
    setSearchTerm("");
    setShowSuggestions(false);
    navigate(`/course/${id}`);
  };

  return (
    <div className="relative h-[44px] grow flex">
      <GoSearch size={18} className="text-gray-500 absolute left-4 -translate-y-1/2 top-1/2" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search For Anything"
        className="text-sm caret-slate-400 border border-black w-full h-full rounded-full py-2 px-12 bg-transparent placeholder:text-slate-400"
      />

      {showSuggestions && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCourseClick(course.id)}
              >
                <img src={course.image} alt={course.title} className="w-12 h-12 object-cover rounded mr-3" />
                <div>
                  <h3 className="text-sm font-semibold">{course.title}</h3>
                  <p className="text-xs text-gray-600">{course.instructors[0]?.name || "Unknown Instructor"}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="p-2 text-sm text-gray-500">No courses found</p>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchBar;