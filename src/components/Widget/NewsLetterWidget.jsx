import React from 'react';

export default function NewsLetterWidget({ title, subTitle }) {
  return (
    <div className="cs_newsletter cs_style_1">
      <h2 className="cs_newsletter_title text-white cs_fs_22 cs_mb_9">
        {title}
      </h2>
      <p className="cs_newsletter_subtitle cs_mb_26">{subTitle}</p>
      <form action="/" className="cs_newsletter_form position-relative">
        <input
          type="email"
          className="cs_newsletter_input text-white cs_fs_14 cs_rounded_5 border-0 w-100 cs_pt_10"
          placeholder="Enter your mail"
        />
        <button className="cs_newsletter_btn cs_fs_14 cs_rounded_5 cs_transition_4 bg-accent position-absolute text-uppercase">
          <span>Go</span>
        </button>
      </form>
    </div>
  );
}
