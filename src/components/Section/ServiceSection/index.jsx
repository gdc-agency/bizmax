import React from 'react';
import Service from '../../Service';
import ServiceInfo from '../../ServiceInfo';
import SectionHeading from '../../SectionHeading';

export default function ServiceSection({
  sectionTitleUp,
  sectionTitle,
  sectionSubTitle,
  sectionTitleDown,
  sectionBtnText,
  sectionBtnUrl,
  data,
  textVariant,
}) {
  return (
    <div className="container">
      {sectionTitle && (
        <SectionHeading
          sectionTitleUp={sectionTitleUp}
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
        />
      )}

      <div className="row">
        {data?.map((item, index) => (
          <div className="col-xl-3 col-md-6" key={index}>
            <Service {...item} />
          </div>
        ))}
      </div>
      <ServiceInfo
        sectionTitleDown={sectionTitleDown}
        sectionBtnText={sectionBtnText}
        sectionBtnUrl={sectionBtnUrl}
        textVariant={textVariant}
      />
    </div>
  );
}
