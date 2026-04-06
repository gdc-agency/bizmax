import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import BrandSection from '../Section/BrandSection';
import ServiceSectionStyle4 from '../Section/ServiceSection/ServiceSectionStyle4';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Accounting and Bookkeeping',
    subTitle:
      'Services related to financial record-keeping, bookkeeping, preparation and action.',
    imgUrl: '/images/service_1.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'IT Support and Consulting',
    subTitle:
      'Providing technical support, network setup, software installation system.',
    imgUrl: '/images/service_2.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Marketing and Advertising',
    subTitle:
      'Services that help businesses create and execute market strategies.',
    imgUrl: '/images/service_3.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Human Resources',
    subTitle:
      'Assistance with HR-related tasks such as recruitment, training, performance.',
    imgUrl: '/images/service_4.jpeg',
    href: '/service/services-details',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
];

const testimonialData = [
  {
    imgUrl: '/images/avatar_1.png',
    rating: '4',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_2.png',
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Peter Johnson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_3.png',
    rating: '4.7',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_4.png',
    rating: '3.9',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_3.png',
    rating: '5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
];

export default function ServicesPage() {
  pageTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Services" bgUrl="/images/page_header_1.jpeg" />

      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <ServiceSectionStyle4
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br />For Our Clients"
          data={serviceData}
        />
      </Section>

      <Section pt="110" ptLg="80" pb="110" pbLg="80" className="bg-gray">
        <BrandSection data={brandData} />
      </Section>

      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>
    </>
  );
}
