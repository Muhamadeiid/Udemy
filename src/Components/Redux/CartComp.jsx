import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import card from "../../Images/empty-shopping-cart-v2.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./cartSlice";

const CartComp = () => {
  const totalCourses = useSelector((state) => state.card.courses.length);
  const courses = useSelector((state) => state.card.courses);
  const totprice = useSelector((state) => state.card.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartSlice.actions.calcTotal());
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="w-[85%]">
          <h1 className="text-4xl text-[#2d2f31] font-bold my-6">
            Shopping Cart
          </h1>
          <h3 className="font-bold text-[#2d2f31] mb-2">
            {totalCourses > 1
              ? `${totalCourses} Courses`
              : `${totalCourses} Course`}{" "}
            in Cart
          </h3>
          {totalCourses > 0 ? (
            <div className="mb-20 flex md:flex-row flex-col gap-16">
              <div className="courses w-[75%]">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="w-full flex mb-6 pt-4 border-t-[1px] cursor-default"
                  >
                    <div className="mr-4 cursor-default">
                      <img
                        className="w-52 h-26 "
                        src={course.image}
                        alt={course.title}
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between mb-4">
                        <h4 className="text-black">{course.title}</h4>
                        <p className="text-black">${course.price}</p>
                      </div>
                      <h3 className="text-black">
                        Rate: {course.rating.toFixed(1)}
                      </h3>
                      <button
                        className="text-maincolor"
                        onClick={() =>
                          dispatch(cartSlice.actions.removeFromCard(course.id))
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="price flex flex-col gap-4">
                <p className="font-bold text-[#6a6f73]">Total</p>
                <h3 className="text-3xl font-bold">E£{totprice.toFixed(2)}</h3>
                <button className="bg-[#a435f0] hover:bg-maincolor text-white w-64 h-12 font-bold">
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="shadow-[#d1d7dc] shadow-md h-96 flex flex-col justify-center items-center mb-20">
              <img src={card} alt="Empty Cart" />
              <p className="my-6">
                Your cart is empty. Keep shopping to find a course!
              </p>
              <Link to={"/"}>
                <button className="w-36 h-12 bg-[#a435f0] text-white font-bold">
                  Keep Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartComp;
