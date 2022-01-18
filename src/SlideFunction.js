import React, { useState } from 'react';
import { images } from './imgArray.js';
import './css/slide.css';

const SlideFunction = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const NextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const PrevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  return (
    <>
      {images.map((slide, index) => {
        return (
          <div key={slide.id} className="slide-container">
            <img src={slide.image} key={slide.id} className={slideIndex === index + 1 ? 'slides active' : 'slides'} />
            <div className={slideIndex === index + 1 ? 'text-container active' : 'text-container'}>
              <h3 key={slide.title} className={slideIndex === index + 1 ? 'title active' : 'title'}>
                {slide.title}
              </h3>
              <p key={slide.text} className={slideIndex === index + 1 ? 'text active' : 'text'}>
                {' '}
                {slide.text}
              </p>
              <hr />
              <a className="root">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        );
      })}
      <div className="slide-btn">
        <div className="prevBtn" onClick={PrevSlide}>
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </div>
        <div className="nextBtn" onClick={NextSlide}>
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SlideFunction;
