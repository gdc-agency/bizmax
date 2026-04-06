import React from 'react'

export default function Step({imgUrl, title, desc, step}) {
  return (
    <div className="cs_step text-center position-relative">
      <div className="cs_step_thumb rounded-circle cs_pt_33 cs_pb_33 cs_pl_33 cs_pr_33 position-relative cs_mb_42">
        <img
          src={imgUrl}
          alt="Thumb"
          className="rounded-circle"
        />
        <span className="cs_step_number fw-semibold text-white cs_fs_26 cs_height_80 cs_width_80 rounded-circle bg-accent d-flex align-items-center justify-content-center position-absolute top-0 end-0">{step} </span>
      </div>
      <h2 className="cs_fs_26 cs_mb_15">{title}</h2>
      <p className="m-0">{desc}</p>
    </div>
  )
}
