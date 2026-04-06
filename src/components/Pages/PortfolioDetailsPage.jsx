import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import SocialBtns from '../SocialBtns';
import { Icon } from '@iconify/react';
import { pageTitle } from '../../helpers/PageTitle';

export default function PortfolioDetailsPage() {
  pageTitle('Portfolio Details');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Project Details" bgUrl="/images/page_header_1.jpeg" />
      <section className="cs_pt_130 cs_pt_lg_80 cs_pb_93 cs_pb_lg_80">
        <div className="container">
          <div>
            <div className="cs_project_details-head d-flex align-items-center justify-content-between flex-wrap cs_mb_40 cs_row_gap_15 cs_column_gap_15">
              <h2 className="m-0 cs_fs_48 cs_fs_lg_36">Marketing Webdesign </h2>
              <div className="cs_published_date d-inline-flex cs_rounded_5 bg-accent text-white cs_pt_5 cs_pb_5 cs_pl_15 cs_pr_15 cs_pt_lg_3 cs_pb_lg_3">
                23 May, 2024
              </div>
            </div>
            <img
              src="/images/project_details_img.jpeg"
              alt="Thumb"
              className="cs_mb_60 cs_mb_lg_40"
            />
            <div className="row">
              <div className="col-lg-8">
                <div className="cs_project_details cs_pb_40">
                  <p className="m-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. There are many variations of
                    passages of Lorem Ipsum available, but majority have
                    suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum.
                  </p>{' '}
                  <br />
                  <h3 className="text-accent cs_fs_20 cs_lh_base m-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </h3>{' '}
                  <br />
                  <p className="cs_mb_35">
                    If you are going to use a passage of Lorem Ipsum.
                    Suspendisse ultricies vestibulum vehicula. Proin laoreet
                    porttitor lacus. Duis auctor vel ex eu elementum. <br />
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                    pellentesque vitae et nunc. Sed vitae leo vitae nisl
                    pellentesque semper.
                  </p>
                  <h4 className="cs_fs_18 cs_mb_12">Project Challenges : </h4>
                  <ul className="cs_mb_30 cs_list cs_style_1">
                    <li>
                      <Icon icon="fa-solid:check" />
                      Nemo enim ipsam voluptatem quia voluptas mus et iusto odio
                    </li>
                    <li>
                      <Icon icon="fa-solid:check" />
                      Vivamus vel eros vitae est aliquet pellentesque
                    </li>
                    <li>
                      <Icon icon="fa-solid:check" />
                      If you are going to use a passage of Lorem Ipsum
                    </li>
                  </ul>
                  <p className="m-0">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                    pellentesque vitae et nunc. Sed vitae leo vitae nisl
                    pellentesque semper.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="cs_project_details-info bg-white cs_rounded_20 m-0 cs_pl_50 cs_pt_50 cs_pr_50 cs_pb_50 cs_pl_lg_40 cs_pt_lg_40 cs_pr_lg_40 cs_pb_lg_40">
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Services:</h3>
                    <p className="m-0">Digital, Marketing</p>
                  </li>
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Client:</h3>
                    <p className="m-0">Kristin Watson</p>
                  </li>
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Location :</h3>
                    <p className="m-0">7529 E. Pecan St.</p>
                  </li>
                  <li>
                    <SocialBtns variant="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
