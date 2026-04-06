import React from 'react'

export default function FormStyle5() {
  return (
    <form action="#">
      <input
        className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-white"
        type="text"
        placeholder="Your Name"
      />
      <input
        className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-white"
        type="text"
        placeholder="Your Email"
      />
      <textarea
        className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_25 bg-white resize-none"
        placeholder="Message here ..."
        cols={5}
        rows={6}
        defaultValue={""}
      />
      <button className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden w-100">
        <span>Send Message</span>
      </button>
    </form>
  )
}
