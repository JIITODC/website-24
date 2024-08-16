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

const PrevArrow = ({ onClick }) => {
  return (
    <button className="prev-arrow" onClick={onClick}>
      <span>&lt;</span>
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button className="next-arrow" onClick={onClick}>
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
      <div className="hero">
        <img src={JODC_logo} alt="" className="logo" />
        <h1>
          JIIT <br />
          Open-Source Developer <br /> Circle
        </h1>
      </div>

      <div className="desc1">
        <h6>
          Hello and welcome to the{" "}
          <span style={{ fontWeight: "bolder" }}>
            JIIT Open-Source Developer Circle!
          </span>{" "}
          We're a vibrant community passionate about all things open source.
          Whether you're a seasoned developer or just starting out, we're here
          to support your journey. From collaborating on exciting projects to
          learning from experienced mentors, there's always something new to
          discover.
        </h6>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={JODC_logo} alt="" className="carouselImages" />
          </div>
          <div>
            <img src={image1} alt="" className="carouselImages" />
          </div>
          <div>
            <img src={image1} alt="" className="carouselImages" />
          </div>
        </Slider>
      </div>

      <div className="team">
        <div className="title">
          <h1>Meet the OG's</h1>
        </div>

        <div className="cards1">
          {teamData &&
            teamData.map((data) => {
              return (
                <div className="team1" id={data.id}>
                  <h1>{data.name}</h1>
                  <h5>{data.post}</h5>
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
