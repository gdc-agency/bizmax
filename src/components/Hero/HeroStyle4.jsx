import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function HeroStyle4({
  heroImg,
  heroBg,
  titleUp,
  title,
  subTitle,
  experienceText,
  btn1Url,
  btn1Text,
  btn2Url,
  btn2Text,
}) {
  return (
    <section className="cs_hero cs_style_3 position-relative d-flex align-items-center justify-content-center position-relative overflow-hidden">
      <div className="container">
        <div
          className="cs_hero_right background-filled position-absolute d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div
            className="cs_hero_img_box background-filled"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <h3 className="cs_box_title cs_fs_36 cs_fs_lg_28 text-white fw-medium">
              <span>{experienceText}</span>
            </h3>
          </div>
        </div>
        <div className="cs_hero_text position-relative cs_zindex_5 d-inline-block">
          <div className="cs_hero_text_in">
            <p className="cs_mb_20 cs_fs_18">{parse(titleUp)}</p>
            <h1 className="cs_mb_18 cs_fs_60 cs_fs_lg_46">{parse(title)}</h1>
            <p className="cs_mb_32 cs_fs_18">{parse(subTitle)}</p>
            <div className="cs_hero_btn">
              <Link
                to={btn1Url}
                className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
              >
                <span>{btn1Text}</span>
              </Link>
              <Link
                to={btn2Url}
                className="cs_btn cs_style_2 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_9 cs_pb_9 overflow-hidden"
              >
                <span>{btn2Text}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
