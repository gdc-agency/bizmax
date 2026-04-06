import React from 'react'
import Iconbox from '../../Iconbox'
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3'

export default function WhyChooseUsSection({sectionTitleUp, sectionTitle,sectionSubTitle, services, imgUrlLeft, imgUrlRight}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="position-relative cs_zindex_3">
              <SectionHeadingStyle3 
                sectionTitleUp={sectionTitleUp}
                sectionTitle={sectionTitle}
                sectionSubTitle={sectionSubTitle}
                className={'cs_mb_60 cs_mb_lg_40 cs_column_gap_15 cs_row_gap_15'}
                textVarient={'text-white'}
              />
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <Iconbox imgUrl={item.imgUrl} title={item.title}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6" />
        </div>
      </div>
      <div className="cs_iconbox_left-img position-absolute bottom-0 start-0 h-100 background-filled"
        style={{backgroundImage: `url('${imgUrlLeft}')`}}
      />
      <div className="cs_iconbox_right-img position-absolute cs_zindex_1 bottom-0 end-0 background-filled"
        style={{backgroundImage: `url('${imgUrlRight}')`}}
      />
      <div className="cs_iconbox_logo position-absolute semi_rotate">
        <svg
          width={191}
          height={197}
          viewBox="0 0 191 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100.397 107.26C113.305 117.648 127.237 124.564 139.602 126.736C139.678 126.749 139.75 126.756 139.825 126.77L155.856 32.5327C156.421 29.2004 153.306 26.3917 150.454 27.6622L68.5886 64.126C72.5569 77.7763 84.1472 94.1815 100.397 107.26Z"
            fill="#888888"
            fillOpacity="0.2"
          />
          <path
            d="M134.283 136.497C121.573 133.528 107.766 126.385 95.0023 116.124C77.395 101.968 65.2019 84.7963 60.4863 69.405L19.093 87.8249C15.8591 89.2634 16.1251 94.3774 19.5029 95.6938L80.2458 119.392C83.8188 120.786 86.8631 123.528 88.8105 127.109L121.922 187.961C123.762 191.345 128.37 190.622 129.013 186.848L137.475 137.15C136.42 136.96 135.357 136.747 134.283 136.497Z"
            fill="#888888"
            fillOpacity="0.2"
          />
          <path
            d="M135.873 127.406C123.172 124.44 109.376 117.306 96.6244 107.06C66.6205 82.949 52.3161 50.0723 64.0597 32.2106C75.8041 14.3519 108.507 19.2476 138.51 43.3581C148.326 51.2452 156.884 60.5001 163.258 70.1219C164.637 72.2018 164.251 75.0376 162.4 76.4586C160.549 77.878 157.932 77.3443 156.556 75.2663C150.711 66.4452 142.82 57.9237 133.733 50.622C108.446 30.3012 79.6787 24.3911 70.9164 37.7191C62.1543 51.0456 76.1154 79.4713 101.404 99.7925C114.23 110.099 128.065 116.965 140.36 119.115C151.717 121.106 160.191 118.825 164.221 112.695C168.424 106.304 166.766 97.4981 164.635 91.2345C163.822 88.8441 164.914 86.2656 167.073 85.4735C169.232 84.6816 171.642 85.9765 172.455 88.3683C176.466 100.157 175.977 110.755 171.077 118.207C165.196 127.151 153.932 130.671 139.362 128.118C138.21 127.918 137.045 127.679 135.873 127.406Z"
            fill="#888888"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </>

  )
}
