import React, { useEffect, useState } from 'react';
import testimonials from './Data';
import "./feedback.scss"
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FeedBack() {
  const [startIdx, setStartIdx] = useState(0);

  const nextTestimonials = () => {
    if (startIdx + 1 < testimonials.length) {
      setStartIdx(startIdx + 1);
    }
  };

  const prevTestimonials = () => {
    if (startIdx - 1 >= 0) {
      setStartIdx(startIdx - 1);
    }
  };

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.testimonial-container');

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
    <div className="testimonial-slider">
      <div className="testimonial-container">
        {testimonials.slice(startIdx, startIdx + 1).map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial`}
          >
            <p>{testimonial.text}</p>
            <span style={{ display: "flex", marginTop: "10px" }}>
              <img src={testimonial.image} alt="" style={{ padding: "5px", width: "60px", height: "60px", borderRadius: "50%" }} />
              <span>
                <h3 style={{ padding: "5px" }}>{testimonial.name}</h3>
                <p style={{ padding: "5px" }}>{testimonial.position}</p>
              </span>
            </span>
          </div>
        ))}
      </div><br /><br /><br />
      <div className="navigation">
        <button onClick={prevTestimonials}><AiFillLeftCircle size={50}/></button>
        <button onClick={nextTestimonials}><AiFillRightCircle size={50}/></button>
      </div>
    </div>
  );
}

export default FeedBack;
