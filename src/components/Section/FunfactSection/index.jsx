import React from 'react'
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3'
import Funfact from '../../Funfact'

export default function FunfactSection({data,sectionTitleUp, sectionTitle, sectionSubTitle, imgUrl,shapeImgUrl}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-xl-6">
          <div className="cs_statis_text_section">
            <SectionHeadingStyle3 sectionTitleUp={sectionTitleUp} sectionTitle={sectionTitle} sectionSubTitle={sectionSubTitle} className='cs_mb_50'/>
            <div className="row cs_row_gap_24">
              {data.map((item, index)=>(
                <div className="col-md-6" key={index}>
                <Funfact {...item} />
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="cs_with_shape_image_box_1 position-relative">
            <img
              className="position-relative cs_zindex_2"
              src={imgUrl}
              alt="Thumb"
            />
            <img
              className="cs_shape_1 position-absolute moving_x"
              src={shapeImgUrl}
              alt="Shape"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
