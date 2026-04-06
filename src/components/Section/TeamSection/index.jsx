import React from 'react';
import Team from '../../Team';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function TeamSection({ data, sectionTitle, sectionTitleUp }) {
  return (
    <div className="container">
      {sectionTitle && (
        <SectionHeadingStyle2
          sectionTitle={sectionTitle}
          sectionTitleUp={sectionTitleUp}
        />
      )}

      <div className="row">
        {data?.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <Team
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              designation={item.designation}
              srcUrl={item.srcUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
