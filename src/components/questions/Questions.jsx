import React, { useEffect, useState } from 'react'
import "./questions.scss"
import { NavLink } from 'react-router-dom'
import imageOne from "../../assets/images/about.jpg"
import imageTwo from "../../assets/images/about-2.jpg"
import imageThree from "../../assets/images/about-3.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Questions = () => {

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.img');

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

    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

    const toggleTextVisibility1 = () => {
      setShowText1(!showText1);
    };
    const toggleTextVisibility2 = () => {
        setShowText2(!showText2);
      };
      const toggleTextVisibility3 = () => {
        setShowText3(!showText3);
      };
      const toggleTextVisibility4 = () => {
        setShowText4(!showText4);
      };
  return (
    <div className='question'>
        <div className="left">
            <div className="title">
                <h1>Frequently Asks Questions</h1>
            </div><br />
            <div className="type">
                <h5>Far far away, behind the word mountains, far from the countries Vokalia</h5>
                <h5>and Consonantia, there live the blind texts.</h5>
            </div><br />
            <div className="button">
                <NavLink onClick={toggleTextVisibility1}>How To Train Your Pet Dog?</NavLink>
                <div className="card">
                    <div className={`text ${showText1 ? "active" : ""}`}>
                        1. Far far away, behind the word mountains <br /><br />
                        2. Consonantia, there live the blind texts <br /><br />
                        3. When she reached the first hills of the Italic Mountains <br /><br />
                        4. Bookmarksgrove, the headline of Alphabet Village <br /><br />
                        5. Separated they live in Bookmarksgrove right <br /><br />
                    </div>
                </div>
            </div>
            <div className="button">
                <NavLink onClick={toggleTextVisibility2}>How To Manage Your Pets?</NavLink>
                <div className="card">
                    <div className={`text ${showText2 ? "active" : ""}`}>
                        1. Far far away, behind the word mountains <br /><br />
                        2. Consonantia, there live the blind texts <br /><br />
                        3. When she reached the first hills of the Italic Mountains <br /><br />
                        4. Bookmarksgrove, the headline of Alphabet Village <br /><br />
                        5. Separated they live in Bookmarksgrove right <br /><br />
                    </div>
                </div>
            </div>
            <div className="button">
                <NavLink onClick={toggleTextVisibility3}>How To Is The Best Grooming For Your Pets?</NavLink>
                <div className="card">
                    <div className={`text ${showText3 ? "active" : ""}`}>
                        1. Far far away, behind the word mountains <br /><br />
                        2. Consonantia, there live the blind texts <br /><br />
                        3. When she reached the first hills of the Italic Mountains <br /><br />
                        4. Bookmarksgrove, the headline of Alphabet Village <br /><br />
                        5. Separated they live in Bookmarksgrove right <br /><br />
                    </div>
                </div>
            </div>
            <div className="button">
                <NavLink onClick={toggleTextVisibility4}>What Are Those Requirements For Sitting Pets?</NavLink>
                <div className="card">
                    <div className={`text ${showText4 ? "active" : ""}`}>
                        1. Far far away, behind the word mountains <br /><br />
                        2. Consonantia, there live the blind texts <br /><br />
                        3. When she reached the first hills of the Italic Mountains <br /><br />
                        4. Bookmarksgrove, the headline of Alphabet Village <br /><br />
                        5. Separated they live in Bookmarksgrove right <br /><br />
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="image-1">
                <div className="img">
                    <img src={imageOne} alt="" />
                </div>
            </div>
            <div className="image-2">
                <div className="img">
                    <img src={imageTwo} alt="" />
                </div>
                <div className="img">
                    <img src={imageThree} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions