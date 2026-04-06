import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function PricingCard({
  iconUrl,
  title,
  subTitle,
  price,
  duration,
  btnText,
  btnUrl,
  featureTitle,
  featureList,
  readMoreBtnTtext,
  readMoreBtnUrl,
  popular,
}) {
  return (
    <div
      className={`cs_pricing_table cs_style_1 cs_rounded_20 bg-white overflow-hidden cs_mb_30 position-relative ${
        popular ? 'cs_popular' : ''
      }`}
    >
      <div className="cs_pricing_table-in cs_pl_50 cs_pr_50 cs_pt_60 cs_pb_30 cs_pl_lg_40 cs_pr_lg_40 cs_pt_lg_40">
        {popular && <span className="cs_popular_label">Popular</span>}
        <h2 className="cs_fs_26 d-flex align-content-center cs_mb_18">
          <img src={iconUrl} alt="Icon" />
          <span className="cs_ml_15">{title}</span>
        </h2>
        <p className="cs_fs_18 cs_lh_base cs_mb_35">{subTitle}</p>
        <div className="cs_price d-flex align-items-end cs_mb_35">
          <span>$</span>
          <h3 className="cs_fs_60 text-accent">{price}</h3>
          <span>/{duration}</span>
        </div>
        <Link
          to={btnUrl}
          className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden w-100"
        >
          <span>{btnText}</span>
        </Link>
        <h3 className="cs_lh_base cs_fs_18 cs_mb_10 cs_mt_45">
          {featureTitle}
        </h3>
        <ul className="cs_list cs_style_1">
          {featureList?.map((item, index) => (
            <li key={index}>
              <Icon icon="fa6-solid:check" />
              {parse(item)}
            </li>
          ))}
        </ul>
      </div>
      <Link
        className="cs_pricing_footer-btn d-block text-center fw-semibold"
        to={readMoreBtnTtext}
      >
        {readMoreBtnUrl}
      </Link>
    </div>
  );
}
