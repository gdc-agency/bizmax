import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import Home2 from './components/Pages/Home2';
import Home3 from './components/Pages/Home3';
import Home4 from './components/Pages/Home4';
import Home5 from './components/Pages/Home5';
import Home6 from './components/Pages/Home6';
import AboutPage from './components/Pages/AboutPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import TeamPage from './components/Pages/TeamPage';
import TeamMemberPage from './components/Pages/TeamMemberPage';
import PricingPage from './components/Pages/PricingPage';
import OurStorePage from './components/Pages/shop/OurStorePage';
import ProductDetailsPage from './components/Pages/shop/ProductDetailsPage';
import BlogGridPage from './components/Pages/BlogGridPage';
import BlogListPage from './components/Pages/BlogListPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import LayoutStyle2 from './components/Layout/LayoutStyle2';
import LayoutStyle3 from './components/Layout/LayoutStyle3';
import ShopCartPage from './components/Pages/shop/ShopCartPage';
import ShopCheckoutPage from './components/Pages/shop/ShopCheckoutPage';
import ShopOrderRecived from './components/Pages/shop/ShopOrderRecived';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/corporate" element={<Home2 />} />
        <Route path="/finance" element={<Home3 />} />
        <Route path="/business-with-ecommerce" element={<Home6 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route
          path="/portfolio/:portfolioId"
          element={<PortfolioDetailsPage />}
        />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:teamId" element={<TeamMemberPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/shop" element={<OurStorePage />} />
        <Route path="/shop/:productId" element={<ProductDetailsPage />} />
        <Route path="/shop-cart" element={<ShopCartPage />} />
        <Route path="/shop-checkout" element={<ShopCheckoutPage />} />
        <Route path="/shop-order-recived" element={<ShopOrderRecived />} />
        <Route path="/blog-grid" element={<BlogGridPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/insurance" element={<LayoutStyle2 />}>
        <Route index element={<Home4 />} />
      </Route>
      <Route path="/consulting" element={<LayoutStyle3 />}>
        <Route index element={<Home5 />} />
      </Route>
    </Routes>
  );
}

export default App;
