import React from 'react'
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3'
import { Link } from 'react-router-dom'

export default function AboutSectionStyle4({imgUrl,sectionTitle, sectionTitleUp,sectionSubTitle, srcUrl, aboutList}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-xl-6">
          <div className="cs_experience cs_style_1 cs_type_2 position-relative">
            <div className="cs_experience_thumb">
              <img
                src={imgUrl}
                alt="Thumb"
                className="position-relative cs_zindex_3 cs_rounded_15"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="cs_about cs_style_1">
            <SectionHeadingStyle3
              sectionTitleUp={sectionTitleUp}
              sectionTitle={sectionTitle}
              sectionSubTitle={sectionSubTitle}
              className='cs_mb_25'
            />
            <ul className="cs_list cs_style_2 cs_mb_30">
              {aboutList.map((item, index)=>(
                <li key={index}>
                  <i>
                    <img src="/images/icons/shield.svg" alt="Icon" />
                  </i>
                  {item}
              </li>
              ))}              
            </ul>
            <div className="d-flex align-items-center cs_row_gap_20 cs_column_gap_30 cs_column_gap_lg_20 flex-wrap">
              <Link to={srcUrl}
                className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
              >
                <span>Get A Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
