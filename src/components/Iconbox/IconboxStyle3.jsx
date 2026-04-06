import React from 'react';

export default function IconboxStyle3({imgUrl, title, desc}){
  return (
    <div className="d-flex align-items-center cs_mb_30">
      <div className="d-flex align-items-center justify-content-center cs_height_90 cs_width_90 flex-none cs_mr_20 bg-gray rounded-circle">
        <img src={imgUrl} alt="iconbox-img" />
      </div>
      <div>
        <h2 className="cs_fs_20 cs_mb_8">{title}</h2>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  );
}
