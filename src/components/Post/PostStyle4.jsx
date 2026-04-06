import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostStyle4({
  imgUrl,
  title,
  subTitle,
  srcUrl,
  postedBy,
  adminUrl,
  numberOfComment,
  commentUrl,
}) {
  return (
    <div className="cs_post cs_style_1 bg-white shadow-sm cs_mb_40">
      <Link
        to={srcUrl}
        className="cs_post_thumb d-block position-relative overflow-hidden"
      >
        <div
          className="cs_post_thumb-in cs_transition_5 background-filled h-100 w-100"
          style={{ backgroundImage: `url('${imgUrl}')` }}
        />
      </Link>
      <div className="cs_pl_40 cs_pr_40 cs_pt_40 cs_pb_40 cs_pl_lg_25 cs_pr_lg_25 cs_pt_lg_25 cs_pb_lg_25">
        <ul className="cs_post_meta d-flex flex-wrap cs_fs_12 p-0 cs_mb_20">
          <li>
            <span>
              <Icon icon="fa:user" /> By{' '}
            </span>
            <Link to={adminUrl}>{postedBy}</Link>
          </li>
          <li>
            <span>
              <Icon icon="fa:commenting-o" />
            </span>
            <Link to={commentUrl}>{numberOfComment} comments</Link>
          </li>
        </ul>
        <h2 className="cs_post_title cs_lh_base cs_fs_26 cs_fs_lg_18 cs_mb_20">
          <Link to={srcUrl}>{title}</Link>
        </h2>
        <div className="cs_post_subtitle cs_mb_30">{subTitle}</div>
        <Link
          to={srcUrl}
          className="cs_post_btn d-inline-flex justify-content-between align-items-center cs_pl_25 cs_pr_25 cs_pb_10 cs_pt_10"
        >
          <span className="cs_post_btn-text cs_mr_30">Read More</span>
          <div className="cs_post_btn-icon d-flex cs_transition_4">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 0.224976C6.52011 0.224976 1.63131 4.16368 0.485006 9.52707C-0.0876941 12.207 0.298106 15.0567 1.57581 17.4816C2.80551 19.8153 4.82151 21.7014 7.23351 22.7703C9.74241 23.8824 12.6227 24.0762 15.2597 23.3178C17.8037 22.5864 20.0594 20.9811 21.5951 18.8262C24.806 14.3211 24.3767 7.99288 20.5991 3.95608C18.3851 1.59028 15.2405 0.224976 11.9999 0.224976ZM17.6486 12.6291L14.4386 15.9165C13.6259 16.749 12.3413 15.4878 13.1507 14.6592L14.7704 13.0005H7.09461C6.54951 13.0005 6.09471 12.5454 6.09471 12.0006C6.09471 11.4558 6.54981 11.0007 7.09461 11.0007H14.732L13.0802 9.34918C12.2594 8.52838 13.532 7.25548 14.3528 8.07628L17.6411 11.3643C17.9897 11.7126 17.993 12.2766 17.6486 12.6291Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
