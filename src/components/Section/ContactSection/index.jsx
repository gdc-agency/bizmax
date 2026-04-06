import React from 'react';
import ContactForm from '../../Form';
import IconboxStyle2 from '../../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';

export default function ContactSection({
  className,
  sectionTitleUp,
  sectionTitle,
  sectionSubTitle,
  textVarient,
  sectionImgUrl,
  contactInfo,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6">
          <SectionHeadingStyle3
            sectionTitleUp={sectionTitleUp}
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            textVarient={textVarient}
            className={className}
          />
          <div className="cs_iconbox_wrapper cs_style1">
            {contactInfo?.map((item, index) => (
              <IconboxStyle2 {...item} key={index} />
            ))}
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 offset-xl-1 cs_mt_lg_55">
          <div className="cs_contact_wrap position-relative">
            <ContactForm />
            <div className="cs_contact_image d-none d-xl-block">
              <img src={sectionImgUrl} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
