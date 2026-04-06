import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Section from '../../Section';
import Breadcrumb from '../../Breadcrumb';
import CartAmountToggle from '../../ShopComponents/CartAmountToggle';
import { Link } from 'react-router-dom';
import { pageTitle } from '../../../helpers/PageTitle';

export default function ShopCartPage() {
  pageTitle('Cart');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Shop Cart" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="140" pbLg="80">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-xl-8">
              <div className="table-responsive cs_mb_5">
                <table className="cs_cart_table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="cs_cart_table_media">
                          <img
                            src="/images/shop/cart-product-1.jpeg"
                            alt="Thumb"
                          />
                          <h3>Awesome men T-shirt</h3>
                        </div>
                      </td>
                      <td>$300.00</td>
                      <td>
                        <CartAmountToggle quantity={3} />
                      </td>
                      <td>$20.00</td>
                      <td className="text-center">
                        <button className="cs_cart-table-close">
                          <Icon icon="heroicons:x-mark-20-solid" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cs_cart_table_media">
                          <img
                            src="/images/shop/cart-product-2.jpeg"
                            alt="Thumb"
                          />
                          <h3>Fuyure AI robot toy</h3>
                        </div>
                      </td>
                      <td>$300.00</td>
                      <td>
                        <CartAmountToggle quantity={1} />
                      </td>
                      <td>$20.00</td>
                      <td className="text-center">
                        <button className="cs_cart-table-close">
                          <Icon icon="heroicons:x-mark-20-solid" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cs_cart_table_media">
                          <img
                            src="/images/shop/cart-product-3.jpeg"
                            alt="Thumb"
                          />
                          <h3>Hemp seed shampoo</h3>
                        </div>
                      </td>
                      <td>$300.00</td>
                      <td>
                        <CartAmountToggle quantity={1} />
                      </td>
                      <td>$20.00</td>
                      <td className="text-center">
                        <button className="cs_cart-table-close">
                          <Icon icon="heroicons:x-mark-20-solid" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cs_cart-offer">
                <div>
                  <form action="" className="cs_coupon-doce-form">
                    <input type="text" placeholder="Coupon Code" />
                    <button className="cs_product_btn cs_color1 cs_semi_bold">
                      Update Cart
                    </button>
                  </form>
                </div>
                <div>
                  <button className="cs_product_btn cs_semi_bold">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="cs_shop-side-spacing">
                <div className="cs_shop-card cs_pb_30">
                  <h2>Cart Totals</h2>
                  <table className="cs_white_color cs_mb_30">
                    <tbody>
                      <tr>
                        <td className="cs_semi_bold">Subtotal</td>
                        <td className="text-end">$605.00</td>
                      </tr>
                      <tr className="cs_semi_bold">
                        <td>Total</td>
                        <td className="text-end">$605.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link
                    to="/shop-checkout"
                    className="cs_product_btn cs_semi_bold w-100"
                  >
                    Procced To Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
