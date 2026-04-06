import { Link } from 'react-router-dom';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import { useEffect } from 'react';
import { pageTitle } from '../../../helpers/PageTitle';

export default function ShopCheckoutPage() {
  pageTitle('Checkout');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Checkout" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="120" ptLg="80" pb="120" pbLg="80">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <p className="cs_checkout-alert m-0">
                Have a coupon? <a href="/">Click here to enter your code</a>
              </p>
              <div className="cs_height_40 cs_height_lg_40" />
              <h2 className="cs_checkout-title">Billing Details</h2>
              <div className="cs_height_45 cs_height_lg_40" />
              <div className="row">
                <div className="col-lg-6">
                  <label className="cs_shop-label">First Name *</label>
                  <input type="text" className="cs_shop-input" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_shop-label">Last Name *</label>
                  <input type="text" className="cs_shop-input" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">
                    Company name (optional)
                  </label>
                  <input type="text" className="cs_shop-input" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">Country / Region *</label>
                  <select className="cs_shop-input">
                    <option value="States">United States (US)</option>
                    <option value="Kingdom">United Kingdom</option>
                    <option value="Kanada">Kanada</option>
                  </select>
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">Street address *</label>
                  <input
                    type="text"
                    className="cs_shop-input"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    className="cs_shop-input"
                    placeholder="Apartment, suite, unit, etc (optional) "
                  />
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">Town / City *</label>
                  <input type="text" className="cs_shop-input" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">State *</label>
                  <select className="cs_shop-input">
                    <option value="California">California</option>
                    <option value="Gercy">New Gercy</option>
                    <option value="Daiking">Daiking</option>
                  </select>
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">ZIP Code *</label>
                  <input type="text" className="cs_shop-input" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">Phone *</label>
                  <input type="text" className="cs_shop-input" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_shop-label">Email address *</label>
                  <input type="text" className="cs_shop-input" />
                </div>
              </div>
              <div className="cs_height_45 cs_height_lg_45" />
              <h2 className="cs_checkout-title">Additional information</h2>
              <div className="cs_height_30 cs_height_lg_30" />
              <label className="cs_shop-label">Order notes (optional)</label>
              <textarea
                cols={30}
                rows={6}
                className="cs_shop-input"
                defaultValue={''}
              />
              <div className="cs_height_30 cs_height_lg_30" />
            </div>
            <div className="col-xl-5">
              <div className="cs_shop-side-spacing">
                <div className="cs_shop-card cs_mb_50 cs_mb_lg_30">
                  <h2>Your order</h2>
                  <table className="cs_white_color">
                    <tbody>
                      <tr className="cs_semi_bold">
                        <td>Products</td>
                        <td className="text-end">Amount</td>
                      </tr>
                      <tr>
                        <td>Awesome men T-shirt x 1</td>
                        <td className="text-end">$20.00</td>
                      </tr>
                      <tr>
                        <td>Future AI robot toy x 1</td>
                        <td className="text-end">$550.00</td>
                      </tr>
                      <tr>
                        <td>Hemp seed shampoo x 1</td>
                        <td className="text-end">$35.00</td>
                      </tr>
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
                  <div className="cs_height_30 cs_height_lg_30" />
                  <Link
                    to="/shop-order-recived"
                    className="cs_product_btn cs_semi_bold w-100"
                  >
                    Procced To Checkout
                  </Link>
                </div>
                <div className="cs_shop-card">
                  <h2>Payment</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label m-0 cs_white_color cs_semi_bold"
                              htmlFor="flexCheckDefault"
                            >
                              Cash on delivery
                            </label>
                          </div>
                          <p className="m-0 cs_payment_text">
                            Pay with cash upon delivery.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cs_height_25 cs_height_lg_25" />
                  <p className="m-0 cs_payment_text">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{' '}
                    <a href="/">privacy policy</a>.
                  </p>
                  <div className="cs_height_20 cs_height_lg_20" />
                  <button className="cs_product_btn cs_semi_bold w-100">
                    Pay Now
                  </button>
                </div>
                <div className="cs_height_30 cs_height_lg_30" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
