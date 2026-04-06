import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import TeamSection from '../Section/TeamSection';
import { pageTitle } from '../../helpers/PageTitle';

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
    imgUrl: '/images/team_member_1.jpeg',
    name: 'Ralph Edwards',
    designation: 'Web designer',
    srcUrl: '/team/team-details',
  },
];

export default function TeamPage() {
  pageTitle('Team');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Team Members" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="110" pbLg="55">
        <div className="container">
          <TeamSection data={teamData} />
        </div>
      </Section>
    </>
  );
}
