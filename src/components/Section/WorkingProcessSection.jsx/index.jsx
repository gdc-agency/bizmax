import React from 'react';
import Step from '../../Step';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function WorkingProcessSection({
  sectionTitleUp,
  sectionTitle,
  data,
}) {
  return (
    <div className="container">
      <SectionHeadingStyle2
        sectionTitleUp={sectionTitleUp}
        sectionTitle={sectionTitle}
      />
      <div className="cs_steps cs_style_1">
        {data.map((item, index) => (
          <Step {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
