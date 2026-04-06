import Breadcrumb from '../Breadcrumb';
import CategoryWidget from '../Widget/CategoryWidget';
import ProjectSliderWidget from '../Widget/ProjectSliderWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import SearchWidget from '../Widget/SearchWidget';
import TagCloudWidget from '../Widget/TagCloudWidget';
import PostStyle5 from '../Post/PostStyle5';
import SocialBtnsStyle2 from '../SocialBtns/SocialBtnsStyle2';
import CommentList from '../Widget/CommentList';
import FormStyle4 from '../Form/FormStyle4';
import { useEffect } from 'react';
import { pageTitle } from '../../helpers/PageTitle';

const categoryData = [
  'Corporate',
  'Digital Solutions',
  'Business & Finance',
  'Web Designer',
  'Social Marketing',
];

const postData = [
  {
    imgUrl: '/images/recent-post-1.jpeg',
    title: 'What services does your business provide?',
    date: '3 April, 2024',
    srcUrl: '/',
  },
  {
    imgUrl: '/images/recent-post-2.jpeg',
    title: 'What services does your business provide?',
    date: '2 April, 2024',
    srcUrl: '/',
  },
  {
    imgUrl: '/images/recent-post-3.jpeg',
    title: 'What services does your business provide?',
    date: '1 April, 2024',
    srcUrl: '/',
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

const tagList2 = ['Social Marketing', 'Marketing', 'Digital Market'];

export default function BlogDetailsPage() {
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Blog Details" bgUrl="/images/page_header_1.jpeg" />
      <section className="cs_pt_140 cs_pt_lg_80 cs_pb_140 cs_pb_lg_80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PostStyle5
                imgUrl="/images/post-details-1.jpeg"
                title="What services does your business provide?"
                subTitle="There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Suspendisse ultricies vestibulum vehicula. Proin laoreet porttitor lacus. Duis auctor vel ex eu elementum. Fusce eu volutpat felis. Proin sed eros tincidunt, sagittis sapien eu, porta diam. Aenean finibus scelerisque nulla non facilisis. Fusce vel orci sed quam gravida condimentum. Aliquam condimentum, massa vel mollis volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu, ultrices placerat sem. Praesent vitae metus dolor. Nulla a erat et orci mattis auctor.
                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper."
              />
              <div className="d-flex justify-content-between align-items-center bg-gray cs_pt_25 cs_pb_25 cs_pl_40 cs_pl_lg_25 cs_pr_40 cs_pr_lg_25 flex-wrap cs_row_gap_15 cs_column_gap_15 cs_mb_40">
                <div className="cs_post_details-meta-tag">
                  <h4 className="cs_sidebar_widget_title">Tags</h4>
                  <div className="tagcloud">
                    {tagList2.map((item, index) => (
                      <a href="/" className="tag-cloud-link" key={index}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <SocialBtnsStyle2 />
              </div>
              <h2 className="cs_fs_26 cs_mb_40">2 Comments</h2>
              <CommentList />
              <h2 className="cs_fs_26 cs_mb_40">Leave a Comment</h2>
              <FormStyle4 />
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <SearchWidget />
                <CategoryWidget data={categoryData} title="Category" />
                <RecentPostWidget data={postData} title="Recent Post" />
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
