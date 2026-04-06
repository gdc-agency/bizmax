import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentPostWidget({data, title}) {
  return (
    <div className="cs_sidebar_item recent_post_widget">
      <h4 className="cs_sidebar_widget_title">{title}</h4>
      <ul className="cs_recent_posts">
        {data.map((item, index)=> (
          <li key={index}>
          <div className="cs_recent_post">
            <Link to={item.srcUrl} className="cs_recent_post-thumb">
              <div
                className="h-100 w-100 background-filled"
                style={{backgroundImage: `url('${item.imgUrl}')`}}
              />
            </Link>
            <div className="cs_recent_post-info">
              <div className="cs_recent_post-date">
                <Icon icon="fa6-solid:calendar-days" /> {item.date}
              </div>
              <h3 className="cs_recent_post-title">
                <Link to={item.srcUrl}>{item.title}</Link>
              </h3>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}
