import React from 'react'
import "./pricesection.scss"
import Contact from '../../contact/Contact'
import Price from '../../price/Price'

const PriceSection = () => {
  return (
    <div>
        <div className="slider-price-section">
            <div className="slider-price-section-container">
                Home / Price
                <h1>OUR PRICE</h1>
            </div>
        </div>
        <Price/>
        <Contact/>
    </div>
  )
}

export default PriceSection