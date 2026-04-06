import React from 'react';

export default function TagCloudWidget({ data, title }) {
  return (
    <div className="cs_sidebar_item ">
      <h4 className="cs_sidebar_widget_title">{title}</h4>
      <div className="tagcloud">
        {data.map((item, index) => (
          <a href="/" key={index} className="tag-cloud-link">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
