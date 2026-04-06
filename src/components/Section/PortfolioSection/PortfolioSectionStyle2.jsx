import Gallery from '../../Gallery';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function PortfolioSectionStyle2({data,sectionTitle,sectionSubTitle,sectionTitleUp}) {
  return (
    <div className="container">
      <SectionHeadingStyle2 sectionTitleUp={sectionTitleUp} sectionTitle={sectionTitle} sectionSubTitle={sectionSubTitle} className='cs_mb_60 cs_mb_lg_40' />
      <Gallery data={data}/>
    </div>
  )
}

