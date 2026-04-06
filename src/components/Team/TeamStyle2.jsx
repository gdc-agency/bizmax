import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamStyle2({ imgUrl, name, designation, srcUrl }) {
  return (
    <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden">
      <div className="cs_team_member position-relative">
        <img className="w-100" src={imgUrl} alt="Member" />
        <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
          >
            <Icon icon="fa:facebook-f" />
          </Link>
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
          >
            <Icon icon="fa:twitter" />
          </Link>
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
          >
            <Icon icon="fa:dribbble" />
          </Link>
        </div>
      </div>
      <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
        <h2 className="text-white m-0 cs_fs_26 cs_mb_3">
          <Link to={srcUrl}>{name}</Link>
        </h2>
        <p className="text-white m-0">{designation}</p>
      </div>
    </div>
  );
}
