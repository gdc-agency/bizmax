import React, { useState } from 'react';
import PricingCard from '../../PricingCard';

export default function PricingSection() {
  const [isActive, setIsActive] = useState('monthly');

  return (
    <div className="container">
      <div className="cs_tabs cs_style_1">
        <ul className="cs_tab_links cs_pricing_control d-flex justify-content-center align-content-center p-0 cs_mb_60">
          <li
            className={`${isActive === 'monthly' ? 'active' : ''}`}
            onClick={() => setIsActive('monthly')}
          >
            <span className="cs_tab_btn_text">Monthly</span>{' '}
            <span className="cs_switch" />
          </li>
          <li
            className={`${isActive === 'yearly' ? 'active' : ''}`}
            onClick={() => setIsActive('yearly')}
          >
            <span className="cs_tab_btn_text">Yearly</span>
            <span className="cs_offer_label">20% Off</span>
            <span className="cs_offer_shape">
              <svg
                width={56}
                height={51}
                viewBox="0 0 56 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.4647 23.7019C32.2617 23.8184 32.0306 23.9005 31.7997 23.9824C30.6045 24.4854 29.2246 25.0889 27.9017 25.1718C26.1558 25.2669 24.9731 24.6982 24.2085 23.7679C23.1335 22.4577 22.9575 20.3114 23.5598 18.3759C24.1504 16.4507 25.4645 14.7249 27.1836 14.1225C28.3538 13.7001 29.7381 13.7999 31.2381 14.7428C32.9443 15.8018 33.7312 17.5379 33.9269 19.4907C34.0144 20.2402 33.9806 20.9765 33.9088 21.746C34.5419 21.3755 35.1803 21.0004 35.8265 20.6185C37.8897 19.306 39.875 17.7073 41.6379 16.0064C43.9976 13.789 45.9071 11.2534 47.3652 8.34255C47.5168 8.0934 47.8419 7.98931 48.0999 8.11999C48.3576 8.25098 48.4586 8.57576 48.3356 8.85889C46.8173 11.8812 44.8442 14.5307 42.3885 16.8306C40.5431 18.5441 38.5307 20.2249 36.3853 21.5495C35.4888 22.0889 34.607 22.6158 33.7048 23.101C33.3685 24.7476 32.7783 26.3189 32.153 27.5079C27.868 35.3389 16.7893 39.5548 8.51003 41.4089C8.22457 41.4789 7.94792 41.3052 7.88146 41.0091C7.81534 40.7126 8.00556 40.4302 8.29101 40.3602C16.3013 38.5619 27.065 34.5598 31.2053 26.9719C31.692 26.0794 32.1415 24.9246 32.4647 23.7019ZM32.7343 22.3487C32.3179 22.5911 31.8749 22.7975 31.4043 22.9687C30.2874 23.404 29.0486 24.0037 27.8509 24.0962C26.5361 24.1721 25.6213 23.7839 25.0549 23.0948C24.1491 21.9919 24.099 20.2672 24.5981 18.716C25.0799 17.1204 26.1079 15.642 27.5447 15.166C28.459 14.8467 29.5116 14.9391 30.6611 15.6541C32.0834 16.5463 32.7107 18.0075 32.8528 19.5939C32.9569 20.506 32.8982 21.4408 32.7343 22.3487Z"
                  fill="#E9A132"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.10408 41.0532C8.36593 41.1215 8.68651 41.139 9.00745 41.1562C9.63557 41.2025 10.2555 41.197 10.6755 41.3054C13.2257 41.9295 16.2763 42.7102 18.5255 44.125C18.767 44.2699 18.8497 44.611 18.692 44.8652C18.5347 45.1191 18.2181 45.2162 17.948 45.0371C15.8096 43.7033 12.8884 42.9871 10.4142 42.3562C9.97876 42.2612 9.22715 42.2631 8.59063 42.224C8.03587 42.1733 7.54115 42.0704 7.19728 41.8373C6.99356 41.7188 6.80285 41.3532 7.00911 40.8212C7.31589 40.0844 8.60365 38.558 8.71909 38.3993C9.89218 36.7955 10.89 35.3434 10.7228 33.2483C10.7122 32.9628 10.9398 32.7071 11.2082 32.6519C11.5051 32.6309 11.7747 32.8694 11.785 33.1552C11.9666 35.5327 10.9292 37.2547 9.58052 39.0692C9.47439 39.161 8.69933 40.0669 8.25294 40.8065C8.21476 40.8985 8.14127 40.9621 8.10408 41.0532Z"
                  fill="#E9A132"
                />
              </svg>
            </span>
          </li>
        </ul>
        <div className="cs_tab_body">
          <div className={`cs_tab ${isActive === 'monthly' ? 'active' : ''}`}>
            <div className="row">
              <div className="col-lg-4">
                <PricingCard
                  iconUrl="/images/icons/pricing_icon_1.svg"
                  title="Lite"
                  subTitle="Perfect to get started"
                  price="19"
                  duration="Monthly"
                  btnText="Try 7 days for free"
                  btnUrl="/contact"
                  featureTitle="Lite Includes:"
                  featureList={[
                    'CMS Integration',
                    'Email & SMS reminders',
                    'Customer supports 24/7',
                  ]}
                  readMoreBtnTtext="/pricing"
                  readMoreBtnUrl="See all features"
                />
              </div>
              <div className="col-lg-4">
                <PricingCard
                  iconUrl="/images/icons/pricing_icon_2.svg"
                  title="Pro"
                  subTitle="Best for professionals"
                  price="22"
                  duration="Monthly"
                  btnText="Get started"
                  btnUrl="/contact"
                  featureTitle="Every thing in Lite, plus:"
                  featureList={[
                    'Advanced analytics',
                    '100+ Integrations',
                    'Chats widget',
                    'Templates library',
                  ]}
                  readMoreBtnTtext="/pricing"
                  readMoreBtnUrl="See all features"
                  popular={true}
                />
              </div>
              <div className="col-lg-4">
                <PricingCard
                  iconUrl="/images/icons/pricing_icon_3.svg"
                  title="Ultimate"
                  subTitle="Toolset for hard players"
                  price="35"
                  duration="Monthly"
                  btnText="Get started"
                  btnUrl="/contact"
                  featureTitle="Every thing in Pro, plus:"
                  featureList={[
                    'Daily performance reports',
                    'Dedicated assistant',
                    'Artificial Intelligence <span>BETA</span>',
                    'Marketing tools & automations',
                  ]}
                  readMoreBtnTtext="/pricing"
                  readMoreBtnUrl="See all features"
                />
              </div>
            </div>
          </div>
          <div className={`cs_tab ${isActive === 'yearly' ? 'active' : ''}`}>
            <div className="row">
              <div className="col-lg-4">
                <PricingCard
                  iconUrl="/images/icons/pricing_icon_1.svg"
                  title="Lite"
                  subTitle="Perfect to get started"
                  price="40"
                  duration="Yearly"
                  btnText="Try 7 days for free"
                  btnUrl="/contact"
                  featureTitle="Lite Includes:"
                  featureList={[
                    'CMS Integration',
                    'Email & SMS reminders',
                    'Customer supports 24/7',
                  ]}
                  readMoreBtnTtext="/pricing"
                  readMoreBtnUrl="See all features"
                />
              </div>
              <div className="col-lg-4">
                <PricingCard
                  iconUrl="/images/icons/pricing_icon_2.svg"
                  title="Pro"
                  subTitle="Best for professionals"
                  price="75"
                  duration="Yearly"
                  btnText="Get started"
                  btnUrl="/contact"
                  featureTitle="Every thing in Lite, plus:"
                  featureList={[
                    'Advanced analytics',
                    '100+ Integrations',
                    'Chats widget',
                    'Templates library',
                  ]}
                  readMoreBtnTtext="/pricing"
                  readMoreBtnUrl="See all features"
                  popular={true}
                />
              </div>
              <div className="col-lg-4">
                <PricingCard
                  iconUrl="/images/icons/pricing_icon_3.svg"
                  title="Ultimate"
                  subTitle="Toolset for hard players"
                  price="100"
                  duration="Yearly"
                  btnText="Get started"
                  btnUrl="/contact"
                  featureTitle="Every thing in Pro, plus:"
                  featureList={[
                    'Daily performance reports',
                    'Dedicated assistant',
                    'Artificial Intelligence <span>BETA</span>',
                    'Marketing tools & automations',
                  ]}
                  readMoreBtnTtext="/pricing"
                  readMoreBtnUrl="See all features"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
