import parse from 'html-react-parser';

export default function SectionHeading({ sectionTitleUp, sectionTitle, sectionSubTitle }) {
  return (
    <div className="cs_section_heading cs_style_1 d-flex align-items-center cs_mb_60 cs_mb_lg_40 cs_column_gap_15 cs_row_gap_15">
      <div className="cs_section_heading_in">
        {sectionTitleUp && (
          <h3 className="cs_fs_20 cs_fs_lg_18 text-accent fw-normal cs_lh_base cs_mb_10">
            {parse(sectionTitleUp)}
          </h3>
        )}
        {sectionTitle && <h2 className="cs_fs_48 cs_fs_lg_36 m-0">{parse(sectionTitle)}</h2>}
      </div>
      {sectionSubTitle && (
        <div className="cs_section_heading_right">
          <p className="cs_section_text m-0">{parse(sectionSubTitle)}</p>
        </div>
      )}
    </div>
  );
}
