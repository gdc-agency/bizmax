import React from 'react';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';
import IconboxStyle2 from '../../Iconbox/IconboxStyle2';
import ContactForm from '../../Form';
import { Icon } from '@iconify/react';

export default function ContactSectionStyle2({
  sectionTitle,
  sectionTitleUp,
  sectionSubTitle,
  featureList,
  contactInfo,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <SectionHeadingStyle3
            sectionTitle={sectionTitle}
            sectionTitleUp={sectionTitleUp}
            sectionSubTitle={sectionSubTitle}
            className="cs_mb_40"
          />
          <div className="cs_mb_40">
            {featureList?.map((item, index) => (
              <div
                className="cs_about-icon-box position-relative cs_mb_10"
                key={index}
              >
                <span className="position-absolute cs_height_20 cs_width_20 top-0 start-0 cs_mt_5 bg-accent text-white cs_fs_10 d-flex align-items-center justify-content-center cs_rounded_30">
                  <Icon icon="fa6-solid:angles-right" />
                </span>
                <h3 className="cs_fs_16 cs_pl_35 cs_mb_0 cs_lh_lg">{item}</h3>
              </div>
            ))}
          </div>
          <div className="row">
            {contactInfo?.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <IconboxStyle2 {...item} />
                <div className="cs_mb_25"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1">
          <div className="cs_contact_wrap cs_type_1 position-relative">
            <ContactForm variant="filter-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
