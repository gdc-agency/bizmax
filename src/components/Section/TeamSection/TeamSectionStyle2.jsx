import React from 'react';
import TeamStyle2 from '../../Team/TeamStyle2';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function TeamSectionStyle2({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <>
      <div className="container">
        <SectionHeadingStyle2
          sectionTitle={sectionTitle}
          sectionTitleUp={sectionTitleUp}
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <TeamStyle2
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
    </>
  );
}
