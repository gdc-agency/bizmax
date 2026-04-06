import React from 'react';

export default function ContactForm({ variant }) {
  return (
    <form
      action="#"
      className={`cs_contact_form bg-white cs_pt_64 cs_pl_80 cs_pr_80 cs_pb_80 cs_pl_lg_30 cs_pr_lg_30 position-relative cs_rounded_20 ${
        variant ? variant : ''
      }`}
      style={{ backgroundImage: `url('/images/contact_bg_pattern.svg')` }}
    >
      <div className="cs_section_heading cs_style_1 d-flex align-items-center text-center cs_mb_30">
        <div className="cs_section_heading_in">
          <h2 className="cs_fs_48 cs_fs_lg_36 m-0">Contact Us</h2>
        </div>
      </div>
      <input
        className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-gray"
        type="text"
        placeholder="Your Name"
      />
      <input
        className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-gray"
        type="email"
        placeholder="Your Email"
      />
      <textarea
        className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_30 bg-gray"
        placeholder="Message here ..."
        cols={30}
        rows={4}
        defaultValue={''}
      />
      <button className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
        <span>Submit Now</span>
      </button>
    </form>
  );
}
