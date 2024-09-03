import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import logo from "./../../Images/Udemy.png"
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const NavBar = () => {
 const [menu, setMenu] = useState(false)
 const [bigMenu, setBigMenu] = useState(false)

 const windowHandler = () => {
  let windowSize = window.innerWidth;
    if (windowSize < 800) {
      setMenu(true);
    } else {
      setMenu(false);
      setBigMenu(false);
    }
  };
  
useEffect(()=>{
  if (window.innerWidth < 800) {
    setMenu(true);
  } else {
    setMenu(false);
  }
 },[])
 useEffect(()=>{
  window.addEventListener("resize",windowHandler)

 },[menu])
  return (
    <>
      <header className={menu? " z-10 flex justify-between items-center px-4 overflow-clip shadow-lg h-[60px]":"z-10 overflow-clip px-4 shadow-lg w-full h-[72px] gap-[20px] flex grow justify-center items-center"}>
      <RxHamburgerMenu size={24} className={menu ? "block cursor-pointer": "hidden"}/>
        <Link to={"/"}><img src={logo} alt="logo" className="w-28 h-max" /></Link>
        <p className={menu? "hidden" : "text-[#2d2f31] text-[0.9rem] cursor-pointer hover:text-maincolor"}>Categories</p>
        <div className={menu? "hidden": "relative h-[44px] grow flex"}>
        <GoSearch size={18} className=" text-gray-500 absolute left-4 -translate-y-1/2 top-1/2" />
          <input placeholder="Search For Anything" className="text-[12px] caret-slate-400 border-[1px] focus:outline-none border-black w-[100%] h-[100%] rounded-full absolute py-2 px-12 bg-transparent placeholder:text-slate-400 placeholder:text-[12px]" type="text" />
        </div>
        <div className={menu? "hidden" :"flex gap-4"}>
        <p className="text-[#2d2f31] text-[0.9rem] cursor-pointer hover:text-maincolor hidden lg:block">Udemy Business</p>
        <p className="text-[#2d2f31] text-[0.9rem] cursor-pointer hover:text-maincolor hidden big:block">Teach on Udemy</p>
        </div>
        <div className="flex gap-4">
        <GoSearch size={24} className={menu?"block cursor-pointer":"hidden"} />
       <Link to={"/cart"}> <IoCartOutline size={24} style={{color:"#5022c3"}} className="cursor-pointer" /></Link>
        </div>
        <div className= {menu? "hidden" :"flex gap-4"}>
        <button className="border border-black w-[80px] h-[40px] hover:bg-slate-200">Log In</button>
        <button className="border border-black w-[80px] h-[40px] bg-black text-white">Sign Up</button>
        <button className="border border-black w-[40px] h-[40px] flex justify-center items-center hover:bg-slate-200">< IoEarth size={18} /></button>
        </div>
      </header>
    </>
  )
}

export default NavBar
