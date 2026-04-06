import React from 'react'
import PortfolioSlider from '../../Slider/PortfolioSlider'

export default function PortfolioSection({data, sectionTitle, sectionTitleUp}) {
  return (
    <PortfolioSlider sectionTitle={sectionTitle} sectionTitleUp={sectionTitleUp} data={data} />
  )
}
