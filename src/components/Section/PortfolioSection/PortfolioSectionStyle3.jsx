import React from 'react'
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2'
import PortfolioSliderStyle2 from '../../Slider/PortfolioSliderStyle2'

export default function PortfolioSectionStyle3({data, sectionTitle, sectionTitleUp}) {
  return (
    <div className="container">
      <SectionHeadingStyle2 sectionTitle={sectionTitle} sectionTitleUp={sectionTitleUp}/>
      <PortfolioSliderStyle2 data={data} />
    </div>
  )
}
