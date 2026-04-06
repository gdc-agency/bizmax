import React from 'react';
import Service from '../../Service';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function ServiceSectionStyle4({
  data,
  sectionTitleUp,
  sectionTitle,
}) {
  return (
    <div className="container">
      <SectionHeadingStyle2
        sectionTitleUp={sectionTitleUp}
        sectionTitle={sectionTitle}
      />
      <div className="row">
        {data?.map((item, index) => (
          <div className="col-xl-3 col-md-6" key={index}>
            <Service {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
