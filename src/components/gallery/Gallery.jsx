import React from 'react'
import "./gallery.scss"
import imgOne from "../../assets/images/gallery-1.jpg"
import imgTwo from "../../assets/images/gallery-2.jpg"
import imgThree from "../../assets/images/gallery-3.jpg"
import imgFour from "../../assets/images/gallery-4.jpg"
import imgFive from "../../assets/images/gallery-5.jpg"
import imgSix from "../../assets/images/gallery-6.jpg"
import {BiSolidShareAlt} from "react-icons/bi"


const Gallery = () => {

    
  return (
    <div className='gallery'>
        <div className="title">
            <h1>Pets Gallery</h1>
        </div>
        <div className="images-1">
            <div className="img">
                <img src={imgOne} alt="" />
                <div className="title">
                    <h6>CATS</h6>
                    <h4>PERISAN CAT</h4>
                </div>
                <div className="button">
                    <a href="/">
                        <button><BiSolidShareAlt size={20}/></button>
                    </a>
                </div>
            </div>
            <div className="img">
                <img src={imgTwo} alt="" />
                <div className="title">
                    <h6>CATS</h6>
                    <h4>PERISAN CAT</h4>
                </div>
                <div className="button">
                    <a href="/">
                        <button><BiSolidShareAlt size={20}/></button>
                    </a>
                </div>
            </div>
            <div className="img">
                <img src={imgThree} alt="" />
                    <div className="title">
                    <h6>CATS</h6>
                    <h4>PERISAN CAT</h4>
                </div>
                <div className="button">
                    <a href="/">
                        <button><BiSolidShareAlt size={20}/></button>
                    </a>
                </div>
            </div>
        </div>
        <div className="images-2">
            <div className="img">
                <img src={imgFour} alt="" />
                    <div className="title">
                    <h6>CATS</h6>
                    <h4>PERISAN CAT</h4>
                </div>
                <div className="button">
                    <a href="/">
                        <button><BiSolidShareAlt size={20}/></button>
                    </a>
                </div>
            </div>
            <div className="img">
                <img src={imgFive} alt="" />
                <div className="title">
                    <h6>CATS</h6>
                    <h4>PERISAN CAT</h4>
                </div>
                <div className="button">
                    <a href="/">
                        <button><BiSolidShareAlt size={20}/></button>
                    </a>
                </div>
            </div>
            <div className="img">
                <img src={imgSix} alt="" />
                <div className="title">
                    <h6>CATS</h6>
                    <h4>PERISAN CAT</h4>
                </div>
                <div className="button">
                    <a href="/">
                        <button><BiSolidShareAlt size={20}/></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery