import React from 'react'
import "./servicessection.scss"
import About from '../../about/About'
import Features from '../../features/Features'

const ServicesSection = () => {
  return (
    <div>
        <div className="slider-services-section">
            <div className="slider-services-section-container">
                Home / Services
                <h1>OUR SERVICES</h1>
            </div>
        </div>
        <div className='about'>
            <About/>
        </div>
        <div className='features'>
            <Features/>
        </div>
    </div>
  )
}

export default ServicesSection