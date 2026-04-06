import React from 'react';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';
import Accordion from '../../Accordion';
import { Icon } from '@iconify/react';

export default function FaqSection({
  sectionTitleUp,
  sectionTitle,
  sectionSubTitle,
  bgImgUrl,
  imgUrl,
  iconUrl,
  data,
  featureTitle,
  featureList,
}) {
  return (
    <>
      <div className="position-relative cs_zindex_1">
        <div className="container position-relative cs_zindex_1">
          <div className="row align-items-end">
            <div className="col-lg-6 cs_pr_0 cs_pr_lg_12 cs_pt_lg_60">
              <div className="cs_faq cs_style_1 cs_pt_70 cs_pb_70 cs_pl_70 cs_pr_70 cs_pl_lg_25 cs_pr_lg_25 bg-white shadow-lg">
                <SectionHeadingStyle3
                  sectionTitleUp={sectionTitleUp}
                  sectionTitle={sectionTitle}
                  sectionSubTitle={sectionSubTitle}
                  className="cs_mb_54"
                />
                <Accordion data={data} />
              </div>
            </div>
            <div className="col-lg-6 cs_pl_0 cs_pl_lg_12">
              <div
                className="cs_pl_70 cs_pl_lg_25 cs_pr_70 cs_pr_lg_25 cs_pb_43 cs_pb_lg_25 cs_pt_77 background-filled"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              >
                <div className="d-flex align-items-center justify-content-center cs_height_80 cs_width_80 cs_rounded_10 flex-none cs_mr_20 bg-accent cs_mb_25">
                  <img src={iconUrl} alt="" />
                </div>
                <h2 className="text-uppercase text-white cs_fs_26 cs_mb_15">
                  {featureTitle}
                </h2>
                {featureList?.map((item, index) => (
                  <div
                    className="cs_about-icon-box position-relative cs_mb_10"
                    key={index}
                  >
                    <span className="position-absolute cs_height_20 cs_width_20 top-0 start-0 cs_mt_5 bg-accent text-white cs_fs_10 d-flex align-items-center justify-content-center cs_rounded_30">
                      <Icon icon="fa6-solid:angles-right" />
                    </span>
                    <h3 className="cs_fs_16 cs_pl_35 cs_mb_0 cs_lh_lg text-white">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="cs_faq-1-bg background-filled position-absolute start-0 top-0 w-100"
          style={{ backgroundImage: `url(${bgImgUrl})` }}
        />
      </div>
      <div className="cs_section_shape-2 position-absolute">
        <svg
          width={331}
          height={318}
          viewBox="0 0 331 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M176.845 173.984C206.716 187.913 237.543 194.829 263.601 193.469C263.761 193.461 263.911 193.443 264.068 193.435L265.939 8.22288C266.002 1.6744 258.694 -2.25784 253.267 1.40384L97.4697 106.51C110.091 130.558 139.24 156.445 176.845 173.984Z"
            fill="#666666"
            fillOpacity="0.1"
          />
          <path
            d="M257.095 211.252C229.918 211.252 199.099 203.8 169.398 189.949C128.426 170.842 97.6142 143.592 82.802 116.405L3.58983 169.846C-2.59878 174.02 -0.358039 183.632 7.03888 184.635L140.068 202.725C147.893 203.789 155.074 207.653 160.273 213.6L248.652 314.659C253.564 320.278 262.821 316.855 262.897 309.39L263.89 211.076C261.652 211.184 259.39 211.252 257.095 211.252Z"
            fill="#666666"
            fillOpacity="0.1"
          />
          <path
            d="M257.097 197.225C229.918 197.225 199.098 189.77 169.4 175.922C99.5234 143.335 59.124 87.0645 77.4271 47.8131C95.7329 8.56686 164.808 3.34751 234.683 35.9349C257.543 46.5942 278.263 60.4188 294.599 75.914C298.132 79.2631 298.276 84.837 294.93 88.3674C291.581 91.8951 286.007 92.0422 282.479 88.6957C267.501 74.4903 248.399 61.7663 227.238 51.8977C168.347 24.4324 107.052 25.969 93.3952 55.2573C79.7388 84.5428 117.955 132.486 176.85 159.951C206.721 173.881 237.533 180.808 263.606 179.434C287.69 178.176 304.412 170.062 310.693 156.592C317.244 142.547 310.905 126.508 304.436 115.523C301.967 111.33 303.364 105.932 307.554 103.463C311.746 100.994 317.147 102.389 319.616 106.584C331.796 127.259 334.299 147.666 326.661 164.041C317.496 183.697 295.429 195.413 264.53 197.031C262.087 197.162 259.605 197.225 257.097 197.225Z"
            fill="#666666"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </>
  );
}
