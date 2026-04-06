import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuWidget({ data, title }) {
  return (
    <>
      {title && (
        <h2 className="cs_widget_title text-white cs_fs_22 cs_mb_22">
          {title}
        </h2>
      )}
      <ul className="cs_menu_widget text-uppercase">
        {data?.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
