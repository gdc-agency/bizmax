import React from 'react'

export default function SearchWidget() {
  return (
    <div className="cs_sidebar_item widget_search">
      <form className="cs_sidebar_search" action="#">
        <input type="text" placeholder="Search..." />
        <button className="cs_sidebar_search_btn">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
  )
}
