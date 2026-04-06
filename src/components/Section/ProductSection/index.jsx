import React from 'react';
import ProductSlider from '../../Slider/ProductSlider';
import SectionHeadingStyle5 from '../../SectionHeading/SectionHeadingStyle5';

export default function ProductSection({
  data,
  sectionTitleUp,
  sectionTitle,
  sectionBtnText,
  sectionBtnUrl,
}) {
  return (
    <div className="container">
      <SectionHeadingStyle5
        sectionTitleUp={sectionTitleUp}
        sectionTitle={sectionTitle}
        sectionBtnUrl={sectionBtnUrl}
        sectionBtnText={sectionBtnText}
      />
      <ProductSlider data={data} />
    </div>
  );
}
