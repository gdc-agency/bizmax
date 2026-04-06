import { useEffect } from 'react';
import HeroStyle2 from '../Hero/HeroStyle2';
import LocationInMap from '../LocationInMap';
import Section from '../Section';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2.jsx';
import BrandSection from '../Section/BrandSection';
import ContactSectionStyle2 from '../Section/ContactSection/ContactSectionStyle2.jsx';
import FaqSection from '../Section/FaqSection/index.jsx';
import PortfolioSectionStyle2 from '../Section/PortfolioSection/PortfolioSectionStyle2.jsx';
import PostSectionStyle2 from '../Section/PostSection/PostSectionStyle2.jsx';
import ServiceSection from '../Section/ServiceSection/index.jsx';
import WorkingProcessSection from '../Section/WorkingProcessSection.jsx';
import TestimonialSliderStyle3 from '../Slider/TestimonialSliderStyle3.jsx';
import VideoBlockStyle2 from '../VideoBlock/VideoBlockStyle2.jsx';
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
];

const videoData = {
  imgSrc: '/images/video_block.jpeg',
  bgImgUrl: '/images/video_block_shape.jpeg',
  videoSrc: 'https:/www.youtube.com/embed/0Tz4Ycjbdbg',
  title: 'Your Trusted Agency of <br /> Choice',
};

const faqData = [
  {
    title: 'What services does your business provide?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
  {
    title: 'How much do your services cost?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
  {
    title: 'Do you offer any guarantees or refunds?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
  {
    title: 'How do I get started with your services?',
    desc: "Our pricing varies depending on the specific services you require and the scope of your project. We offer customized solutions to fit each client's unique needs and budget. Please contact us.",
  },
];

const testimonialData = [
  {
    imgUrl: '/images/testimonial_thumb_1.png',
    subTitle:
      "I have been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    rating: '5',
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
    rating: '4',
    designation: 'Web developer',
    name: 'Darlene',
  },
];

const portfolioData = [
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'digital',
  },
  {
    imgUrl: '/images/portfolio_1.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'graphics',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'marketing',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'graphics',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio_1.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'marketing',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'graphics',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'marketing',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'digital',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
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

const postData = [
  {
    imgUrl: '/images/post_4.jpeg',
    title: 'What services does your business?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_5.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_6.jpeg',
    title: 'The creative studio coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 6,
    commentUrl: '/blog/blog-details',
  },
];

const locationData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd';

export default function Home2() {
  pageTitle('Corporate Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroStyle2
        titleUp="Digital Agency"
        title='Your Trusted <br />Agency Of<span className="text-accent position-relative d-inline-block">Business</span>'
        btnText="Get A Quote"
        btnUrl="/contact"
        bgUrl="/images/hero_slider_4.jpeg"
      />

      <Section pt="140" ptLg="80" className="bg-primary">
        <ServiceSection
          data={serviceData}
          sectionTitleDown="<span className='text-accent'>Digital agency</span> services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          textVariant="text-white"
        />
      </Section>
      <Section pt="60" ptLg="40" className="bg-primary">
        <VideoBlockStyle2 data={videoData} />
      </Section>

      <Section pb="140" pbLg="80" className="position-relative">
        <AboutSectionStyle2
          imgUrl="/images/about_img_1.png"
          bgImgUrl="/images/experience_bg_2.jpeg"
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
              desc: 'We provide a range of digital marketing solutions.',
            },
            {
              imgUrl: '/images/icons/iconbox_icon_2.svg',
              title: 'Accounting and bookkeeping',
              desc: 'We provide a range of digital marketing solutions.',
            },
          ]}
        />
      </Section>

      <Section pb="140" pbLg="80" className="position-relative overflow-hidden">
        <FaqSection
          sectionTitleUp="frequently asked questions"
          sectionTitle="Question & Answer"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics. The timeline for seeing results depends on the specific services you choose and the current state of your business."
          data={faqData}
          bgImgUrl="/images/faq_bg.jpeg"
          imgUrl="/images/why_chose_1.jpeg"
          iconUrl="/images/icons/faq_icon_1.svg"
          featureTitle="We Have Many Happy Clients Allover World Wide"
          featureList={['Award Wining Agency', 'Higest Success Rates']}
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
        ptLg="75"
        pb="115"
        pbLg="55"
        style={{ backgroundImage: `url('/images/gallery_bg.jpeg')` }}
        className="background-top-filled"
      >
        <PortfolioSectionStyle2
          sectionTitle="Explore Our Best <br/> Recent Work Projects"
          sectionTitleUp="Our Latest Project"
          data={portfolioData}
        />
      </Section>

      <Section style={{ backgroundImage: 'url("/images/staps_bg.jpeg")' }}>
        <div className="cs_pt_140 cs_pb_133">
          <BrandSection data={brandData} />
        </div>
        <div className="cs_pb_131">
          <WorkingProcessSection
            sectionTitleUp="Working Process"
            sectionTitle="Check How We Work in <br/>  Easy Steps"
            data={stepData}
          />
        </div>
      </Section>

      <Section pt="133" ptLg="70" pb="75" pbLg="45" className="bg-gray">
        <PostSectionStyle2
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News <br/> and Articles"
          data={postData}
        />
      </Section>

      <LocationInMap data={locationData} />
    </>
  );
}
