import Button from '../Button';
import parse from 'html-react-parser';
import WaterWave from 'react-water-wave';

export default function HeroStyle2({ titleUp, title, btnText, btnUrl, bgUrl }) {
  return (
    <WaterWave
      className="cs_hero cs_style_2 d-flex align-items-center justify-content-center background-filled position-relative overflow-hidden cs_ripple_version"
      imageUrl={bgUrl}
    >
      {() => (
        <>
          <div className="container">
            <div className="cs_hero_text position-relative cs_zindex_3 text-center">
              <h2 className="text-white cs_mb_15 fw-normal cs_fs_18">
                {titleUp}
              </h2>
              <h1 className="text-white cs_mb_45 cs_fs_60 cs_fs_lg_46 text-uppercase">
                {parse(title)}
              </h1>
              <Button btnText={btnText} btnUrl={btnUrl} />
            </div>
          </div>
          <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />
          <div className="cs_hero_shape_1 position-absolute bottom-0 start-0 d-flex align-items-end h-100">
            <svg
              width={660}
              height={759}
              viewBox="0 0 660 759"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240 0H660L430 759H0L240 0Z"
                fill="url(#paint0_linear_81_1981)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_81_1981"
                  x1={330}
                  y1="119.5"
                  x2="434.5"
                  y2="1186.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity={0} offset="none" />
                  <stop
                    offset="0.9999"
                    stopColor="#D9D9D9"
                    stopOpacity="0.35"
                  />
                  <stop offset={1} stopColor="#222121" stopOpacity={0} />
                  <stop offset={1} stopColor="#222121" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}
    </WaterWave>
  );
}
