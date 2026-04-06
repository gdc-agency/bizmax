import React from 'react'
import { Link } from 'react-router-dom'

export default function IconboxStyle5({iconUrl, href, title}) {
  return (
    <div className="cs_service_iconbox d-flex align-items-center cs_mb_20">
      <div className="cs_service_icon d-flex align-items-center justify-content-center cs_rounded_5 cs_mr_15 cs_transition_4 flex-none bg-primary cs_height_70 cs_width_70">
        <img src={iconUrl} alt="service-icon" />
      </div>
      <h2 className="cs_lh_base cs_fs_20 cs_fs_lg_18 m-0">
        {href ? <Link to={href} className="inline-block">{title}</Link> : <span>{title}</span>}
      </h2>
    </div>
  )
}
