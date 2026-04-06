import React, { useEffect } from 'react';
import HeroStyle5 from '../Hero/HeroStyle5';
import Section from '../Section';
import MovingTextSection from '../Section/MovingTextSection';
import AboutUsSection from '../Section/AboutSection';
import PortfolioSectionStyle2 from '../Section/PortfolioSection/PortfolioSectionStyle2';
import TestimonialSectionStyle2 from '../Section/TestimonialSection/TestimonialSectionStyle2';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2';
import FunfactSection from '../Section/FunfactSection';
import ContactSection from '../Section/ContactSection';
import PostSectionStyle5 from '../Section/PostSection/PostSectionStyle5';
import { pageTitle } from '../../helpers/PageTitle';

const movingTextData = [
  '* Creative Business & Finance',
  '* Business Inspired Template',
  '* Innovation Creative Design',
  '* Creative Business & Finance',
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
  {
    imgUrl: '/images/team_member_5.jpeg',
    name: 'Jane Cooper',
    designation: 'Creative Designer',
    srcUrl: '/team/team-details',
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

const postData = [
  {
    imgUrl: '/images/post_1.jpeg',
    title: 'What services does your business provide?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 2,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 5,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_1.jpeg',
    title: 'What services does your business provide?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 2,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
];

export default function Home5() {
  pageTitle('Consulting Agency Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroStyle5
        bgImg="/images/hero_video_bg.jpeg"
        title="Strategic Solutions for Business Growth Your Path to Success"
        subTitle="Welcome to BizServe, your one-stop destination for comprehensive <br /> financial insights and top-notch services."
        srcUrl="/contact"
      />

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

      <Section>
        <MovingTextSection data={movingTextData} />
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

      <Section pt="133" ptLg="75" pb="140" pbLg="80">
        <TestimonialSectionStyle2
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual<br/> property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>

      <Section pb="55" pbLg="0">
        <TeamSectionStyle2
          sectionTitle="Meet the professional team <br/>
            behind the success"
          sectionTitleUp="Meet Our Team Member"
          data={teamData}
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

      <Section pt="133" ptLg="75" pb="110" pbLg="50" className="cs_gray_bg">
        <PostSectionStyle5
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News
          And Articles"
          data={postData}
        />
      </Section>
    </>
  );
}
