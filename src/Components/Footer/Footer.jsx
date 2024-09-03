import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Udemy.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2d2f31] md:px-14 px-8 py-6 w-full">
        <div className="bg-[#2d2f31] flex flex-wrap justify-between">
          <div className="flex flex-col sm:justify-between sm:flex-row gap-6">
            <ul className="ul">
              <li className="list">
                <Link to="#">Udemy Business</Link>
              </li>
              <li className="list">
                <Link to="#">Teach on Udemy</Link>
              </li>
              <li className="list">
                <Link to="#">Get the app</Link>
              </li>
              <li className="list">
                <Link to="#">About us</Link>
              </li>
              <li className="list">
                <Link to="#">Contact us</Link>
              </li>
            </ul>
            <ul className="ul">
              <li className="list">
                <Link to="#">Careers</Link>
              </li>
              <li className="list">
                <Link to="#">Blog</Link>
              </li>
              <li className="list">
                <Link to="#">Help and Support</Link>
              </li>
              <li className="list">
                <Link to="#">Affiliate</Link>
              </li>
              <li className="list">
                <Link to="#">Investors</Link>
              </li>
            </ul>
            <ul className="ul">
              <li className="list">
                <Link to="#">Terms</Link>
              </li>
              <li className="list">
                <Link to="#">Privacy policy</Link>
              </li>
              <li className="list">
                <Link to="#">Cookie setting</Link>
              </li>
              <li className="list">
                <Link to="#">Sitemap</Link>
              </li>
              <li className="list">
                <Link to="#">Accessibility statement</Link>
              </li>
            </ul>
          </div>
          <button className="text-white border border-white w-[150px] h-10 ">
            English
          </button>
        </div>
        <div className="flex justify-between mt-8 items-end">
          <Link to={"https://www.udemy.com/"}>
            <img src={logo} alt="logo" className="w-28 h-max" />
          </Link>
          <p className="text-white text-[13px] ">© 2024 Udemy, Inc.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
