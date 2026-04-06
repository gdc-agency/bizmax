import React from 'react'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'

export default function SectionHeadingStyle5({sectionTitleUp, sectionTitle, sectionBtnUrl, sectionBtnText}) {
  return (
    <div className="cs_section_heading cs_style_1 d-flex align-items-center cs_mb_60 cs_mb_lg_40 cs_column_gap_15 cs_row_gap_15 cs_mb_60 cs_mb_lg_40">
      <div className="cs_section_heading_in">
        <h3
          className="cs_fs_20 cs_fs_lg_18 text-accent fw-normal cs_lh_base cs_mb_10 wow fadeInLeft"
          data-wow-duration="0.8s"
          // data-wow-delay="0.2s"
        >{parser(sectionTitleUp)}</h3>
        <h2 className="cs_fs_48 cs_fs_lg_36 m-0">{parser(sectionTitle)}</h2>
      </div>
      <div className="cs_section_heading_right">
        <div className="text-end">
          <Link to={sectionBtnUrl} className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"><span>{sectionBtnText}</span></Link>
        </div>
      </div>
    </div>
  )
}
