import React from 'react';
import Post from '../../Post';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function PostSection({ data, sectionTitleUp, sectionTitle }) {
  return (
    <div className="container">
      <SectionHeadingStyle2
        sectionTitleUp={sectionTitleUp}
        sectionTitle={sectionTitle}
      />
      <div className="row">
        {data?.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <Post {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
