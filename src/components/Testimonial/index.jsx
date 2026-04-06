import React from 'react'
import Ratings from '../Rating'

export default function Testimonial({imgUrl, rating, desc, name ,designation }) {
  return (
    <div className="cs_testimonial cs_style_1 cs_pt_20">
      <div className="cs_testimonial_in bg-white shadow-sm cs_pl_30 cs_pr_30 cs_pb_27 cs_pt_1 cs_rounded_10">
        <div className="cs_testimonial_img cs_mb_15">
          <img
            src={imgUrl}
            alt="Avatar"
            className="cs_height_75 cs_width_75 rounded-circle"
          />
        </div>
        <Ratings ratingNumber={rating}/>
        <p className="cs_mb_14">{desc}</p>
        <h3 className="cs_fs_18 cs_mb_2 cs_lh_base">{name}</h3>
        <p className="m-0 cs_fs_14 cs_lh_base">{designation}</p>
      </div>
    </div>
  )
}
