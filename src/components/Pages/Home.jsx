import { useEffect } from 'react';
import { pageTitle } from '../../helpers/PageTitle';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import BrandSection from '../Section/BrandSection';
import ContactSection from '../Section/ContactSection';
import HeroSection from '../Section/HeroSection';
import MovingTextSection from '../Section/MovingTextSection';
import PortfolioSection from '../Section/PortfolioSection';
import PostSection from '../Section/PostSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import WhyChooseUsSection from '../Section/WhyChooseUsSection';

const heroData = [
  {
    bgUrl: '/images/hero_slider_1.jpeg',
    titleUp: 'This Week Only for World Premier',
    title: 'Inventive and interested <br>in innovation',
    subTitle:
      'I have been a loyal customer of this auto parts company for years and I cannot <br>recommend them enough. Their extensive selection of high-quality parts and <br> accessories.',
    btnText: 'Get A Quote',
    btnUrl: '/contact',
  },
  {
    bgUrl: '/images/hero_slider_2.jpeg',
    titleUp: 'This Week Only for World Premier',
    title: 'Inventive and interested <br>in innovation',
    subTitle:
      'I have been a loyal customer of this auto parts company for years and I cannot <br>recommend them enough. Their extensive selection of high-quality parts and <br> accessories.',
    btnText: 'Get A Quote',
    btnUrl: '/contact',
  },
  {
    bgUrl: '/images/hero_slider_3.jpeg',
    titleUp: 'This Week Only for World Premier',
    title: 'Inventive and interested <br>in innovation',
    subTitle:
      'I have been a loyal customer of this auto parts company for years and I cannot <br>recommend them enough. Their extensive selection of high-quality parts and <br> accessories.',
    btnText: 'Get A Quote',
    btnUrl: '/contact',
  },
];

const movingTextData = [
  '* Creative Business & Finance',
  '* Business Inspired Template',
  '* Innovation Creative Design',
  '* Creative Business & Finance',
];

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

const testimonialData = [
  {
    imgUrl: '/images/avatar_1.png',
    rating: '5',
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
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_4.png',
    rating: '4',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_1.png',
    rating: '5',
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
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_4.png',
    rating: '4',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
];

const teamData = [
  {
    imgUrl: '/images/team_member_1.jpeg',
    name: 'Ralph Edwards',
    designation: 'Web designer',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_2.jpeg',
    name: 'Wade Warren',
    designation: 'Marketing Coordinator',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_3.jpeg',
    name: 'Jane Cooper',
    designation: 'Creative Designer',
    srcUrl: '/team/team-details',
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
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 5,
    commentUrl: '/blog/blog-details',
  },
];

export default function Home() {
  pageTitle('Business Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection data={heroData} />

      <Section>
        <MovingTextSection data={movingTextData} />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="cs_gray_bg"
        style={{ backgroundImage: 'url("/images/services_bg.png")' }}
      >
        <ServiceSection
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br />For Our Clients"
          sectionSubTitle="I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories."
          sectionTitleDown="Digital agency  services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          data={serviceData}
        />
      </Section>

      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutUsSection
          thumbUrl="/images/experience_img.jpeg"
          experienceBgUrl="/images/experience_bg.jpeg"
          experienceIconUrl="/images/experience_icon.svg"
          experienceNumber="40"
          experienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Get Ready for Success with <span className="text-accent">Bizmax</span> Your Path to Growth.'
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials."
          grothTitle="Web development"
          grothPercentage="90"
          featureList={[
            {
              title: 'Accounting and Bookkeeping',
              subTitle:
                'Services related to financial record-keeping, bookkeeping.',
            },
            {
              title: 'Human Resources (HR) Consulting',
              subTitle: 'Assistance with HR-related tasks such as recruitment.',
            },
          ]}
          btnText="Get A Quote"
          btnUrl="/contact"
          videoBtnText="Watch the video"
          videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
        />
      </Section>

      <Section pt="135" ptLg="" className="bg-gray">
        <PortfolioSection
          sectionTitle="Take a look our <br/>Completed Projects"
          sectionTitleUp="Our Latest Project"
          data={portfolioData}
        />
      </Section>

      <Section
        pt="135"
        ptLg="75"
        pb="100"
        pbLg="40"
        className="position-relative cs_iconbox_2_wrap overflow-hidden"
      >
        <WhyChooseUsSection
          imgUrlLeft="/images/why_choose_us_left_img.jpeg"
          imgUrlRight="/images/why_choose_us_right_img.jpeg"
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

      <Section pb="115" pbLg="55">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/> behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden"
        style={{ backgroundImage: `url(${'/images/cta_bg.jpeg'})` }}
      >
        <ContactSection
          sectionTitleUp="Contact With Us"
          sectionTitle="Let’s Work Together?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          textVarient="text-white"
          className="cs_mb_40"
          sectionImgUrl="/images/contact_img_1.png"
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question?',
              title: '+ 070 4531 9507',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Send Email',
              title: 'bizmax@laralink.com',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_3.svg',
              titleUp: 'Address',
              title: 'Yewtree Cottage, Kings Pyon',
              textColor: 'text-white',
            },
          ]}
        />
      </Section>

      <Section pt="140" ptLg="80">
        <BrandSection data={brandData} />
      </Section>

      <Section pt="115" ptLg="75" pb="110" pbLg="50">
        <PostSection
          data={postData}
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News <br/> and Articles"
        />
      </Section>
    </>
  );
}
