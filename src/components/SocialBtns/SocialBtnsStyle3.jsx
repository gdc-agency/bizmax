import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialBtnsStyle3() {
  return (
    <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_color_1 cs_mb_30">
      <Link to='/'
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:facebook-f" />
      </Link>
      <Link to='/'
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link to='/'
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link to='/'
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:dribbble" />
      </Link>
    </div>
  )
}
