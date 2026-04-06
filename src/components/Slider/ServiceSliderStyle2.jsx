import React, { useRef } from 'react';
import SectionHeadingStyle4 from '../SectionHeading/SectionHeadingStyle4';
import Slider from 'react-slick';
import ServiceStyle3 from '../Service/ServiceStyle3';

export default function ServiceSliderStyle2({
  data,
  sectionTitle,
  sectionTitleUp,
}) {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="cs_service_slider cs_gap_24">
        <SectionHeadingStyle4
          sectionTitleUp={sectionTitleUp}
          sectionTitle={sectionTitle}
          handlePrev={previous}
          handleNext={next}
        />
        <Slider ref={sliderRef} {...settings} className="cs_slider_activate">
          {data?.map((item, index) => (
            <ServiceStyle3 {...item} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
