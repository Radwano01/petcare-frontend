import React, { useEffect, useState } from 'react'
import "./clientcount.scss"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientCount = () => {

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.count-card');

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

    const startCount = 0; // Starting number
    const endCount = 50; // Ending number
    const duration = 5000; // Animation duration in milliseconds
  
    const [count, setCount] = useState(startCount);
  
    useEffect(() => {
      let animationFrameId;
      const startTime = Date.now();
  
      function animateCount() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
  
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const increment = Math.ceil((endCount - startCount) * progress);
          const newCount = startCount + increment;
  
          setCount(newCount);
  
          animationFrameId = requestAnimationFrame(animateCount);
        } else {
          setCount(endCount);
        }
      }
  
      animateCount();
  
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    const startCount2 = 0; // Starting number
    const endCount2 = 8500; // Ending number
    const duration2 = 2900; // Animation duration in milliseconds

    const [count2, setCount2] = useState(startCount2);

    useEffect(() => {
        let animationFrameId;
        const startTime = Date.now();

        function animateCount2() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration2) {
            const progress = elapsedTime / duration2;
            const increment2 = Math.ceil((endCount2 - startCount2) * progress);
            const newCount2 = startCount2 + increment2;

            setCount2(newCount2);

            animationFrameId = requestAnimationFrame(animateCount2);
        } else {
            setCount2(endCount2);
        }
        }

        animateCount2();

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, []);
    const startCount4 = 0; // Starting number
    const endCount4 = 50; // Ending number
    const duration4 = 5000; // Animation duration in milliseconds

    const [count4, setCount4] = useState(startCount4);

    useEffect(() => {
        let animationFrameId;
        const startTime = Date.now();

        function animateCount4() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration4) {
            const progress = elapsedTime / duration4;
            const increment4 = Math.ceil((endCount4 - startCount4) * progress);
            const newCount4 = startCount4 + increment4;

            setCount4(newCount4);

            animationFrameId = requestAnimationFrame(animateCount4);
        } else {
            setCount4(endCount4);
        }
        }

        animateCount4();

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const startCount3 = 0; // Starting number
    const endCount3 = 35; // Ending number
    const duration3 = 3000; // Animation duration in milliseconds

    const [count3, setCount3] = useState(startCount3);

    useEffect(() => {
        let animationFrameId;
        const startTime = Date.now();

        function animateCount3() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration3) {
            const progress = elapsedTime / duration3;
            const increment3 = Math.ceil((endCount3 - startCount3) * progress);
            const newCount3 = startCount3 + increment3;

            setCount3(newCount3);

            animationFrameId = requestAnimationFrame(animateCount3);
        } else {
            setCount3(endCount3);
        }
        }

        animateCount3();

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, []);

    
  return (
    <div className='count'>
        <div className="cards">
            <div className="count-card">
                <div className="number">
                    <h1>{count}</h1>
                </div>
                <div className="title">
                    Customer
                </div>
            </div>
            <div className="count-card">
                <div className="number">
                    <h1>{count2}</h1>
                </div>
                <div className="title">
                    Customer
                </div>
            </div>
            <div className="count-card">
                <div className="number">
                    <h1>{count4}</h1>
                </div>
                <div className="title">
                    Customer
                </div>
            </div>
            <div className="count-card">
                <div className="number">
                    <h1>{count3}</h1>
                </div>
                <div className="title">
                    Customer
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientCount