import React from 'react'
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2'
import TestimonialSliderStyle2 from '../../Slider/TestimonialSliderStyle2'

export default function PortfolioSectionStyle3({data, sectionTitle, sectionTitleUp,sectionSubTitle}) {
  return (
    <div className="container">
      <SectionHeadingStyle2 sectionTitle={sectionTitle} sectionTitleUp={sectionTitleUp} sectionSubTitle={sectionSubTitle}/>
      <TestimonialSliderStyle2 data={data} />
    </div>
  )
}
