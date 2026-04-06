import React from 'react';

export default function FormStyle3() {
  return (
    <form action="#">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
            placeholder="Your Name"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
            placeholder="Email Address"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
            placeholder="Phone"
          />
        </div>
        <div className="col-md-6">
          <select
            name="insurance_type"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
          >
            <option>Insurance Type</option>
            <option value="General">General</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>
      </div>
      <div className="cs_progressbar cs_style_1 cs_type_1 cs_mb_30">
        <h3 className="fw-medium cs_mb_20 cs_fs_16">Web development</h3>
        <div className="cs_progress cs_rounded_8 bg-secondary cs_mb_10">
          <div
            className="cs_progress_in bg-accent cs_rounded_8 h-100"
            style={{ width: '90%' }}
          />
        </div>
        <div className="d-flex justify-content-between cs_fs_14 cs_mb_20">
          <span>Selected Value:</span>
          <span>100000</span>
        </div>
      </div>
      <button className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
        <span>Get a quote</span>
      </button>
    </form>
  );
}
