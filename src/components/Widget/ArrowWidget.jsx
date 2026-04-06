import React from 'react'

export default function ArrowWidget({handlePrev, handleNext, className}) {
  return (
    <div className={`d-flex cs_column_gap_15 ${className ? className : ""}`}>
      <div className="cs_slider_prev filter cs_height_45 cs_width_45 bg-white rounded-circle d-flex align-items-center justify-content-center bg-accent-hover cs_transition_4" onClick={()=> handlePrev()}>
        <img src="/images/icons/prev_arrow.svg" alt="arrow-left" />
      </div>
      <div className="cs_slider_next filter cs_height_45 cs_width_45 bg-white rounded-circle d-flex align-items-center justify-content-center bg-accent-hover cs_transition_4" onClick={()=> handleNext()}>
        <img src="/images/icons/next_arrow.svg" alt="arrow-right" />
      </div>
    </div>
  )
}
