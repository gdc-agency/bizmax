import React, { useRef } from 'react'
import TestimonialSlider from '../../Slider/TestimonialSlider'
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';
import ArrowWidget from '../../Widget/ArrowWidget';

export default function TestimonialSection({data, sectionTitleUp, sectionTitle, sectionSubTitle}) {

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="cs_testimonial_slider cs_gap_30">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 cs_mb_lg_40">
            <SectionHeadingStyle3
              sectionTitleUp={sectionTitleUp}
              sectionTitle={sectionTitle} 
              sectionSubTitle={sectionSubTitle}
              className='cs_mb_30'
            />
            <ArrowWidget handleNext={next} handlePrev={previous} />
          </div>
          <div className="col-lg-8">
            <TestimonialSlider data={data} sliderRef={sliderRef}/>
          </div>
        </div>
      </div>
    </div>
  )
}
