import React, { useEffect } from 'react';

import Section from '../../Section';

import Pagenation from '../../Pagenation';
import Breadcrumb from '../../Breadcrumb';
import Product from '../../ShopComponents/Product';
import Sort from '../../ShopComponents/Sort';
import Filter from '../../ShopComponents/Filter';
import { pageTitle } from '../../../helpers/PageTitle';

const productData = [
  {
    imgUrl: '/images/shop/product_1.jpeg',
    title: 'Exclusive red car wheel',
    price: '550',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_2.jpeg',
    title: 'Future AI robot toys',
    price: '520',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_3.jpeg',
    title: 'Future AI robot toys',
    price: '20',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_4.jpeg',
    title: 'Future AI robot toys',
    price: '20',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_5.jpeg',
    title: 'Future AI robot toys',
    price: '20',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_6.jpeg',
    title: 'Future AI robot toys',
    price: '20',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_1.jpeg',
    title: 'Exclusive red car wheel',
    price: '550',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_2.jpeg',
    title: 'Future AI robot toys',
    price: '520',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
  {
    imgUrl: '/images/shop/product_3.jpeg',
    title: 'Future AI robot toys',
    price: '20',
    cartList: '/shop-cart',
    shop: '/shop',
    productDetails: '/shop/product-details',
  },
];

export default function OurStorePage() {
  pageTitle('Our Store');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Store" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="140" pbLg="80">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-3">
              <Filter />
            </div>
            <div className="col-lg-9">
              <Sort />
              <div className="row cs_gap_y_40">
                {productData.map((item, index) => (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <Product {...item} />
                  </div>
                ))}
              </div>
              <Pagenation />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
