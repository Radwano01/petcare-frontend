import React from 'react'
import "./aboutsection.scss"
import About from '../../about/About'
import ClientCount from '../../clientCount/ClientCount'
import Questions from '../../questions/Questions'
import FeedBack from '../../feedback/FeedBack'
import Contact from '../../contact/Contact'


const AboutSection = () => {
  return (
    <div>
        <div className="slider-about-section">
            <div className="slider-about-section-container">
                Home / AboutUs
                <h1>ABOUT US</h1>
            </div>
        </div>
        <div className="about-section">
            <About/>
        </div>
        <div className="count-slider-section">
            <ClientCount/>
        </div>
        <div className="question-section">
            <Questions/>
        </div>
        <div className="feedback-section">
            <FeedBack/>
        </div>
        <div className="contact-section">
            <Contact/>
        </div>
    </div>
  )
}

export default AboutSection