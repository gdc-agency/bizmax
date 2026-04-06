import React, { useEffect } from 'react';
import HeroStyle4 from '../Hero/HeroStyle4';
import Section from '../Section';
import WhyChooseUsSection from '../Section/WhyChooseUsSection';
import ServiceSectionStyle3 from '../Section/ServiceSection/ServiceSectionStyle3';
import BrandSection from '../Section/BrandSection';
import WorkingProcessSection from '../Section/WorkingProcessSection.jsx';
import CtaSection from '../Section/CtaSection/index.jsx';
import PostSectionStyle4 from '../Section/PostSection/PostSectionStyle4.jsx';
import AboutSectionStyle4 from '../Section/AboutSection/AboutSectionStyle4.jsx';
import TestimonialSectionStyle2 from '../Section/TestimonialSection/TestimonialSectionStyle2.jsx';
import InsuranceSection from '../Section/InsuranceSection/index.jsx';
import { pageTitle } from '../../helpers/PageTitle.js';

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

const stepData = [
  {
    imgUrl: 'images/step_1.jpeg',
    title: 'Marketing',
    desc: 'We provide a range of digital marketing lutions including website design.',
    step: '01',
  },
  {
    imgUrl: 'images/step_2.jpeg',
    title: 'Development',
    desc: 'We provide a range of digital marketing lutions including website design.',
    step: '02',
  },
  {
    imgUrl: 'images/step_3.jpeg',
    title: 'Release',
    desc: 'We provide a range of digital marketing lutions including website design.',
    step: '03',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
];

const postData = [
  {
    imgUrl: '/images/post_1.jpeg',
    title: 'What services does your business provide?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 6,
    commentUrl: '/blog/blog-details',
  },
];

export default function Home4() {
  pageTitle('Insurance Company Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroStyle4
        heroImg="/images/hero_img_2.jpeg"
        heroBg="/images/hero_bg_2.png"
        titleUp="Get Guardian Shield Insurance!"
        title="Bizmax Your Path to Comprehensive Insurance Solutions"
        subTitle="Welcome to BizServe, your one-stop destination for comprehensive
        financial insights and top-notch services."
        experienceText="15+ Years of Experience"
        btn1Url="/contact"
        btn1Text="Get A Quote"
        btn2Url="/about"
        btn2Text="Learn More"
      />

      <Section pt="133" ptLg="75">
        <ServiceSectionStyle3
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br /> For Our Clients"
          data={serviceData}
        />
      </Section>

      <Section
        pt="140"
        pb="140"
        ptLg="80"
        pbLg="80"
        className="position-relative"
      >
        <AboutSectionStyle4
          imgUrl="/images/about_img_4.png"
          sectionTitleUp="About Us"
          sectionTitle='Your Trusted Finance Consulting <span className="text-accent">Agency</span>'
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for
          businesses. Creating visual content, such as logos, brochures,
          infographics, and other branding materials."
          srcUrl="/contact"
          aboutList={[
            'Tailored Solutions',
            'Business Financial Security',
            'Suitable Payment option',
            'Holistic Protection',
            'Global Coverage',
            'Financial Security',
            'Responsive Support',
          ]}
        />
      </Section>

      <Section pb="140" pbLg="80">
        <BrandSection data={brandData} />
      </Section>

      <Section
        pt="135"
        ptLg="75"
        pb="100"
        pbLg="40"
        className="position-relative cs_type_1 cs_iconbox_2_wrap overflow-hidden"
      >
        <WhyChooseUsSection
          imgUrlLeft="/images/why_choose_us_left_img.jpeg"
          imgUrlRight="/images/why_choose_us_right_img_2.jpeg"
          sectionTitleUp="Why Choose Us"
          sectionTitle='Developing a <span className="text-accent"> design that <br /> is easy </span> to use and <br /> navigate'
          sectionSubTitle="Providing legal advice, contract drafting, compliance
          assistance, intellectual <br /> property protection, and other
          legal support for businesses. Creating visual <br /> content,
          such as logos, brochures, infographics."
          services={[
            {
              imgUrl: '/images/icons/service_icon_5.svg',
              title: 'Digital agency services',
            },
            {
              imgUrl: '/images/icons/service_icon_6.svg',
              title: 'Creative digital agency',
            },
            {
              imgUrl: '/images/icons/service_icon_7.svg',
              title: 'Super expert developers',
            },
            {
              imgUrl: '/images/icons/service_icon_8.svg',
              title: 'Creating a user friendly design',
            },
          ]}
        />
      </Section>

      <Section pt="133" ptLg="75" pb="140" pbLg="80">
        <TestimonialSectionStyle2
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual<br/> property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>

      <Section
        pt="140"
        ptLg="80"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: `url('/images/faq_bg_2.jpeg')` }}
      >
        <InsuranceSection
          sectionTitleUp="Check Your Favorite Insurance"
          sectionTitle="Get Started Favorite Insurance"
          imgUrl="/images/insurance.png"
        />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="116"
        pbLg="56"
        style={{ backgroundImage: 'url("/images/staps_bg.jpeg")' }}
      >
        <WorkingProcessSection
          sectionTitleUp="Working Process"
          sectionTitle="Check How We Work in <br/>  Easy Steps"
          data={stepData}
        />
      </Section>

      <Section>
        <CtaSection
          bgImgUrl="/images/cta_bg_2.jpeg"
          imgUrl="/images/cta_img.png"
          title="Locate an Insurance Agent or Initiate the Tracking of Your Claims"
          btnUrl="/contact"
          btnText="Take Your Claim"
        />
      </Section>

      <Section pt="100" ptLg="40" pb="110" pbLg="50">
        <PostSectionStyle4
          sectionTitle="Find Out Latest News <br/> and Articles"
          sectionTitleUp="Find The Blogs"
          data={postData}
        />
      </Section>
    </>
  );
}
