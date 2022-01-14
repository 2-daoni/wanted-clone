import React from 'react';
import './css/slide.css';

const Slide = () => {
  return (
    <div className="slide-container">
      <div className="slides">
        <img src={process.env.PUBLIC_URL + '/images/slides/1.jpg'} className="slide prevImg"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/2.jpg'} className="slide active"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/3.jpg'} className="slide nextImg"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/4.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/5.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/6.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/7.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/8.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/9.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/10.jpg'} className="slide"></img>
        <img src={process.env.PUBLIC_URL + '/images/slides/11.jpg'} className="slide"></img>
        <div className="slide-btn">
          <div className="prevBtn">
            <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </div>
          <div className="nextBtn">
            <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
