import React from 'react'
import "./footer.scss"
import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai"
import {BsFillMapFill, BsFillTelephoneFill} from "react-icons/bs"
import imgOne from "../../../assets/images/image_1.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top-footer">
            <div className="footer-cards">
                <div className="footer-card">
                    <h1>Petsitting</h1><hr /><br />
                    <div className="footer-text">
                        <h5>A small river named Duden flows</h5>
                        <h5>by their place and supplies it with</h5>
                        <h5>the necessary regelialia.</h5><br />
                        <div className="icons">
                            <span><GrFacebookOption/></span>
                            <span><AiOutlineTwitter/></span>
                            <span><AiOutlineInstagram/></span>
                        </div>
                    </div>
                </div>
                <div className="footer-card">
                    <h1>Latest News</h1><hr /><br />
                <div className="card-latest">
                    <div className="left">
                        <div className="footer-img">
                            <img src={imgOne} alt="" style={{width:"80px", height:"80px", borderRadius:"10px"}}/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="footer-text">
                            <h5>Even the all-</h5>
                            <h5>powerful Pointing</h5>
                            <h5>has no control</h5>
                            <h5>about</h5>
                        </div>
                        <div className="date">
                            <h6>April 7, 2020 Admin 19</h6>
                        </div>
                    </div>
                </div><br />
                <div className="card-latest">
                    <div className="left">
                        <div className="footer-img">
                            <img src={imgOne} alt="" style={{width:"80px", height:"80px", borderRadius:"10px"}}/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="footer-text">
                            <h5>Even the all-</h5>
                            <h5>powerful Pointing</h5>
                            <h5>has no control</h5>
                            <h5>about</h5>
                        </div>
                        <div className="date">
                            <h6>April 7, 2020 Admin 19</h6>
                        </div>
                    </div>
                </div>
                </div>
                <div className="footer-card">
                    <h1>Quick Links</h1><hr /><br />
                    <div className="links">
                        <h5>Home</h5>
                        <h5>About</h5>
                        <h5>Services</h5>
                        <h5>Works</h5>
                        <h5>Blog</h5>
                        <h5>Contact</h5>
                    </div>
                </div>
                <div className="footer-card">
                    <h1>Have a Questions?</h1><hr /><br />
                    <div className="section-1">
                        <div className="icon">
                            <BsFillMapFill size={15}/>
                        </div>
                        <div className="footer-text">
                            <h4>203 Fake St. Mountain View,</h4>
                            <h4>San Francisco, California,</h4>
                            <h4>USA</h4>
                        </div>
                    </div><br />
                    <div className="section-2">
                        <div className="icon">
                                <BsFillTelephoneFill/>
                        </div>
                        <div className="phone">
                            <h4>+2 392 3929 210</h4>
                        </div>
                    </div><br />
                    <div className="section-3">
                        <div className="icon">
                            <AiOutlineMail/>
                        </div>
                        <div className="email">
                            <h4>info@yourdomain.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div><br />
        <div className="bottom-footer">
            Copyright ©2023 All rights reserved | This template is made with by Colorlib.com
        </div>
    </div>
  )
}

export default Footer