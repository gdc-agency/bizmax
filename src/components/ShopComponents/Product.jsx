import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({imgUrl,title, cartList, productDetails, price}) {
  return (
    <div className="cs_product_card cs_style_1">
      <div className="cs_product_thumb">
        <img src={imgUrl} alt="Product" />
        <div className="cs_product_overlay" />
        <div className="cs_card_btns">
          <Link to={cartList}>
            <i><Icon icon="fa:cart-plus" /></i>
          </Link>
          <Link to={productDetails}>
            <i><Icon icon="fa6-solid:link" /></i>
          </Link>
        </div>
      </div>
      <div className="cs_product_info">
        <h2 className="cs_product_title">
          <Link to={productDetails}>{title}</Link>
        </h2>
        <p className="cs_product_price">Price: ${price}</p>
      </div>
    </div>
  )
}
