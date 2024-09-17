import React, { useRef } from 'react';
import user from '../../assets/user.png';
import './Testimonials.css'; // Import the CSS file

export const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }
  return (
    <div className='testimonials'>
      <div className="slider-icon left" onClick={slideBackward} >
        <i className="fas fa-chevron-left" ></i>
      </div>
      <div className="slider-icon right" onClick={slideForward}>
        <i className="fas fa-chevron-right" ></i>
      </div>
      <div className="slider" ref={slider}>
        <div className="testimonial">
          <img src={user} alt="User" className="testimonial-image" />
          <p className="testimonial-text">
            "his product has exceeded my expectations in every way! 
            It’s easy to use, and the quality is top-notch. I’ve been recommending it to all my friends, and they love it too. Definitely a game-changer!"
          </p>
          <p className="testimonial-name">John Doe</p>
        </div>
        <div className="testimonial">
          <img src={user} alt="User" className="testimonial-image" />
          <p className="testimonial-text">
            "his product has exceeded my expectations in every way! 
            It’s easy to use, and the quality is top-notch. I’ve been recommending it to all my friends, and they love it too. Definitely a game-changer!"
          </p>
          <p className="testimonial-name">John Doe2</p>
        </div>
        <div className="testimonial">
          <img src={user} alt="User" className="testimonial-image" />
          <p className="testimonial-text">
            "his product has exceeded my expectations in every way! 
            It’s easy to use, and the quality is top-notch. I’ve been recommending it to all my friends, and they love it too. Definitely a game-changer!"
          </p>
          <p className="testimonial-name">John Doe4</p>
        </div>
        <div className="testimonial">
          <img src={user} alt="User" className="testimonial-image" />
          <p className="testimonial-text">
            "his product has exceeded my expectations in every way! 
            It’s easy to use, and the quality is top-notch. I’ve been recommending it to all my friends, and they love it too. Definitely a game-changer!"
          </p>
          <p className="testimonial-name">John Doe</p>
        </div>
      </div>
    </div>
  );
};
