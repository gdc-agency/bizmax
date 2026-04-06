import React, { useEffect } from 'react';
import HeroStyle3 from '../Hero/HeroStyle3';
import PostSectionStyle3 from '../Section/PostSection/PostSectionStyle3';
import Section from '../Section';
import PricingSection from '../Section/PricingSection';
import FaqSectionStyle2 from '../Section/FaqSection/FaqSectionStyle2';
import ContactSectionStyle2 from '../Section/ContactSection/ContactSectionStyle2';
import AboutSectionStyle3 from '../Section/AboutSection/AboutSectionStyle3';
import BrandSection from '../Section/BrandSection';
import ServiceSectionStyle2 from '../Section/ServiceSection/ServiceSectionStyle2';
import FunfactSection from '../Section/FunfactSection';
import PortfolioSectionStyle3 from '../Section/PortfolioSection/PortfolioSectionStyle3';
import TestimonialSliderStyle3 from '../Slider/TestimonialSliderStyle3';
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

const funfactData = [
  {
    iconUrl: '/images/icons/funfact_icon_1.svg',
    funfactNumber: '50',
    title: 'Happy Clients',
  },
  {
    iconUrl: '/images/icons/funfact_icon_2.svg',
    funfactNumber: '35',
    title: 'Project Done',
  },
  {
    iconUrl: '/images/icons/funfact_icon_3.svg',
    funfactNumber: '20',
    title: 'Awards Win',
  },
  {
    iconUrl: '/images/icons/funfact_icon_4.svg',
    funfactNumber: '500',
    title: 'Profit Gain',
  },
];

const portfolioData = [
  {
    imgUrl: '/images/portfolio_1.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
];

const faqData = [
  {
    title: 'What services does your business provide?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote. Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote.",
  },
  {
    title: 'How much do your services cost?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote. Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote.",
  },
  {
    title: 'Do you offer any guarantees or refunds?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote. Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote.",
  },
  {
    title: 'How do I get started with your services?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote. Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us for a quote.",
  },
];

const testimonialData = [
  {
    imgUrl: '/images/testimonial_thumb_1.png',
    subTitle:
      "I have been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    rating: '4',
    designation: 'Web design',
    name: 'Darlene Robertson',
  },
  {
    imgUrl: '/images/testimonial_thumb_2.png',
    subTitle:
      "I have been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    rating: '4.5',
    designation: 'Ui designer',
    name: 'Robertson',
  },
  {
    imgUrl: '/images/testimonial_thumb_3.png',
    subTitle:
      "I have been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    rating: '5',
    designation: 'Web developer',
    name: 'Darlene',
  },
];

const postData = [
  {
    imgUrl: '/images/post_1.jpeg',
    title: 'What services does your business provide?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 5,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 10,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 2,
    commentUrl: '/blog/blog-details',
  },
];

export default function Home3() {
  pageTitle('Financial institute Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroStyle3
        heroBg="/images/hero_bg.jpeg"
        heroImg="/images/hero_mini_img_1.png"
        videoUrl="/images/video.mp4"
        title=" Your trusted source <br /> for financial insights <br /> and services"
        subTitle="Welcome to BizServe, your one-stop destination for comprehensive
        <br /> financial insights and top-notch services. "
        btnUrl="/contact"
        btnText="Get A Quote"
      />

      <Section
        pt="140"
        ptLg="80"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutSectionStyle3
          imgUrl="/images/about_img_3.png"
          bgImgUrl="/images/experience_bg.jpeg"
          workExprience="40"
          workExprienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Your Trusted Business
          <span className="text-accent">Agency</span>'
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials.."
          featureList={[
            {
              imgUrl: '/images/icons/iconbox_icon_1.svg',
              title: 'Accounting and bookkeeping',
              desc: 'Your reliable partner in simplifying the complexities of accounting and bookkeeping.',
            },
            {
              imgUrl: '/images/icons/iconbox_icon_2.svg',
              title: 'Customer service and support',
              desc: 'Our pricing varies depending on the specific services you require. We are happy to support you.',
            },
            {
              imgUrl: '/images/icons/iconbox_icon_3.svg',
              title: 'Finance market advisory',
              desc: 'Your reliable partner in simplifying the complexities of accounting and bookkeeping.',
            },
          ]}
          btnText="Get A Quote"
          btnUrl="/contact"
          videoBtnText="Watch the video"
          videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
        />
      </Section>

      <Section pb="140" pbLg="80">
        <BrandSection data={brandData} />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="cs_gray_bg"
        style={{ backgroundImage: `url('/images/services_bg.png')` }}
      >
        <ServiceSectionStyle2
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br /> For Our Clients"
          data={serviceData}
        />
      </Section>

      <Section pt="140" ptLg="80" pb="140" pbLg="80">
        <FunfactSection
          sectionTitleUp="Company’s Statistic"
          sectionTitle="Achievements of Our Bizmax Finance"
          sectionSubTitle="Providing legal advice, contract drafting, compliance
          assistance, intellectual property protection, and other legal
          support."
          data={funfactData}
          imgUrl="/images/statistic_img.png"
          shapeImgUrl="/images/shape_1.png"
        />
      </Section>

      <Section
        pt="133"
        ptLg="73"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: `url('/images/faq_bg_2.jpeg')` }}
      >
        <PortfolioSectionStyle3
          data={portfolioData}
          sectionTitle="Explore Our Best <br/> Recent Work Projects"
          sectionTitleUp="Our Latest Project"
        />
      </Section>

      <Section
        pt="140"
        ptLg="80"
        pb="140"
        pbLg="120"
        style={{ backgroundImage: `url('/images/testimonial_bg_1.jpeg')` }}
      >
        <TestimonialSliderStyle3 data={testimonialData} />
      </Section>

      <Section
        pt="80"
        ptLg="75"
        pb="85"
        pbLg="55"
        style={{ backgroundImage: `url('/images/contact_bg.jpeg')` }}
      >
        <ContactSectionStyle2
          sectionTitle="Let’s Work Together?"
          sectionTitleUp="Contact With Us"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          featureList={[
            'Refreshing to get such a personal touch',
            'Refreshing to get such a personal touch',
          ]}
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question?',
              title: '+ 070 4531 9507',
              textColor: 'text-primary',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Send Email',
              title: 'bizmax@laralink.com',
              textColor: 'text-primary',
            },
          ]}
        />
      </Section>

      <Section
        pt="133"
        ptLg="73"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: `url('/images/faq_bg_2.jpeg')` }}
      >
        <FaqSectionStyle2 data={faqData} />
      </Section>

      <Section pt="140" ptLg="80" className="cs_mt_30">
        <PricingSection />
      </Section>

      <Section pt="100" ptLg="40" pb="110" pbLg="50">
        <PostSectionStyle3
          sectionTitle="Find Out Latest News <br/> and Articles"
          sectionTitleUp="Find The Blogs"
          data={postData}
        />
      </Section>
    </>
  );
}
