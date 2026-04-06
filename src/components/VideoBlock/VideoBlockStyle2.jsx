import React, { useState } from 'react'
import VideoModal from '../VideoModal'
import parser from 'html-react-parser'



export default function VideoBlockStyle2({data}) {
  const {imgSrc, bgImgUrl, videoSrc, title} = data;

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc(`${videoSrc}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <div className="position-relative cs_pb_133 cs_pb_lg_80">
      <div className="container">
        <div className="cs_video_block cs_style_1 position-relative cs_rounded_20 overflow-hidden d-flex justify-content-center align-items-center flex-column cs_zindex_3">
          <span
            className="cs_video_open d-flex align-items-center cs_mb_40"
            onClick={handelClick}
          >
            <span className="cs_player_btn cs_width_135 cs_height_135 rounded-circle d-flex align-items-center justify-content-center text-accent bg-accent position-relative cs_zindex_1 cs_pl_5">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.9799 18.256L4.97999 0.256076C4.35999 -0.091923 3.604 -0.083923 2.992 0.272076C2.376 0.632075 2 1.28807 2 2.00007V38C2 38.712 2.376 39.368 2.992 39.728C3.304 39.908 3.65199 40 3.99999 40C4.33599 40 4.67599 39.916 4.97999 39.7439L36.9799 21.744C37.6079 21.388 37.9999 20.724 37.9999 20C37.9999 19.276 37.6079 18.612 36.9799 18.256Z"
                  fill="white"
                />
              </svg>
            </span>
          </span>
          <h2 className="cs_fs_48 cs_fs_lg_36 cs_pl_20 cs_pr_20 text-uppercase text-center text-white position-relative cs_zindex_1 m-0">{parser(title)}</h2>
          <div
            className="cs_video_block-bg h-100 w-100 position-absolute top-0 start-0 background-filled"
            style={{backgroundImage: `url('${imgSrc}')`}}
          />
        </div>
      </div>
      <div
        className="cs_video_1_block_bg w-100 position-absolute bottom-0 start-0 background-filled"
        style={{backgroundImage: `url('${bgImgUrl}')`}}
      />
      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </div>
  )
}
