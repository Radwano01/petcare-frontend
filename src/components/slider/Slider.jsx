import React, { useEffect } from 'react'
import "./slider.scss"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.text');

        timelineItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 100,
            scrollTrigger: {
            trigger: item,
            start: 'top 80%', // Adjust this value for when the animation should start
            toggleActions: 'play none none reverse',
            },
        });
        });
    }, []);
  return (
    <div className='slider'>
        <div className="text">
            <h1>
                Highest Quality Care For Pets
            </h1>
            <h1>
                You'll Love
            </h1><br />
            <button>
                LEARN MORE
            </button>
        </div>
    </div>
  )
}

export default Slider