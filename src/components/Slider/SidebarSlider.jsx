import { Icon } from '@iconify/react';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export default function SidebarSlider({data}) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <div className="position-relative cs_sidebar_slider">
      <Slider ref={sliderRef} {...settings} className="cs_slider_activate cs_rounded_12 overflow-hidden">
        {data.map((item, index)=>(
          <Link to={item.srcUrl} className="cs_sidebar_project" key={index}>
            <img src={item.imgUrl} alt="" />
            <span>{item.title}</span>
          </Link>
        ))}
      </Slider>
      <div className="cs_slider_prev filter cs_height_30 cs_width_30 bg-white rounded-circle d-flex align-items-center justify-content-center bg-accent-hover cs_transition_4 position-absolute" onClick={previous}>
        <Icon icon="fa:angle-left" />
      </div>
      <div className="cs_slider_next filter cs_height_30 cs_width_30 bg-white rounded-circle d-flex align-items-center justify-content-center bg-accent-hover cs_transition_4 position-absolute" onClick={next}>
        <Icon icon="fa:angle-right" />
      </div>
    </div>
  )
}
