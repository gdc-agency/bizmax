import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import FormStyle6 from '../Form/FormStyle6';
import Section from '../Section';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import SocialBtnsStyle3 from '../SocialBtns/SocialBtnsStyle3';
import IconboxStyle4 from '../Iconbox/IconboxStyle4';
import { pageTitle } from '../../helpers/PageTitle';

const imgUrl = '/images/team_member_4.jpeg';

const da = [
  {
    imgUrl: '/images/icons/team_icon_1.svg',
    title: 'Gathering Requirements',
  },
  {
    imgUrl: '/images/icons/team_icon_2.svg',
    title: 'Planning and Research',
  },
  {
    imgUrl: '/images/icons/team_icon_3.svg',
    title: 'wireframes or low-fidelity',
  },
  {
    imgUrl: '/images/icons/team_icon_4.svg',
    title: 'Develop high-fidelity',
  },
];

const roadmapData = [
  {
    titleUp: 'July 2016',
    title: 'MS, Technology',
    subTitle: 'Canadian National University',
  },
  {
    titleUp: 'November 2014',
    title: 'Master Degree',
    subTitle: 'Canadian National University',
  },
  {
    titleUp: 'October 2013',
    title: 'Digital Marketing',
    subTitle: 'Canadian National University',
  },
  {
    titleUp: 'July 2012',
    title: 'Computer Science',
    subTitle: 'Canadian National University',
  },
];

export default function TeamMemberPage() {
  pageTitle('Team Member');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb
        title="Team Member Details"
        bgUrl="/images/page_header_1.jpeg"
      />
      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-6 col-lg-5">
              <div className="cs_mb_25 cs_pr_36 cs_pr_lg_0">
                <img src={imgUrl} alt="Member" className="w-100" />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-7">
              <div className="cs_section_heading cs_style_1 d-flex align-items-center cs_mb_20">
                <div className="cs_section_heading_in">
                  <h2 className="cs_fs_48 cs_fs_lg_36 cs_mb_15">
                    Ralph Edwards
                  </h2>
                  <h3 className="cs_fs_20 cs_fs_lg_18 text-accent fw-normal cs_lh_base cs_mb_20">
                    Web designer
                  </h3>
                  <SocialBtnsStyle3 />
                  <p className="m-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. There are many variations of
                    passages of Lorem Ipsum available, but majority have
                    suffered alteration in some form,{' '}
                  </p>
                </div>
              </div>
              <div className="cs_progressbar cs_style_1 cs_mb_40">
                <div className="cs_progressbar_heading d-flex justify-content-between align-items-center cs_mb_8">
                  <h3 className="fw-medium m-0 cs_fs_18">
                    Business Consulting
                  </h3>
                  <p className="cs_fs_14 cs_lh_base m-0">90%</p>
                </div>
                <div className="cs_progress cs_rounded_8 overflow-hidden">
                  <div
                    className="cs_progress_in bg-accent cs_rounded_8 h-100"
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className="row">
                {da.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <IconboxStyle4 title={item.title} imgUrl={item.imgUrl} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section pb="110" pbLg="50">
        <div className="container">
          <div
            className="cs_roadmaps d-flex wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            {roadmapData.map((item, index) => (
              <div className="cs_roadmap cs_pb_25" key={index}>
                <span className="bg-accent d-block rounded-circle cs_mb_14 position-relative z-index-1" />
                <p className="cs_mb_10 text-accent">{item.titleUp}</p>
                <h2 className="cs_fs_20 cs_mb_13">{item.title}</h2>
                <p className="m-0 cs_lh_base cs_fs_14">{item.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: `url('/images/contact_bg_2.jpeg')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <SectionHeadingStyle2
                sectionTitle="Feel Free to Get in Touch<br/>
                with Ralph"
                sectionTitleUp="Meet Our Team Member"
                textVarient="text-white"
              />
              <FormStyle6 />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
