import parser from 'html-react-parser'

export default function SectionHeadingStyle3({className, sectionTitleUp, sectionTitle, sectionSubTitle, textVarient}) {
  
  return (
    <div className={`cs_section_heading cs_style_1 d-flex align-items-center 
    ${className}`}>
      <div className="cs_section_heading_in">
        {sectionTitleUp && <h3 className="cs_fs_20 cs_fs_lg_18 text-accent fw-normal cs_lh_base cs_mb_10 wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s" >{parser(sectionTitleUp)}</h3>}

        {sectionTitle && <h2 className={`cs_fs_48 cs_fs_lg_36 cs_mb_20 
        ${textVarient ? textVarient : ""}`}> {parser(sectionTitle)} </h2> }

        {sectionSubTitle && <p className={`${textVarient ? textVarient : ""} m-0`}>{parser(sectionSubTitle)}</p>}
      </div>
    </div>
  )
}
