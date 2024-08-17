import Nav from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import background from "../../Images/background.png";
import cisco from "../../Images/cisco.png";
import citi from "../../Images/Citi.png";
import ericsson from "../../Images/ericsson.jpg";
import hp from "../../Images/HPE.svg";
import pg from "../../Images/p&g.png";
import samsung from "../../Images/samsung.png";
import vw from "../../Images/volkswagen.png";
import styles from "./home.module.css";
import Coursescomp from "./Coursescomp";
import CoursesSlider from "./CoursesSlider";
import Comments from "./Comments";
import commentStyle from "./home.module.css";
import { Link } from "react-router-dom";
import p1 from "../../Images/p1.jpg";
import p2 from "../../Images/p2.jpg";
import p3 from "../../Images/p3.jpg";
import p4 from "../../Images/p4.jpg";
import p5 from "../../Images/p5.jpg";
import p6 from "../../Images/p6.jpg";
import p7 from "../../Images/p7.jpg";
import p8 from "../../Images/p8.jpg";
import ubusiness from "../../Images/ubusiness.png";
import hero from "../../Images/hero.jpg";
import mine from "../../Images/Logo-me.jpg";
import Customers from "./Customers";
import instractor from "../../Images/instractor.jpg";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="relative z-[-1] mx-auto max-w-[1350px] h-[400px]">
        <img
          src={background}
          alt="background"
          className="w-full max-h-full absolute"
        />
        <div className="text absolute w-[400px] p-[2.4rem] top-10 left-16 shadow-lg">
          <h1 className="mb-[8px] text-[2.8rem] font-bold text-[#2d2f31] leading-tight tracking-[-0.16rem]">
            Find the right fit
          </h1>
          <p className="text-[0.90rem] max-w-[352px] text-[#2d2f31] font-[600]">
            Courses as low as E£249.99 ends today. Learn the topics you want,
            taught by real-world experts.
          </p>
        </div>
      </div>
      <div className="sponsors bg-[#f7f9fa] w-full flex flex-col items-center justify-center p-16">
        <h3>
          Trusted by over 15,000 companies and millions of learners around the
          world
        </h3>
        <div className="logos flex flex-wrap gap-4">
          <div className=" w-44 h-28 flex justify-center items-center">
            <img
              src={vw}
              alt="VW"
              className="w-[48px] h-[48px] filter grayscale"
            />
          </div>
          <div className="w-44 h-28 flex justify-center items-center">
            <img
              src={samsung}
              alt="Samsung"
              className="w-28 h-16 filter grayscale"
            />
          </div>
          <div className="w-44 h-28 flex justify-center items-center">
            <img
              src={cisco}
              alt="Cisco"
              className="w-24 h-[48px] filter grayscale"
            />
          </div>
          <div className="w-44 h-28 flex justify-center items-center">
            <img
              src={pg}
              alt="P&G"
              className="w-[48px] h-[48px] filter grayscale"
            />
          </div>
          <div className="w-44 h-28 flex justify-center items-center">
            <img src={hp} alt="HP" className="w-24 h-16 filter grayscale" />
          </div>
          <div className="w-44 h-28 flex justify-center items-center">
            <img
              src={citi}
              alt="Citi"
              className="w-[48px] h-[48px] filter grayscale"
            />
          </div>
          <div className="w-44 h-28 flex justify-center items-center">
            <img
              src={ericsson}
              alt="Ericsson"
              className="w-[60px] h-[60px] filter grayscale"
            />
          </div>
        </div>
      </div>
      <Coursescomp />
      <Comments />
      <CoursesSlider/>
      
      <div className="categories w-[90%] mx-auto">
        <h1 className="font-bold text-[24px]">Top categories</h1>
        <div className="flex flex-wrap justify-between mt-[10px] font-bold leading-5 text-[16px]">
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p2} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Design</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p1} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Develompent</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p3} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Marketing</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p4} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">IT and Software</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p5} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Personal Develompent</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p6} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Business</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p7} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Photography</h3>
          </div>
          <div className="item">
            <div className="inside-item">
              <Link to={"#"}>
                <img className="item-img" src={p8} alt="" />
              </Link>
            </div>
            <h3 className="mt-[10px]">Music</h3>
          </div>
        </div>
      </div>
      <div className="featured mt-16 pt-16 w-[100%] bg-[#f7f9fa]">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[#2d2f31] text-2xl font-bold leading-[1.2]">
            Featured topics by category
          </h1>
          <div className="trending flex justify-between">
            <div className="trending-topics">
              <div className="trending-head ">Development</div>
              <div className="trending-item">
                <Link to={"#"}>Python</Link>
                <div>36,354,994 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>Web Development</Link>
                <div>11,415,615 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>Machine Learning</Link>
                <div>7,070,015 learners</div>
              </div>
            </div>
            <div className="trending-topics">
              <div className="trending-head">Business</div>
              <div className="trending-item">
                <Link to={"#"}>Financial Analysis</Link>
                <div>1,195,282 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>SQL</Link>
                <div>5,977,561 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>PMP</Link>
                <div>1,733,398 learners</div>
              </div>
            </div>
            <div className="trending-topics">
              <div className="trending-head">IT and Software</div>
              <div className="trending-item">
                <Link to={"#"}>Amazon AWS</Link>
                <div>6,123,456 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>Ethical Hacking</Link>
                <div>10,931,066 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>Cyber Security</Link>
                <div>3,998,037 learners</div>
              </div>
            </div>
            <div className="trending-topics">
              <div className="trending-head">Design</div>
              <div className="trending-item">
                <Link to={"#"}>Photoshop</Link>
                <div>10,909,736 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>Graphic Design</Link>
                <div>3,381,052 learners</div>
              </div>
              <div className="trending-item">
                <Link to={"#"}>Drawing</Link>
                <div>2,410,849 learners</div>
              </div>
            </div>
          </div>
          <button className="border border-black text-sm font-bold w-[160px] h-[35px] mb-12 hover:bg-slate-200">
            Explore more topics
          </button>
        </div>
      </div>
      <div className="udemy-business my-16">
        <div className="container flex w-[80%] justify-around mx-auto">
          <div className="flex flex-col items-start max-w-[400px]">
            <img
              src={ubusiness}
              alt="Udemy Business"
              className="-ml-8 w-[250px] h-[70px] "
            />
            <h1 className="-ml-5 text-[#2d2f31] font-bold text-3xl">
              Upskill your team with Udemy Business
            </h1>
            <ul className="list-disc flex flex-col gap-2 mt-4 text-xl text-[#2d2f31]">
              <li>
                Unlimited access to 26,000+ top Udemy courses, anytime, anywhere
              </li>
              <li>International course collection in 14 languages</li>
              <li>Top certifications in tech and business</li>
            </ul>
            <div className="-ml-5 flex gap-2 mt-4">
              <button className="w-[180px] h-[40px] bg-[#2d2f31] text-white font-bold">
                Get Udemy Business
              </button>
              <button className="border border-black w-[110px] h-[40px] font-bold hover:bg-slate-200">
                Learn More
              </button>
            </div>
          </div>
          <img className="max-w-[400px] h-full" src={hero} alt="hero" />
        </div>
      </div>
      <Customers />
      <div className="udemy-business my-16">
        <div className="container flex w-[65%] justify-around mx-auto">
          <img className="max-w-[400px] h-full" src={instractor} alt="hero" />
          <div className="flex flex-col justify-center gap-4 items-start max-w-[400px]">
            <h1 className=" text-[#2d2f31] font-bold text-3xl">
              Become an instructor
            </h1>
            <p className=" text-[#2d2f31] font-normal text-xl">
              Instructors from around the world teach millions of learners on
              Udemy. We provide the tools and skills to teach what you love
            </p>
            <div className=" flex gap-2 mt-4">
              <button className="font-bold w-[170px] h-[50px] bg-[#2d2f31] text-white">
                Start teaching today
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
