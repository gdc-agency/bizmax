import React from 'react'

export default function Iconbox({imgUrl, title}) {
  return (
    <div className="cs_iconbox cs_style_1 d-flex align-items-center cs_mb_40">
      <div className="cs_iconbox_icon d-flex align-items-center           justify-content-center cs_height_70 cs_width_70 cs_rounded_10 flex-none cs_mr_20 bg-accent cs_transition_4 wow zoomIn"
        data-wow-duration="0.8s"
        data-wow-delay="0.2s"
      >
        <img src={imgUrl}  alt='iconbox icon'/>
      </div>
      <div>
        <h2 className="text-white m-0 cs_fs_20 cs_fs_lg_18 cs_lh_base">{title}</h2>
      </div>
    </div>
  )
}
