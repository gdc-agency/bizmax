import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import Accordion from '../Accordion';
import IconboxStyle5 from '../Iconbox/IconboxStyle5';
import { NavLink } from 'react-router-dom';
import FormStyle5 from '../Form/FormStyle5';
import { Icon } from '@iconify/react';
import FormStyle6 from '../Form/FormStyle6';
import Button from '../Button';
import { pageTitle } from '../../helpers/PageTitle';

const serviceList = [
  { title: 'Accounting and Bookkeeping', href: '/service/services-details' },
  {
    title: 'Marketing and Advertising',
    href: '/service/marketing-and-advertising',
  },
  {
    title: 'IT Support and Consulting',
    href: '/service/IT Support and Consulting',
  },
  { title: 'Human Resources', href: '/service/human-resources' },
  { title: 'Web Development', href: '/service/web-development' },
  { title: 'SEO & Content Writing', href: '/service/seo-content-writing' },
];

const faqData = [
  {
    title: 'What services does your business provide?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
  {
    title: 'How much do your services cost?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
  {
    title: 'Do you offer any guarantees or refunds?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
  {
    title: 'How do I get started with your services?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
];

export default function ServiceDetailsPage() {
  pageTitle('Service Details');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Service Details" bgUrl="/images/page_header_1.jpeg" />

      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 cs_mb_lg_60">
              <div className="cs_service_list cs_mb_40">
                <h2 className="cs_fs_20 text-white text-uppercase bg-accent cs_pl_30 cs_pr_30 cs_pt_23 cs_pb_23 m-0">
                  All Services
                </h2>
                <ul className="m-0 cs_pl_30 cs_pr_30 cs_pt_30 cs_pb_30">
                  {serviceList?.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.href}>
                        {item.title}
                        <Icon icon="fa6-solid:arrow-right-long" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="cs_quick_contact_card background-filled cs_mb_40 text-center"
                style={{
                  backgroundImage: `url('/images/service-list-card.jpeg')`,
                }}
              >
                <div className="cs_quick_contact_card_in">
                  <div className="cs_quick_contact_card_icon cs_height_100 cs_width_100 bg-accent d-flex align-items-center justify-content-center rounded-circle cs_mb_24">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_81_8759)">
                        <path
                          d="M28.4609 0C27.9215 0 27.4844 0.437164 27.4844 0.976561C27.4844 1.51596 27.9215 1.95312 28.4609 1.95312C39.2607 1.95312 48.0467 10.7395 48.0467 21.5389C48.0467 22.0783 48.4843 22.5155 49.0233 22.5155C49.5627 22.5155 49.9998 22.0783 49.9998 21.5389C49.9998 9.66261 40.3376 0 28.4609 0Z"
                          fill="white"
                        />
                        <path
                          d="M43.1486 22.5157C43.688 22.5157 44.1252 22.0782 44.1252 21.5392C44.1252 12.9016 37.0982 5.87451 28.4609 5.87451C27.9215 5.87451 27.4844 6.31206 27.4844 6.85107C27.4844 7.39047 27.9215 7.82763 28.4609 7.82763C36.0213 7.82763 42.1721 13.9784 42.1721 21.5392C42.1721 22.0782 42.6092 22.5157 43.1486 22.5157Z"
                          fill="white"
                        />
                        <path
                          d="M36.2963 21.5395C36.2963 22.0785 36.7335 22.516 37.2729 22.516C37.8123 22.516 38.2494 22.0785 38.2494 21.5395C38.2494 16.1421 33.8583 11.751 28.4609 11.751C27.9215 11.751 27.4844 12.1881 27.4844 12.7272C27.4844 13.2666 27.9215 13.7037 28.4609 13.7037C32.7815 13.7037 36.2963 17.2186 36.2963 21.5395Z"
                          fill="white"
                        />
                        <path
                          d="M27.4844 18.602C27.4844 19.1411 27.9215 19.5782 28.4609 19.5782C29.542 19.5782 30.4217 20.4579 30.4217 21.5394C30.4217 22.0784 30.8589 22.5159 31.3982 22.5159C31.9373 22.5159 32.3748 22.0784 32.3748 21.5394C32.3748 19.381 30.6189 17.6255 28.4609 17.6255C27.9215 17.6255 27.4844 18.0627 27.4844 18.602Z"
                          fill="white"
                        />
                        <path
                          d="M18.3047 31.707C18.3047 32.2464 17.8675 32.6836 17.3281 32.6836C16.7887 32.6836 16.3516 32.2464 16.3516 31.707C16.3516 31.168 16.7887 30.7305 17.3281 30.7305C17.8675 30.7305 18.3047 31.168 18.3047 31.707Z"
                          fill="white"
                        />
                        <path
                          d="M26.7609 48.8141C31.2077 50.9935 36.5574 50.0867 40.0738 46.5703L42.0929 44.5512C43.1893 43.456 43.1897 41.6818 42.0933 40.5858L34.2915 32.7848C33.1971 31.6888 31.4225 31.6873 30.3269 32.7844L27.0119 36.0998C26.3627 36.749 25.3606 36.8814 24.6297 36.4149C23.438 35.6531 22.2787 34.8131 21.1842 33.9181C20.7665 33.5767 20.1516 33.6385 19.8102 34.0558C19.4688 34.4736 19.5306 35.0889 19.9479 35.4299C21.1011 36.3729 22.3222 37.2579 23.5783 38.0605C25.0756 39.0169 27.1004 38.7731 28.3929 37.4807L31.7086 34.1649C32.0401 33.8331 32.5772 33.8323 32.9102 34.1653L40.7124 41.9668C41.0447 42.2994 41.0454 42.8373 40.7124 43.1695L38.6929 45.1894C35.7636 48.1187 31.3142 48.8706 27.6204 47.0605C14.0885 40.4249 6.72617 29.9032 2.93284 22.2448C1.11819 18.5823 1.8716 14.1496 4.80776 11.2142L6.78301 9.23937C7.11413 8.90749 7.65162 8.90635 7.98426 9.23975L15.7872 17.0423C16.1176 17.3723 16.121 17.9102 15.7864 18.2439L12.4715 21.5593C11.1791 22.8517 10.9353 24.8766 11.8916 26.3742C12.4551 27.2558 13.0624 28.1255 13.6971 28.959C14.0237 29.3882 14.6363 29.471 15.0655 29.1444C15.4946 28.8179 15.5778 28.2053 15.2509 27.7757C14.6489 26.9849 14.0721 26.1594 13.5373 25.3229C13.0708 24.5916 13.2031 23.5895 13.8524 22.9402L17.167 19.6256C18.2629 18.5312 18.2641 16.7562 17.1677 15.661L9.36556 7.85921C8.2715 6.76325 6.49653 6.76173 5.40133 7.85883L3.42685 9.83332C-0.102507 13.3615 -1.0043 18.6979 1.18266 23.1119C5.11065 31.0415 12.7362 41.937 26.7609 48.8141Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_81_8759">
                          <rect width={50} height={50} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="cs_fs_48 cs_fs_lg_36 text-white cs_mb_40">
                    Have Any Query Feel Free Contact
                  </h2>
                  <Button btnText="Contact Us" btnUrl="/contact" />
                </div>
              </div>
              <div className="bg-gray cs_pl_30 cs_pr_30 cs_pt_55 cs_pb_60">
                <h2 className="cs_fs_26 cs_mb_25">Quick Contact</h2>
                <FormStyle5 />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <img
                src="/images/service-details-img-1.jpeg"
                alt="Thumb"
                className="cs_mb_40"
              />
              <h2 className="cs_fs_26 cs_mb_20">Business &amp; finance</h2>
              <p className="cs_mb_40">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </p>
              <blockquote className="cs_blockquote fw-semibold cs_pt_35 cs_pb_35 cs_pl_40 cs_pr_40 bg-white shadow-lg cs_rounded_5 cs_mb_40">
                “ Lorem Ipsum is simply free text not dummy available
                typesetting industry been the industry standard Lorem ipsum is
                simply free text ”
              </blockquote>
              <p className="cs_mb_40">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam,
              </p>
              <div className="row cs_mb_30">
                <div className="col-xl-6">
                  <img
                    src="/images/service-details-img-2.jpeg"
                    alt=""
                    className="cs_rounded_15 cs_mb_30"
                  />
                </div>
                <div className="col-xl-6">
                  <h3 className="cs_fs_26 cs_mb_15">Our benefits</h3>
                  <p className="cs_mb_40">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam.
                  </p>
                  <IconboxStyle5
                    iconUrl="/images/icons/iconbox_icon_8.svg"
                    title="Accounting and Bookkeeping"
                  />
                  <IconboxStyle5
                    iconUrl="/images/icons/iconbox_icon_9.svg"
                    title="IT Support and Consulting"
                  />
                </div>
              </div>
              <div className="cs_section_heading cs_style_1 cs_mb_30">
                <div className="cs_section_heading_in">
                  <h3 className="cs_fs_20 text-accent fw-normal cs_lh_base cs_mb_15">
                    frequently asked questions
                  </h3>
                  <h2 className="cs_fs_36 cs_mb_0">Questions & Answers</h2>
                </div>
              </div>
              <Accordion data={faqData} />
            </div>
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
