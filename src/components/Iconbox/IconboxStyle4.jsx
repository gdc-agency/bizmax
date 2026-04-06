import React from 'react'

export default function IconboxStyle4({title, imgUrl}) {
  return (
    <div className="cs_iconbox cs_style_3 d-flex align-items-center  cs_pl_22 cs_pr_22 cs_pt_24 cs_pb_24 cs_rounded_5 cs_mb_25 cs_transition_4">
      <div className="cs_iconbox_icon d-flex flex-none cs_mr_20 cs_transition_4">
        <img src={imgUrl} alt="" />
      </div>
      <h3 className="m-0 text-white cs_lh_base cs_fs_16">{title}</h3>
    </div>
  )
}
