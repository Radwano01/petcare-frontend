import React, { useEffect } from 'react'
import "./price.scss"
import imgOne from "../../assets/images/pricing-1.jpg"
import {AiOutlineCheck} from "react-icons/ai"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Price = () => {

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.cards');

        timelineItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -100,
            scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            },
        });
        });
    }, []);

  return (
    <div className='price'>
        <br /><br />
        <div className="title">
            <h1>Affordable Packages</h1>
        </div>
        <div className="cards">
            <div className="card">
                <div className="img">
                    <img src={imgOne} alt="" />
                </div><br />
                <div className="type">
                    <h4>PERSONAL</h4>
                </div><br />
                <div className="pack-price">
                    <h1><sup>$</sup>49<sub>/mo</sub></h1>
                </div><br />
                <div className="sections">
                    <ul>
                        <li><AiOutlineCheck color='blue' size={18}/> 5 Dog Walk</li>
                        <li><AiOutlineCheck color='blue' size={18}/> 3 Vet Visit</li>
                        <li><AiOutlineCheck color='blue' size={18}/> 3 Pet Spa</li>
                        <li><AiOutlineCheck color='blue' size={18}/> Free Supports</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={imgOne} alt="" />
                </div><br />
                <div className="type">
                    <h4>PERSONAL</h4>
                </div><br />
                <div className="pack-price">
                    <h1><sup>$</sup>49<sub>/mo</sub></h1>
                </div><br />
                <div className="sections">
                    <ul>
                        <li><AiOutlineCheck color='blue' size={18}/> 5 Dog Walk</li>
                        <li><AiOutlineCheck color='blue' size={18}/> 3 Vet Visit</li>
                        <li><AiOutlineCheck color='blue' size={18}/> 3 Pet Spa</li>
                        <li><AiOutlineCheck color='blue' size={18}/> Free Supports</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={imgOne} alt="" />
                </div><br />
                <div className="type">
                    <h4>PERSONAL</h4>
                </div><br />
                <div className="pack-price">
                    <h1><sup>$</sup>49<sub>/mo</sub></h1>
                </div><br />
                <div className="sections">
                    <ul>
                        <li><AiOutlineCheck color='blue' size={18}/> 5 Dog Walk</li>
                        <li><AiOutlineCheck color='blue' size={18}/> 3 Vet Visit</li>
                        <li><AiOutlineCheck color='blue' size={18}/> 3 Pet Spa</li>
                        <li><AiOutlineCheck color='blue' size={18}/> Free Supports</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price