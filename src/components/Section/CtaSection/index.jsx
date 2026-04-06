import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaSection({
  bgImgUrl,
  imgUrl,
  title,
  btnUrl,
  btnText,
}) {
  return (
    <div
      className="cs_cta cs_style_1 background-filled"
      style={{ backgroundImage: `url('${bgImgUrl}')` }}
    >
      <div className="container position-relative">
        <div className="cs_cta_text cs_pt_130 cs_pb_140 cs_pt_lg_70 cs_pb_lg_80">
          <h2 className="cs_cta_title text-white fw-semibold cs_fs_48 cs_mb_40">
            {title}
          </h2>
          <Link
            to={btnUrl}
            className="cs_btn cs_style_1 cs_color_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
          >
            <span>{btnText}</span>
          </Link>
        </div>
        <div className="cs_cta_img">
          <img src={imgUrl} alt="CTA Img" />
        </div>
      </div>
    </div>
  );
}
