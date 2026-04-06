import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import HeaderStyle3 from '../Header/HeaderStyle3';

export default function LayoutStyle3() {
  return (
    <>
      <HeaderStyle3/>
      <Outlet />
      <Footer />
    </>
  );
}
