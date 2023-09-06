import React from 'react'
import "./gallerysection.scss"
import Gallery from '../../gallery/Gallery'

const GallerySection = () => {
  return (
    <div>
        <div className="slider-gallery-section">
            <div className="slider-gallery-section-container">
                Home / Gallery
                <h1>OUR GALLERY</h1>
            </div>
        </div>
        <Gallery/>
    </div>
  )
}

export default GallerySection