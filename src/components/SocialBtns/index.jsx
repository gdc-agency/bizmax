import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialBtns({ variant }) {
  return (
    <div className={`${variant ? variant : ''}`}>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:facebook-f" />
      </Link>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:dribbble" />
      </Link>
    </div>
  );
}
