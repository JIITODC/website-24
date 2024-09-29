import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import JODC_logo from "../../images/jodcMascotWB.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/image1.jpg";
import teamData from "../../data/team.json";
import Footer from "../Footer/Footer";
import { Carouselhome } from "../Carousel";
import { TeamCards } from "./TeamCards";


const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-200 border-none rounded-full w-10 h-10 flex justify-center items-center pb-0.5"
      onClick={onClick}
    >
      <span>&lt;</span>
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-200 border-none rounded-full w-10 h-10 flex justify-center items-center pb-0.5"
      onClick={onClick}
    >
      <span>&gt;</span>
    </button>
  );
};

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header />

      <div className="w-full h-88 pt-32 flex justify-center items-center md:pt-20">
        <img src={JODC_logo} alt="" className="h-40 w-40 md:h-72 md:w-72" />
        <h1 className="h-28 w-36 md:w-72 text-3xl text-gray-300 flex items-center md:text-5xl">
          JIIT <br />
          Open-Source Developer <br /> Circle
        </h1>
      </div>

      <div className="text-gray-300 flex justify-center mt-24 mb-72 sm:mb-20 md:mb-14 p-5">
        <h6 className="w-full max-w-7xl h-16 text-xl text-center leading-relaxed font-medium">
          Hello and welcome to the{" "}
          <span className="font-bold">JIIT Open-Source Developer Circle!</span> We're
          a vibrant community passionate about all things open source. Whether you're
          a seasoned developer or just starting out, we're here to support your
          journey. From collaborating on exciting projects to learning from
          experienced mentors, there's always something new to discover.
        </h6>
      </div>

    <Carouselhome />

      <div className="w-full h-2/3">
        <div className="pt-2 w-full h-4 text-center  text-white pb-12">
          <h1 className="text-4xl font-bold">Meet the OG's</h1>
        </div>

      <TeamCards />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
