import React from 'react'

export default function FromStyle7() {
  return (
    <form className="row">
      <div className="col-lg-12">
        <textarea
          cols={30}
          rows={10}
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          placeholder="Write your review *"
          defaultValue={""}
        />
        <div className="cs_height_25 cs_height_lg_25" />
      </div>
      <div className="col-lg-6">
        <input
          type="text"
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          placeholder="Your name *"
        />
        <div className="cs_height_25 cs_height_lg_25" />
      </div>
      <div className="col-lg-6">
        <input
          type="text"
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          placeholder="Your email *"
        />
        <div className="cs_height_25 cs_height_lg_25" />
      </div>
      <div className="col-lg-12">
        <div className="cs_height_15 cs_height_lg_15" />
        <div className="form-check m-0">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label m-0"
            htmlFor="flexCheckDefault"
          >
            By using this form you agree with the storage and handling of
            your data by this website. *
          </label>
        </div>
        <div className="cs_height_40 cs_height_lg_30" />
        <button className="cs_product_btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
