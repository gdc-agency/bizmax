import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player';

export default function HeroStyle3({
  heroImg,
  heroBg,
  videoUrl,
  title,
  subTitle,
  btnUrl,
  btnText,
}) {
  return (
    <section
      className="cs_hero cs_style_1 cs_type_1 position-relative d-flex align-items-center justify-content-center background-filled position-relative overflow-hidden bg-primary"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="cs_hero_imagebox rounded-circle position-absolute">
        <div className="cs_hero_imagebox_mini position-absolute">
          <img src={heroImg} alt="Hero" className="w-100 h-100" />
        </div>
        <div className="cs_hero_imagebox_in overflow-hidden h-100 w-100 rounded-circle d-flex align-items-center justify-content-center position-relative">
          <ReactPlayer
            className="react-player fixed-bottom"
            url={videoUrl}
            width="180%"
            height="180%"
            controls={true}
            loop={true}
            playing={true}
            muted={true}
          />
        </div>
        <div className="cs_hero_imagebox_shape_1 position-absolute">
          <svg
            width={16}
            height={18}
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6995 0.486699L15.5455 17.8835L0.0564146 9.91778L14.6995 0.486699Z"
              fill="#5B4100"
            />
          </svg>
        </div>
        <div className="cs_hero_imagebox_shape_2 position-absolute moving_x" />
        <div className="cs_hero_imagebox_shape_3 position-absolute" />
      </div>
      <div className="container">
        <div className="cs_hero_text position-relative cs_zindex_5 d-inline-block">
          <h1 className="text-white cs_mb_16 cs_fs_60 cs_fs_lg_46">
            {parse(title)}
          </h1>
          <p className="text-white cs_mb_20">{parse(subTitle)}</p>
          <div className="cs_hero_btn">
            <Link
              to={btnUrl}
              className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
            >
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="cs_hero_shape_1 position-absolute bottom-0 d-flex align-items-end h-100 cs_zindex_1">
        <svg
          width={870}
          height={1000}
          viewBox="0 0 870 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M316.364 0H870L566.818 1000H0L316.364 0Z"
            fill="url(#paint0_linear_506_265)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_506_265"
              x1="191.136"
              y1="337.945"
              x2="637.701"
              y2="972.542"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9" stopOpacity={0} offset={0} />
              <stop offset={1} stopColor="#E9A132" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
