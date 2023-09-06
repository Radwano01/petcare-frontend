import React from 'react'
import "./blog.scss"
import imgOne from "../../assets/images/image_1.jpg"
import imgTwo from "../../assets/images/image_2.jpg"
import imgThree from "../../assets/images/image_3.jpg"

const Blog = () => {

  return (
    <div className='blog'>
        <br /><br />
        <div className="title">
            <h1>Latest news from our blog</h1>
        </div>
        <div className="cards">
            <div className="card">
                <div className="img">
                    <img src={imgOne} alt="" />
                </div><br />
                <div className="type">
                    <h5>APRIL 07, 2020 ADMIN</h5>
                </div><br />
                <div className="text">
                    <h3>Even the all-powerful Pointing<br /> has no control about the blind<br /> texts</h3>
                </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={imgTwo} alt="" />
                </div><br />
                <div className="type">
                    <h5>APRIL 07, 2020 ADMIN</h5>
                </div><br />
                <div className="text">
                    <h3>Even the all-powerful Pointing<br /> has no control about the blind<br /> texts</h3>
                </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={imgThree} alt="" />
                </div><br />
                <div className="type">
                    <h5>APRIL 07, 2020 ADMIN</h5>
                </div><br />
                <div className="text">
                    <h3>Even the all-powerful Pointing<br /> has no control about the blind<br /> texts</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog