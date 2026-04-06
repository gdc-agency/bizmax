import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import HeaderStyle2 from '../Header/HeaderStyle2';

export default function LayoutStyle2() {
  return (
    <>
      <HeaderStyle2 variant='cs_type_1 cs_color_1 ' />
      <Outlet />
      <Footer />
    </>
  );
}
