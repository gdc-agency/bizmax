import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Post from '../Post';
import { pageTitle } from '../../helpers/PageTitle';

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
    numberOfComment: 2,
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
  {
    imgUrl: '/images/post_4.jpeg',
    title: 'What services does your business provide?',
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
    numberOfComment: 6,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_6.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 12,
    commentUrl: '/blog/blog-details',
  },
];

export default function BlogGridPage() {
  pageTitle('Blog Grid');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Blog Posts" bgUrl="/images/page_header_1.jpeg" />
      <section className="cs_pt_135 cs_pt_lg_75 cs_pb_110 cs_pb_lg_50">
        <div className="container">
          <div className="row">
            {postData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <Post {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
