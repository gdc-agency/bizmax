import { Icon } from '@iconify/react';
import React from 'react';

export default function CategoryWidget({ title, data }) {
  return (
    <div className="cs_sidebar_item widget_categories">
      <h4 className="cs_sidebar_widget_title">{title}</h4>
      <ul>
        {data.map((item, index) => (
          <li className="cat-item" key={index}>
            <a href="/">
              <Icon icon="fa-solid:arrow-circle-right" />
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
