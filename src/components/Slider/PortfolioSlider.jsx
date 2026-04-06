import React, { useRef } from 'react'
import Slider from 'react-slick';
import Portfolio from '../Portfolio';
import SectionHeadingStyle4 from '../SectionHeading/SectionHeadingStyle4';

export default function PortfolioSlider({data, sectionTitle, sectionTitleUp}) {

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
        breakpoint: 1349,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="container">
        <SectionHeadingStyle4 sectionTitleUp={sectionTitleUp} sectionTitle={sectionTitle}  handlePrev={previous} handleNext={next} />
      </div>
      <Slider ref={sliderRef} {...settings} className="cs_slider_activate">
      {data?.map((item, index) => (
          <div key={index}>
            <Portfolio {...item}/>
          </div>
        ))}
      </Slider>
    </>
  )
}
