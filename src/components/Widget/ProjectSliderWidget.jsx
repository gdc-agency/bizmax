import React from 'react'
import SidebarSlider from '../Slider/SidebarSlider'

export default function ProjectSliderWidget({title, data}) {
  return (
    <div className="cs_sidebar_item">
      <h4 className="cs_sidebar_widget_title">{title}</h4>
      <SidebarSlider data={data} />
    </div>
  )
}
