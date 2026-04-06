import React from 'react'
import SectionHeading from '../../SectionHeading'
import FormStyle3 from '../../Form/FormStyle3'

export default function InsuranceSection({sectionTitleUp, sectionTitle, imgUrl}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40 cs_reverse_direction_lg">
        <div className="col-lg-6">
          <SectionHeading sectionTitleUp={sectionTitleUp} sectionTitle={sectionTitle}/>
          <FormStyle3 />
        </div>
        <div className="col-lg-5 offset-lg-1">
          <img src={imgUrl} alt="insurance" />
        </div>
      </div>
    </div>
  )
}
