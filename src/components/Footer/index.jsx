import React from 'react';
import { Link } from 'react-router-dom';
import SocialBtns from '../../components/SocialBtns';
import MenuWidget from '../Widget/MenuWidget';
import NewsLetterWidget from '../Widget/NewsLetterWidget';
const menuDataOne = [
  { title: 'About', href: '/about' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Services', href: '/service' },
  { title: 'Support', href: '/contact' },
  { title: 'Pricing Page', href: '/pricing' },
  { title: 'Our Store', href: '/shop' },
  { title: 'Blog', href: '/blog' },
  { title: 'Privacy Policy', href: '/' },
  { title: 'Contact', href: '/contact' },
];
export default function Footer() {
  return (
    <footer
      className="cs_footer background-filled text-white"
      style={{ backgroundImage: 'url("/images/footer_bg.jpeg")' }}
    >
      <div className="container">
        <div className="cs_footer_top d-flex justify-content-between align-items-start align-items-md-center cs_pt_46 cs_pb_46 cs_column_gap_15 cs_row_gap_15 flex-md-row  flex-column">
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Have Any Question?
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              + 070 4531 9507
            </h2>
          </div>
          <div className="cs_footer_logo">
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Send Email
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              <a href="mailto:bizmax@laralink.com">bizmax@laralink.com</a>
            </h2>
          </div>
        </div>
        <div className="cs_footer_main cs_pt_30 cs_pb_30">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <div className="cs_text_widget">
                  <p>
                    I've been using [business name] for the past year and I'm so
                    glad I did. Their products and services are top-notch and
                    their customer service is amazing. I would highly recommend
                    them to anyone
                  </p>
                </div>
                <SocialBtns variant="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5" />
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <MenuWidget data={menuDataOne} title="Explore" />
            </div>
            <div className="col-lg-3">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <NewsLetterWidget
                  title="Newsletter"
                  subTitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_copyright text-center cs_fs_124 cs_lh_lg cs_pt_36 cs_pb_36">
        <div className="container">
          <p className="m-0">
            Copyright © {new Date().getFullYear()} <Link to="/">Global Digital Care</Link> — Turning Clicks into Clients.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
