import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium text-uppercase">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
                Business
              </Link>
            </li>
            <li>
              <Link to="/corporate" onClick={() => setMobileToggle(false)}>
                Corporate
              </Link>
            </li>
            <li>
              <Link to="/finance" onClick={() => setMobileToggle(false)}>
                Financial institute
              </Link>
            </li>
            <li>
              <Link to="/insurance" onClick={() => setMobileToggle(false)}>
                Insurance Company
              </Link>
            </li>
            <li>
              <Link to="/consulting" onClick={() => setMobileToggle(false)}>
                Consulting Agency
              </Link>
            </li>
            <li>
              <Link
                to="/business-with-ecommerce"
                onClick={() => setMobileToggle(false)}
              >
                Business With E-Commerce
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/portfolio/portfolio-details"
                onClick={() => setMobileToggle(false)}
              >
                Project Details
              </Link>
            </li>
            <li>
              <Link
                to="/service/services-details"
                onClick={() => setMobileToggle(false)}
              >
                Service Details
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
                Team{' '}
              </Link>
            </li>
            <li>
              <Link
                to="/team/team-details"
                onClick={() => setMobileToggle(false)}
              >
                Team Member
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
                Pricing List
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={() => setMobileToggle(false)}>
                Our Store
              </Link>
            </li>
            <li>
              <Link
                to="/shop/product-details"
                onClick={() => setMobileToggle(false)}
              >
                Product Details
              </Link>
            </li>
            <li>
              <Link to="/shop-cart" onClick={() => setMobileToggle(false)}>
                Shop Cart
              </Link>
            </li>
            <li>
              <Link to="/shop-checkout" onClick={() => setMobileToggle(false)}>
                Shop Checkout
              </Link>
            </li>
            <li>
              <Link
                to="/shop-order-recived"
                onClick={() => setMobileToggle(false)}
              >
                Success Order
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/portfolio" onClick={() => setMobileToggle(false)}>
          Portfolio
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog-grid" onClick={() => setMobileToggle(false)}>
                Blog Grid
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog List With Sidebar
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
