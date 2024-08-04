import React, { Component, useEffect, useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import JODC_logo from  '../../images/jodcMascotWB.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../images/image1.jpg'

function PrevArrow({ onClick }) {
  return (
    <button className="slick-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button className="slick-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}


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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Header/>
      <div className='hero'>
        <img src={JODC_logo} alt="" className='logo' />
        <h1>JIIT <br />Open-Source Developer <br /> Circle</h1>
        </div>

        <div className='desc'>
            <h6>
            Hello and welcome to the <span style={{fontWeight:'bolder'}}>JIIT Open-Source Developer Circle!</span> We're a vibrant community passionate about all things open source. Whether you're a seasoned developer or just starting out, we're here to support your journey. From collaborating on exciting projects to learning from experienced mentors, there's always something new to discover.
            </h6>
        </div>
    
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={JODC_logo} alt="" className='carouselImages' />
        </div>
        <div>
        <img src={image1} alt="" className='carouselImages'/>
        </div>
        <div>
        <img src={image1} alt="" className='carouselImages' />
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Home
