import React from 'react';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';
import IconboxStyle3 from '../../Iconbox/IconboxStyle3';
import VideoBlock from '../../VideoBlock';
import Button from '../../Button';

export default function AboutSectionStyle3({
  imgUrl,
  bgImgUrl,
  workExprience,
  workExprienceTitle,
  sectionTitle,
  sectionTitleUp,
  sectionSubTitle,
  featureList,
  btnText,
  btnUrl,
  videoBtnText,
  videoBtnUrl,
}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-xxl-6 col-xl-6">
          <div className="cs_experience cs_style_1 cs_type_1 position-relative">
            <div className="cs_experience_thumb">
              <img
                src={imgUrl}
                alt="Thumb"
                className="position-relative cs_zindex_3 cs_rounded_15"
              />
            </div>
            <div
              className="cs_experience_box background-filled text-center bg-white cs_rounded_10 position-absolute cs_zindex_3 d-flex flex-column justify-content-center align-items-center"
              style={{ backgroundImage: `url(${bgImgUrl})` }}
            >
              <img
                src="/images/experience_icon.svg"
                alt="Icon"
                className="cs_mb_5"
              />
              <h3 className="text-white cs_fs_60 cs_fs_lg_46 fw-bold lh_1 mb-0 d-flex justify-content-between">
                <span>{workExprience}</span>
                <span className="fw-light">+</span>
              </h3>
              <h2 className="cs_fs_18 fw-normal text-white m-0">
                {workExprienceTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="col-xl-5 offset-xxl-1">
          <div className="cs_about cs_style_1">
            <SectionHeadingStyle3
              sectionTitle={sectionTitle}
              sectionTitleUp={sectionTitleUp}
              sectionSubTitle={sectionSubTitle}
              className="cs_mb_25"
            />
            <div className="cs_mb_40">
              {featureList?.map((item, index) => (
                <IconboxStyle3 key={index} {...item} />
              ))}
            </div>
            <div className="d-flex align-items-center cs_row_gap_20 cs_column_gap_30 cs_column_gap_lg_20 flex-wrap">
              <Button btnText={btnText} btnUrl={btnUrl} />
              <VideoBlock videoSrc={videoBtnUrl} videoBtnText={videoBtnText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
