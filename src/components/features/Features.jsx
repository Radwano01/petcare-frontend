import React, { useEffect } from 'react'
import "./features.scss"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {MdPets} from "react-icons/md"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    useEffect(() => {
        const timelineItems = document.querySelectorAll('.features-cards');

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
    <div className='features'>
        <div className="features-cards">
            <div className="card">
                <div className="icon">
                    <MdPets size={50}/>
                </div><br /><br />
                <div className="title">
                    <h2>Dog Walking</h2>
                </div><br />
                <div className="text">
                    <h5>Far far away, behind the word</h5><br />
                    <h5>mountains, far from the countries</h5><br />
                    <h5>Vokalia and Consonantia, there live</h5><br />
                    <h5>the blind texts. Separated they live</h5><br />
                    <h5>in Bookmarksgrove right.</h5>
                </div><br />
                <div className="button">
                    <button><BsFillArrowRightCircleFill color='rgba(69, 219, 0, 0.781)' size={50}/></button>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <MdPets size={50}/>
                </div><br /><br />
                <div className="title">
                    <h2>Pet Daycare</h2>
                </div><br />
                <div className="text">
                    <h5>Far far away, behind the word</h5><br />
                    <h5>mountains, far from the countries</h5><br />
                    <h5>Vokalia and Consonantia, there live</h5><br />
                    <h5>the blind texts. Separated they live</h5><br />
                    <h5>in Bookmarksgrove right.</h5>
                </div><br />
                <button><BsFillArrowRightCircleFill color='rgba(69, 219, 0, 0.781)' size={50}/></button>
            </div>


            <div className="card">
                <div className="icon">
                    <MdPets size={50}/>
                </div><br /><br />
                <div className="title">
                    <h2>Pet Grooming</h2>
                </div><br />
                <div className="text">
                    <h5>Far far away, behind the word</h5><br />
                    <h5>mountains, far from the countries</h5><br />
                    <h5>Vokalia and Consonantia, there live</h5><br />
                    <h5>the blind texts. Separated they live</h5><br />
                    <h5>in Bookmarksgrove right.</h5>
                </div><br />
                <button><BsFillArrowRightCircleFill color='rgba(69, 219, 0, 0.781)' size={50}/></button>
            </div>
        </div>
    </div>
  )
}

export default Features