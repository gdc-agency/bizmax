import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import LocationInMap from '../LocationInMap';
import Section from '../Section';
import FormStyle2 from '../Form/FormStyle2';
import IconboxStyle2 from '../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import { pageTitle } from '../../helpers/PageTitle';

const locationData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd';

export default function ContactPage() {
  pageTitle('Contact');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Contact" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="133" ptLg="75" pb="133" pbLg="75">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <SectionHeadingStyle3
                sectionTitleUp="Have any question?"
                sectionTitle="Write a Message"
              />
              <FormStyle2 />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cs_pl_60 cs_pl_lg_0 cs_pt_lg_60">
                <SectionHeadingStyle3
                  sectionTitleUp="Contact With Us"
                  sectionTitle="Let’s work together"
                  sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
                  className="cs_mb_40"
                />
                <div className="cs_iconbox_wrapper cs_style1">
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_1.svg"
                    title="+ 070 4531 9507"
                    titleUp="Have Any Question?"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_2.svg"
                    title="bizmax@laralink.com"
                    titleUp="Send Email"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_3.svg"
                    title="Yewtree Cottage, Kings Pyon"
                    titleUp="Address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <LocationInMap data={locationData} />
    </>
  );
}
