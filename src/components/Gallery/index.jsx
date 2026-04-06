import React, { useState } from 'react';
import Portfolio from '../Portfolio';

const categoryMenu = [
  {
    title: 'graphics',
    category: 'graphics',
  },
  {
    title: 'website',
    category: 'website',
  },
  {
    title: 'digital',
    category: 'digital',
  },
  {
    title: 'marketing',
    category: 'marketing',
  },
];

export default function Gallery({ data }) {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(6);
  return (
    <div>
      <ul className="cs_isotop_filter cs_style_1 d-flex justify-content-center flex-wrap m-0 cs_pl_0 cs_pb_30">
        <li className={active === 'all' ? 'active' : ''}>
          <span onClick={() => setActive('all')}>All</span>
        </li>
        {categoryMenu.map((item, index) => (
          <li className={active === item.category ? 'active' : ''} key={index}>
            <span
              className="text-capitalize"
              onClick={() => setActive(item.category)}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="row">
        {data.slice(0, itemShow).map((item, index) => (
          <div
            className={`col-lg-4 col-md-6 ${
              active === 'all'
                ? ''
                : !(active === item.category)
                ? 'd-none'
                : ''
            }`}
            key={index}
          >
            <Portfolio {...item} />
            <div className="cs_mb_25"></div>
          </div>
        ))}
      </div>
      {data.length <= itemShow ? (
        ''
      ) : (
        <div className="d-flex justify-content-center cs_mt_30">
          <span
            className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
            onClick={() => setItemShow(itemShow + 3)}
          >
            <span>Load More</span>
          </span>
        </div>
      )}
    </div>
  );
}
