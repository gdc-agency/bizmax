import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Gallery from '../Gallery';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

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

export default function PortfolioPage() {
  pageTitle('Portfolio');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Portfolio" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="130" ptLg="75" pb="125" pbLg="55">
        <div className="container">
          <Gallery data={portfolioData} />
        </div>
      </Section>
    </>
  );
}
