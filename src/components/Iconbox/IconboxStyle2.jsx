import React from 'react'

export default function IconboxStyle2({imgUrl, titleUp, title, textColor}) {
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-center cs_height_90 cs_width_90 cs_height_lg_80 cs_width_lg-80 cs_rounded_10 flex-none cs_mr_20 bg-accent">
        <img src={imgUrl} alt="contact-icon" />
      </div>
      <div>
        <p className="text-accent cs_mb_7">{titleUp}</p>
        <h2 className={`${textColor} m-0 fw-medium cs_fs_22 cs_fs_lg_18 cs_lh_base`}>
          {title}
        </h2>
      </div>
    </div>
  )
}
