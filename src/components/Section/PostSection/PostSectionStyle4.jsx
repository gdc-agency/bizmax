import React from 'react';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import PostStyle3 from '../../Post/PostStyle3';

export default function PostSectionStyle4({
  data,
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <SectionHeadingStyle2
        sectionTitle={sectionTitle}
        sectionTitleUp={sectionTitleUp}
      />
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <PostStyle3 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
