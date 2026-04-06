import React from 'react';
import Slider from 'react-slick';
import Testimonial from '../Testimonial';

export default function TestimonialSlider({ data, sliderRef }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <Slider ref={sliderRef} {...settings} className="cs_slider_activate">
      {data.map((item, index) => (
        <div className="cs_slide" key={index} style={{ width: 320 }}>
          <Testimonial {...item} />
        </div>
      ))}
    </Slider>
  );
}
