import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import PricingSection from '../Section/PricingSection';
import { pageTitle } from '../../helpers/PageTitle';

export default function PricingPage() {
  pageTitle('Pricing');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Pricing List" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="110" pbLg="40">
        <PricingSection />
      </Section>
    </>
  );
}
