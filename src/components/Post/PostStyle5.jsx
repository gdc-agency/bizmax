import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostStyle5({ imgUrl, title, subTitle }) {
  return (
    <div className="cs_post cs_style_1 bg-white shadow-sm cs_mb_30">
      <img src={imgUrl} alt="Thumb" />
      <div className="cs_pl_40 cs_pr_40 cs_pt_40 cs_pb_40 cs_pl_lg_25 cs_pr_lg_25 cs_pt_lg_25 cs_pb_lg_25">
        <ul className="cs_post_meta d-flex flex-wrap cs_fs_12 p-0 cs_mb_20">
          <li>
            <span>
              <Icon icon="fa:user" />
            </span>
            <Link to="/">admin</Link>
          </li>
          <li>
            <span>
              <Icon icon="fa:commenting-o" />
            </span>
            <Link to="/">3 comments</Link>
          </li>
        </ul>
        <h2 className="cs_post_title cs_lh_base cs_fs_26 cs_fs_lg_18 cs_mb_20">
          {title}
        </h2>
        <div className="cs_post_subtitle">{subTitle}</div>
      </div>
    </div>
  );
}
