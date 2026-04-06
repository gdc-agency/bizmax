import React from 'react';
import parser from 'html-react-parser';
import ArrowWidget from '../Widget/ArrowWidget';

export default function SectionHeadingStyle4({
  sectionTitleUp,
  sectionTitle,
  handlePrev,
  handleNext,
}) {
  return (
    <div className="cs_section_heading cs_style_1 d-flex align-items-center cs_mb_60 cs_mb_lg_40 cs_column_gap_15 cs_row_gap_15 cs_mb_60 cs_mb_lg_40">
      <div className="cs_section_heading_in">
        <h3 className="cs_fs_20 cs_fs_lg_18 text-accent fw-normal cs_lh_base cs_mb_10">
          {parser(sectionTitleUp)}
        </h3>
        <h2 className="cs_fs_48 cs_fs_lg_36 m-0">{parser(sectionTitle)}</h2>
      </div>
      <div className="cs_section_heading_right">
        <ArrowWidget
          handlePrev={handlePrev}
          handleNext={handleNext}
          className="justify-content-lg-end justify-content-start"
        />
      </div>
    </div>
  );
}
