import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import TagCloudWidget from '../Widget/TagCloudWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import SearchWidget from '../Widget/SearchWidget';
import CategoryWidget from '../Widget/CategoryWidget';
import PostStyle4 from '../Post/PostStyle4';
import ProjectSliderWidget from '../Widget/ProjectSliderWidget';
import { pageTitle } from '../../helpers/PageTitle';

const postData = [
  {
    imgUrl: '/images/post_9.jpeg',
    title: 'What services does your business provide?',
    subTitle:
      "We believe that every business deserves to succeed, no matter its size. That's why we offer affordable and customized solutions that fit each client's unique needs and goals.",
    srcUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_10.jpeg',
    title: 'Get a few solutions to hire a best candidate',
    subTitle:
      "We believe that every business deserves to succeed, no matter its size. That's why we offer affordable and customized solutions that fit each client's unique needs and goals.",
    srcUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 5,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_11.jpeg',
    title: 'Basic rules of running a small web agency',
    subTitle:
      "We believe that every business deserves to succeed, no matter its size. That's why we offer affordable and customized solutions that fit each client's unique needs and goals.",
    srcUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 19,
    commentUrl: '/blog/blog-details',
  },
];

const categoryData = [
  'Corporate',
  'Digital Solutions',
  'Business & Finance',
  'Web Designer',
  'Social Marketing',
];

const recentPost = [
  {
    imgUrl: '/images/recent-post-1.jpeg',
    title: 'What services does your business provide?',
    date: '3 April, 2024',
    srcUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/recent-post-2.jpeg',
    title: 'What services does your business provide?',
    date: '2 April, 2024',
    srcUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/recent-post-3.jpeg',
    title: 'What services does your business provide?',
    date: '1 April, 2024',
    srcUrl: '/blog/blog-details',
  },
];

const projectData = [
  {
    imgUrl: '/images/sidebar-project-1.jpeg',
    title: 'Technology',
    srcUrl: '/portfolio/portfolio-details',
  },
  {
    imgUrl: '/images/sidebar-project-1.jpeg',
    title: 'Digital Marketing',
    srcUrl: '/portfolio/portfolio-details',
  },
];

const tagData = [
  'Social Marketing',
  'Marketing',
  'Digital Market',
  'Development',
  'Web Design',
  'Design',
];

export default function BlogListPage() {
  pageTitle('Blog List');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Latest Blog" bgUrl="/images/page_header_1.jpeg" />
      <section className="cs_pt_140 cs_pt_lg_80 cs_pb_100 cs_pb_lg_80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {postData?.map((item, index) => (
                <PostStyle4 {...item} key={index} />
              ))}
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <SearchWidget />
                <CategoryWidget data={categoryData} title="Category" />
                <RecentPostWidget data={recentPost} title="Recent Post" />
                <ProjectSliderWidget data={projectData} title="Project" />
                <TagCloudWidget data={tagData} title="Tags" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
