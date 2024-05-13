import React, { useState } from 'react';
import '../css/carousel.css';
import c1 from '../assets/app-banner-1.png';
import c2 from '../assets/app-banner-2.png';
import Slider from 'react-slick';

const images = [c1, c2,];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div style={{ width: '100%', maxWidth: 500, margin: '0 auto', position: 'relative', marginTop: '3%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', zIndex: 10, bottom: '2%', margin: '0 auto', marginLeft: -20, height: 10, width: 10, backgroundColor: currentSlide === 0 ? '#007aff' : '#444649', borderRadius: 10 }}></div>
        <div style={{ position: 'absolute', zIndex: 10, bottom: '2%', margin: '0 auto', marginLeft: 20, height: 10, width: 10, backgroundColor: currentSlide === 1 ? '#007aff' : '#444649', borderRadius: 10 }}></div>
      </div>
      <Slider {...settings}>
        {
          images.map((image, index) => (
            <div key={index}>
              <img src={image} className='carouselImage' alt={`Slide ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default Carousel;
