import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';
import VideoBlock from '../../VideoBlock';
import Button from '../../Button';
import { Icon } from '@iconify/react';

export default function AboutUsSection({
  thumbUrl,
  experienceBgUrl,
  experienceIconUrl,
  experienceNumber,
  experienceTitle,
  sectionTitleUp,
  sectionTitle,
  sectionSubTitle,
  grothTitle,
  grothPercentage,
  featureList,
  btnText,
  btnUrl,
  videoBtnText,
  videoBtnUrl,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 cs_mb_lg_55">
            <div className="cs_experience cs_style_1 position-relative">
              <div className="cs_experience_thumb">
                <img
                  src={thumbUrl}
                  alt="Thumb"
                  className="position-relative cs_zindex_3 cs_rounded_15"
                />
                <div className="cs_experience_shape">
                  <img
                    src="/images/experience_shape_1.png"
                    alt="Shape"
                    className="moving_x"
                  />
                </div>
              </div>
              <div
                className="cs_experience_box background-filled text-center bg-white cs_rounded_10 position-absolute bottom-0 end-0 cs_zindex_3 d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundImage: `url(${experienceBgUrl})`,
                }}
              >
                <img src={experienceIconUrl} alt="Icon" className="cs_mb_5" />
                <h3 className="text-white cs_fs_60 cs_fs_lg_46 fw-bold lh_1 mb-0 d-flex justify-content-between">
                  <span className="odometer">{experienceNumber}</span>
                  <span className="fw-light">+</span>
                </h3>
                <h2 className="cs_fs_18 fw-normal text-white m-0">
                  {experienceTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about cs_style_1">
              <SectionHeadingStyle3
                sectionTitleUp={sectionTitleUp}
                sectionTitle={sectionTitle}
                sectionSubTitle={sectionSubTitle}
                className={'cs_mb_15'}
              />
              <div className="cs_progressbar cs_style_1 cs_mb_20">
                <div className="cs_progressbar_heading d-flex justify-content-between align-items-center cs_mb_8">
                  <h3 className="fw-medium m-0 cs_fs_18">{grothTitle}</h3>
                  <p className="cs_fs_14 cs_lh_base m-0">{grothPercentage}%</p>
                </div>
                <div className="cs_progress cs_rounded_8 overflow-hidden">
                  <div
                    className="cs_progress_in bg-accent cs_rounded_8 h-100"
                    style={{
                      width: `${grothPercentage}%`,
                    }}
                  />
                </div>
              </div>
              <div className="row cs_mb_15">
                {featureList?.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="cs_about-icon-box position-relative cs_mb_25">
                      <span className="position-absolute cs_height_20 cs_width_20 top-0 start-0 cs_mt_5 bg-accent text-white cs_fs_10 d-flex align-items-center justify-content-center cs_rounded_30">
                        <Icon icon="fa6-solid:angles-right" />
                      </span>
                      <h3 className="cs_fs_16 cs_pl_35 cs_mb_12 cs_lh_lg">
                        {item.title}
                      </h3>
                      <p className="m-0">{item.subTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center cs_row_gap_20 cs_column_gap_30 cs_column_gap_lg_20 flex-wrap">
                <Button btnText={btnText} btnUrl={btnUrl} />
                <VideoBlock
                  videoSrc={videoBtnUrl}
                  videoBtnText={videoBtnText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_shape-1 position-absolute semi_rotate">
        <svg
          width={182}
          height={177}
          viewBox="0 0 182 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M94.4478 96.1115C106.99 105.211 120.6 111.159 132.748 112.86C132.823 112.871 132.894 112.876 132.967 112.886L150.387 27.5688C151.002 24.552 147.98 22.0838 145.148 23.2887L63.8438 57.8735C67.5196 70.1011 78.6592 84.6548 94.4478 96.1115Z"
            fill="#888888"
            fillOpacity="0.2"
          />
          <path
            d="M128.155 120.487C115.612 118.057 102.053 111.863 89.5833 102.815C72.3806 90.3334 60.5954 75.0018 56.1891 61.1295L14.8513 78.7143C11.6218 80.0876 11.7968 84.724 15.1212 85.8483L74.9037 106.09C78.4203 107.281 81.3895 109.706 83.2572 112.915L115.015 167.46C116.78 170.492 121.358 169.74 122.061 166.301L131.308 121.013C130.265 120.863 129.215 120.692 128.155 120.487Z"
            fill="#888888"
            fillOpacity="0.2"
          />
          <path
            d="M129.41 114.012C116.866 111.583 103.307 105.387 90.8381 96.3405C61.4995 75.0532 47.8833 45.4701 59.84 28.9897C71.7975 12.512 104.146 16.278 133.483 37.5651C143.082 44.5285 151.409 52.7615 157.564 61.3736C158.895 63.2352 158.464 65.8208 156.603 67.1511C154.742 68.4799 152.156 68.0495 150.827 66.1896C145.184 58.2942 137.505 50.7138 128.621 44.2672C103.894 26.326 75.466 21.5559 66.5447 33.8531C57.6235 46.1491 70.9766 71.6938 95.7041 89.6352C108.246 98.7348 121.848 104.686 134.005 106.383C145.234 107.955 153.677 105.705 157.78 100.049C162.059 94.1524 160.568 86.183 158.563 80.5345C157.799 78.3788 158.926 76.0123 161.081 75.2472C163.236 74.4823 165.604 75.6089 166.369 77.7657C170.142 88.3972 169.474 98.04 164.484 104.915C158.497 113.168 147.265 116.603 132.859 114.587C131.719 114.43 130.568 114.237 129.41 114.012Z"
            fill="#888888"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </>
  );
}
