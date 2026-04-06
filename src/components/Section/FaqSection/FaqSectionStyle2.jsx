import React from 'react'
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2'
import AccordionStyle2 from '../../Accordion/AccordionStyle2'

export default function FaqSectionStyle2({data}) {
  return (
    <div className="container">
      <SectionHeadingStyle2 sectionTitleUp='Frequently Asked Questions' sectionTitle='Questions & Answers'/>
      <AccordionStyle2 data={data} />
    </div>
  )
}
