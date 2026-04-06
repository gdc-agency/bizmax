import React from 'react'
import Ratings from '../Rating'

export default function TestimonialStyle2({imgUrl, subTitle, rating, designation, name}) {
  return (
    <div className="cs_testimonial_thumb-item">
      <img
        src={imgUrl}
        alt="Thumb"
        className="cs_height_150 cs_width_150 rounded-circle position-absolute start-0 top-0 cs_ml_17"
      />
      <div className="cs_mb_30" data-rating={5}>
        <Ratings ratingNumber={rating}/>
      </div>
      <blockquote className="cs_testimonial_text cs_fs_26 cs_fs_lg_22 text-white fw-medium">
        {subTitle}
      </blockquote>
      <div className="cs_testimonial_info d-flex cs_mt_16 cs_column_gap_13">
        <h2 className="cs_fs_18 fw-medium text-white m-0">{name}</h2>
        <h3 className="cs_fs_18 fw-normal text-accent m-0">{designation}</h3>
      </div>
    </div>
  )
}
