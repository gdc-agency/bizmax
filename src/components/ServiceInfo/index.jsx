import React from 'react'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'

export default function ServiceInfo({sectionTitleDown, textVariant, sectionBtnUrl, sectionBtnText }) {
  return (
    <div className="cs_service_1-info  text-center cs_mt_40 d-flex justify-content-center align-items-center flex-wrap">
      {sectionTitleDown && (
        <h4 className={`fw-normal m-0 ${textVariant}`}>{parser(sectionTitleDown)}</h4>
      )}
      <Link
        to={sectionBtnUrl}
        className="cs_btn cs_style_1 cs_fs_16  overflow-hidden cs_fs_16 cs_rounded_25 cs_pl_20 cs_pr_20 cs_pt_7 cs_pb_7"
      >
        <span>{sectionBtnText}</span>
      </Link>
    </div>
  )
}
