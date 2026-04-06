import React from 'react';

export default function MovingTextSection({ data }) {
  return (
    <div
      className="cs_moving_wrap background-filled text-uppercase text-white d-flex align-items-center"
      style={{ backgroundImage: 'url("/images/moving_text_shape.png")' }}
    >
      <div className="cs_moving_text cs_fs_30 cs_fs_lg_26 d-flex align-items-center text-nowrap">
        {data?.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="cs_moving_text cs_fs_30 d-flex align-items-center text-nowrap">
        {data?.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="cs_moving_text cs_fs_30 d-flex align-items-center text-nowrap">
        {data?.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
