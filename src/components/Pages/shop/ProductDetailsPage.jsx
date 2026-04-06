import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import FromStyle7 from '../../Form/FromStyle7';
import ImageView from '../../ShopComponents/ImageView';
import Ratings from '../../Rating';
import { Link } from 'react-router-dom';
import CartAmountToggle from '../../ShopComponents/CartAmountToggle';
import { pageTitle } from '../../../helpers/PageTitle';

export default function ProductDetailsPage() {
  pageTitle('Product Details');
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Product Details" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="140" pbLg="80">
        <div className="container">
          <div className="cs_pb_100">
            <div className="row">
              <div className="col-lg-6">
                <ImageView />
              </div>
              <div className="col-lg-6">
                <div className="cs_single-product-details">
                  <h2>Awesome men t-shirt</h2>
                  <div className="cs_single_product-price_review cs_mb_25">
                    <div className="cs_single_product_price cs_primary_font cs_semi_bold">
                      $200.00
                    </div>
                    <Ratings ratingNumber={4.5} />
                  </div>
                  <div className="cs_single-product-details-text cs_pb_35">
                    <p>
                      Our t-shirt features a classic design with a crew neckline
                      and short sleeves, making it a versatile piece that can be
                      dressed up or down. The relaxed fit is perfect for all
                      body types, providing ample room for movement and ensuring
                      a flattering silhouette.
                    </p>
                    <p>
                      Available in a range of colors, our men's t-shirt is the
                      perfect choice for any occasion. Wear it with jeans and
                      sneakers for a casual look or dress it up with slacks and
                      a blazer for a more formal event. No matter how you style
                      it, you're sure to look and feel your best. So why wait?
                      Add our men's t-shirt to your wardrobe today and
                      experience the ultimate combination of comfort and style.
                    </p>
                  </div>
                  <div className="cs_quantity_and_btn cs_mb_40 cs_mb_lg_30">
                    <CartAmountToggle quantity={1} />
                    <Link
                      to="/shop-cart"
                      className="cs_product_btn cs_semi_bold"
                    >
                      Add to cart
                    </Link>
                  </div>
                  <ul className="cs_single_product_info">
                    <li>
                      <b>SKU: </b>0215552
                    </li>
                    <li>
                      <b>Categories: </b>Graphics
                    </li>
                    <li>
                      <b>Tags: </b>Design, Brand, Clothing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_product_meta_info cs_pt_100 cs_pt_lg_60">
            <div className="cs_tabs cs_style1">
              <ul className="cs_tab_links cs_product_tab cs_primary_font cs_semi_bold">
                <li
                  className={activeTab === 0 ? 'active' : ''}
                  onClick={() => setActiveTab(0)}
                >
                  <span>Description</span>
                </li>
                <li
                  className={activeTab === 1 ? 'active' : ''}
                  onClick={() => setActiveTab(1)}
                >
                  <span>Additional information</span>
                </li>
                <li
                  className={activeTab === 2 ? 'active' : ''}
                  onClick={() => setActiveTab(2)}
                >
                  <span>Review (1)</span>
                </li>
              </ul>
              <div className="cs_tab_body">
                <div
                  className={activeTab === 0 ? 'cs_tab active' : 'cs_tab'}
                  id="tab_1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut
                  metus leo. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Sed luctus, dui eu
                  sagittis sodales, nulla nibh sagittis augue, vel porttitor
                  diam enim non metus. Vestibulum aliquam augue neque. Phasellus
                  tincidunt odio eget ullamcorper efficitur. Cras placerat ut
                  turpis pellentesque vulputate. Nam sed consequat tortor.
                  Curabitur finibus sapien dolor. Ut eleifend tellus nec erat
                  pulvinar dignissim. Nam non arcu purus. Vivamus et massa
                  massa.
                </div>
                <div
                  className={activeTab === 1 ? 'cs_tab active' : 'cs_tab'}
                  id="tab_2"
                >
                  <table className="m-0">
                    <tbody>
                      <tr>
                        <td>Color</td>
                        <td>Blue, Gray, Green, Red, Yellow</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>Large, Medium, Small</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                </div>
                <div
                  className={activeTab === 2 ? 'cs_tab active' : 'cs_tab'}
                  id="tab_3"
                >
                  <ul className="cs_client_review_list">
                    <li>
                      <div className="cs_client_review">
                        <div className="cs_review_media">
                          <div className="cs_review_media_thumb">
                            <img src="/images/avatar_2.png" alt="Avatar" />
                          </div>
                          <div className="cs_review_media_right">
                            <div
                              className="cs_rating text-accent cs_mb_6"
                              data-rating="4.5"
                            >
                              <div className="cs_rating_percentage" />
                            </div>
                            <p className="m-0 cs_white_color cs_semi_bold">
                              Zhon Abony
                            </p>
                          </div>
                        </div>
                        <div className="cs_review_posted_by">
                          August 12, 2023
                        </div>
                        <div className="cs_review_text">
                          I recently purchased the Arino T-shirts and I'm
                          thoroughly impressed. The sound quality is
                          exceptional, the wireless connectivity is seamless,
                          and the noise cancellation technology is a standout
                          feature. They're a bit pricey, but well worth the
                          investment. Highly recommend.
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="cs_height_85 cs_height_lg_50" />
                  <p className="m-0">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="cs_height_20 cs_height_lg_20" />
                  <div className="cs_input_rating_wrap">
                    <p>Your rating *</p>
                    <div
                      className="cs_input_rating cs_accent_color"
                      data-rating={0}
                    >
                      <i className="fa-regular fa-star" />
                      <i className="fa-regular fa-star" />
                      <i className="fa-regular fa-star" />
                      <i className="fa-regular fa-star" />
                      <i className="fa-regular fa-star" />
                    </div>
                  </div>
                  <div className="cs_height_20 cs_height_lg_20" />
                  <FromStyle7 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
