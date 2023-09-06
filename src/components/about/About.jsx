import React, { useEffect } from 'react'
import "./about.scss"
import img from "../../assets/images/about-1.jpg"
import {SiAsciidoctor} from "react-icons/si"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.type');

        timelineItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 100,
            scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            },
        });
        });
    }, []);
  return (
    <div className='about'>
        <div className="left">
            <div className="about-img">
                <img src={img} alt="" />
            </div>
        </div>
        <div className="right">
            <div className="title">
                <h1>Why Choose Us?</h1>
            </div><br />
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <SiAsciidoctor size={50} style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="type">
                        <div className="title">
                            <h2>Care Advices</h2>
                        </div><br />
                        <div className="text">
                            <h4>Far far away, behind the</h4>
                            <h4>word mountains, far from</h4>
                            <h4>the countries.</h4>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <SiAsciidoctor size={50} style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="type">
                        <div className="title">
                            <h2>Care Advices</h2>
                        </div><br />
                        <div className="text">
                            <h4>Far far away, behind the</h4>
                            <h4>word mountains, far from</h4>
                            <h4>the countries.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <SiAsciidoctor size={50} style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="type">
                        <div className="title">
                            <h2>Care Advices</h2>
                        </div><br />
                        <div className="text">
                            <h4>Far far away, behind the</h4>
                            <h4>word mountains, far from</h4>
                            <h4>the countries.</h4>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <SiAsciidoctor size={50} style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="type">
                        <div className="title">
                            <h2>Care Advices</h2>
                        </div><br />
                        <div className="text">
                            <h4>Far far away, behind the</h4>
                            <h4>word mountains, far from</h4>
                            <h4>the countries.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About