import React from 'react'
import Slider from 'react-slick'
import Product from '../ShopComponents/Product';


export default function ProductSlider({data}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1349,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="cs_product_slider cs_gap_24">
      <Slider {...settings} className="cs_slider_activate">
        {data?.map((item, index) => (
          <Product {...item} key={index} />    
        ))}
      </Slider>
    </div>
  )
}
