import React from 'react';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';
import IconboxStyle3 from '../../Iconbox/IconboxStyle3';

export default function AboutSectionStyle2({
  imgUrl,
  bgImgUrl,
  workExprience,
  workExprienceTitle,
  sectionTitleUp,
  sectionTitle,
  sectionSubTitle,
  featureList,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-7">
          <img src={imgUrl} alt="about" />
        </div>
        <div className="col-xl-5">
          <div className="cs_about-1-spacing">
            <div className="cs_about cs_style_1">
              <SectionHeadingStyle3
                sectionTitleUp={sectionTitleUp}
                sectionTitle={sectionTitle}
                sectionSubTitle={sectionSubTitle}
                className="cs_mb_25"
              />
              {featureList?.map((item, index) => (
                <IconboxStyle3 key={index} {...item} />
              ))}
              <div
                className="cs_experience_box background-filled bg-white cs_rounded_10 cs_zindex_3 d-flex flex-column justify-content-end align-items-start shadow-lg cs_pl_30 cs_pb_30"
                style={{ backgroundImage: `url('${bgImgUrl}')` }}
              >
                <h3 className="text-white cs_fs_60 fw-bold lh_1 cs_mb_10 d-flex justify-content-between">
                  {workExprience}
                  <span className="fw-light">+</span>
                </h3>
                <h2 className="cs_fs_18 fw-normal text-white m-0">
                  {workExprienceTitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
