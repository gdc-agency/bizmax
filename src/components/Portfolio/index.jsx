import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio({projectUrl, imgUrl, title}) {
  return (
    <div className="cs_portfolio cs_style_1 position-relative overflow-hidden">
      <Link to={projectUrl} className="cs_portfolio_overlay cs_transition_4 position-absolute h-100 w-100 start-0 top-0 cs_zindex_1 d-block"></Link>
      <div className="cs_portfolio_thumb d-block h-100 w-100 background-filled cs_transition_6" style={{backgroundImage: `url('${imgUrl}')`}}></div>
      <h3 className="cs_portfolio_title m-0 cs_fs_26 text-white cs_pl_50 cs_pb_45 cs_mr_50 position-relative cs_zindex_4 position-absolute start-0 bottom-0 w-100 cs_transition_4"><Link to={projectUrl}>{title}</Link></h3>
    </div>
  )
}
