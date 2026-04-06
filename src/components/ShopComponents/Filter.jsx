import { useState } from "react";
import { Link } from "react-router-dom"
import MultiRangeSlider from 'multi-range-slider-react'

const catagoryList = ['Design (5)','Creative (2)','Illustration (3)',]
const tagList = ['Brand','Digital','Marketing','Creative','Graphics',]

export default function Filter() {
  const [activeTag, setActiveTag] = useState(null);
  const [minValue, setMinValue] = useState(30);
  const [maxValue, setMaxValue] = useState(400);
  const handleInput = e => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  return (
    <div className="cs_shop_sidebar ">
      <div className="cs_shop_sidebar_widget">
        <form className="cs_sidebar_search" action="#">
          <input type="text" placeholder="Search..." />
          <button className="cs_sidebar_search_btn">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <div className="cs_shop_sidebar_widget">
        <h3 className="cs_shop_sidebar_widget_title">Categories</h3>
        <ul className="cs_shop_sidebar_category_list">
          {catagoryList.map((item, index) => (
            <li key={index}>
              <Link to=''>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="cs_shop_sidebar_widget">
        <h3 className="cs_shop_sidebar_widget_title">Price Filter</h3>
        <div className="st-range-slider-wrap">
          <MultiRangeSlider
            min={0}
            max={500}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            ruler={false}
            label={false}
            onInput={e => {
              handleInput(e);
            }}
          />
          <div className="st-amount-wrap">Price: ${minValue} - ${maxValue}</div>
        </div>
      </div>
      <div className="cs_shop_sidebar_widget">
        <h3 className="cs_shop_sidebar_widget_title">Tags</h3>
        <ul className="cs_shop_sidebar_tag_list">
          {tagList.map((item, index) => (
            <li key={index}>
              <button 
                onClick={() => setActiveTag(item)}  
                className={activeTag === item ? 'active' : ''}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
