
import React, { useEffect } from 'react';
import Slider from 'react-slick';


import brandlogo1 from "./images/jbhunts.png";
import brandlogo2 from "./images/southrenlogo.png";
import brandlogo6 from "./images/FedEx-Logo.png";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Sponsorslider() {
    const isSmallScreen = window.innerWidth < 600;
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 5000, // Set a higher speed for faster movement
      slidesToShow: isSmallScreen ? 2: 4.5,
      autoplay: true,
      autoplaySpeed: 0, // Set to 0 for continuous movement
      cssEase: 'linear',
      slidesToScroll: 1,
      arrows: false,
    };
    
    

  return (
    <section className="brand__area">
      <div className="container">
        <div className="row g-4 align-items-center">
        <div className="col-xl-3">
            <div
              className="brand__title"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1000}
            >
              <div className="section__title text-start">
                <span>Our Trusted Shipping
                Partners!</span>
                <h3 className='borderforbottom'>Main partners</h3>
              </div>
            </div>
          </div>
          <div
            className="col-xl-9"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1000}
          >
            <Slider {...sliderSettings}>
              <div className="brand__slide">
                <a href="#">
                  <img className='sponsorlogo' src={brandlogo1} alt="" />
                </a>
              </div>
              <div className="brand__slide">
                <a href="#">
                  <img className='sponsorlogo' src={brandlogo2} alt="" />
                </a>
              </div>
              
              <div className="brand__slide">
                <a href="#">
                  <img className='sponsorlogo' src={brandlogo6} alt="" />
                </a>
              </div>
              <div className="brand__slide">
                <a href="#">
                  <img className='sponsorlogo' src={brandlogo1} alt="" />
                </a>
              </div>
              <div className="brand__slide">
                <a href="#">
                  <img className='sponsorlogo' src={brandlogo2} alt="" />
                </a>
              </div>
              <div className="brand__slide">
                <a href="#">
                  <img className='sponsorlogo'  src={brandlogo6} alt="" />
                </a>
              </div>
             

              {/* Repeat for other brand slides */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorslider;
