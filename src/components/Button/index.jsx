import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ btnText, btnUrl }) {
  return (
    <Link
      to={btnUrl}
      className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
    >
      <span>{btnText}</span>
    </Link>
  );
}
