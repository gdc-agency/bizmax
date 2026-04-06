import React from 'react';
import PostStyle2 from '../../Post/PostStyle2';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';

export default function PostSectionStyle2({
  sectionTitleUp,
  sectionTitle,
  data,
}) {
  return (
    <>
      <div className="container">
        <SectionHeadingStyle3
          sectionTitleUp={sectionTitleUp}
          sectionTitle={sectionTitle}
          className="cs_mb_40 cs_mb_lg_20"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-xl-4" key={index}>
              <PostStyle2 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
