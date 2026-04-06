import React from 'react'

export default function Funfact({iconUrl, funfactNumber, title}) {
  return (
    <div className="cs_funfact cs_style_1 d-flex cs_column_gap_20 align-items-center cs_rounded_5">
      <div className="cs_funfact_icon d-flex align-items-center justify-content-between">
        <img src={iconUrl} alt="funfact-icon" />
      </div>
      <div className="cs_funfact_right">
        <h2 className="cs_funfact_number cs_fs_32 cs_mb_0">
          <span>{funfactNumber}K</span>
        </h2>
        <h3 className="cs_funfact_title cs_fs_16 cs_mb_0 fw-normal">{title}</h3>
      </div>
    </div>
  )
}
