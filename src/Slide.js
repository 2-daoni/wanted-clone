import React, { useRef, useState } from 'react';
import { images } from './imgArray.js';
import './css/slide.css';

const Slide = () => {
  const slides = useRef();
  const imagesSlide = [...images, ...images, ...images];

  const [slideIndex, setSlideIndex] = useState(1);

  const NextSlide = ({ autoflow = 3000 }) => {
    if (slideIndex !== imagesSlide.length) {
      setSlideIndex(slideIndex + 1, autoflow);
      slides.current.style.transform = `translate3d(-${1084 * slideIndex - (window.innerWidth - 1060) / 2 + 50}px, 0, 0)`;
    } else if (slideIndex === imagesSlide.length) {
      setSlideIndex(imagesSlide.length / 3);
      slides.current.style.transform = `translate3d(-${1084 * slideIndex - (window.innerWidth - 1060) / 2 + 50}px, 0, 0)`;
    }
  };

  const PrevSlide = ({ autoflow = 3000 }) => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1, autoflow);
      slides.current.style.transform = `translate3d(-${1084 * slideIndex - (window.innerWidth - 1060) / 2 + 50}px, 0, 0)`;
    } else if (slideIndex === 1) {
      setSlideIndex(imagesSlide.length / 3);
      slides.current.style.transform = `translate3d(-${1084 * slideIndex - (window.innerWidth - 1060) / 2 + 50}px, 0, 0)`;
    }
  };

  return (
    <>
      <div className="slide-container" ref={slides} style={{ width: `${imagesSlide.length * 1084}px` }}>
        {imagesSlide &&
          imagesSlide.map((image, index) => (
            <div key={index}>
              <img src={image.image} key={index} className="slides" className={slideIndex === index + 1 ? 'slides active' : 'slides'}></img>

              <div className="text-container">
                <h3 className="title">{image.title}</h3>
                <p className="text">{image.text}</p>
                <hr />
                <a className="root">
                  바로가기 <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          ))}
      </div>
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

export default Slide;
