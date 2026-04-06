import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import SocialBtns from '../SocialBtns';
import ReactPlayer from 'react-player';

export default function HeroStyle5({ bgImg, title, subTitle, srcUrl }) {
  return (
    <section
      className="cs_hero cs_style_4 bg-primary position-relative d-flex align-items-center justify-content-center overflow-hidden youtube-bg"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=I2SeBj6R-mc"
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
        muted={true}
        playIcon={false}
        className="cs_video_bg"
      />
      <div className="container position-relative cs_zindex_2">
        <div className="cs_hero_text">
          {title && (
            <h1 className="text-white cs_mb_28 cs_fs_60 cs_fs_lg_46">
              {' '}
              {parser(title)}
            </h1>
          )}

          {subTitle && (
            <p className="text-white cs_mb_40">{parser(subTitle)}</p>
          )}
          <div className="cs_hero_btn">
            <Link
              to={srcUrl}
              className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
            >
              <span>Get A Quote</span>
            </Link>
            <Link
              to={srcUrl}
              className="cs_btn cs_style_2 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_9 cs_pb_9 overflow-hidden"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
      <SocialBtns variant="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5" />
    </section>
  );
}
