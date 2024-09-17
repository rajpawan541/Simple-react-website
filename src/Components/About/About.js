import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import playIcon from '../../assets/play-icon.png'


export const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} className='about-img' alt='about us'/>
            <img src={playIcon} className='play-icon'/>
        </div>
        <div className='about-right'>
            <h4>Digitally Enhanced Solutions</h4>
            <h1>Innovative Technology for a <br/> Modern World</h1>
            <p>Welcome to Digitally Enhanced Solutions, where 
                cutting-edge technology meets seamless innovation. 
                We specialize in providing comprehensive digital 
                solutions tailored to your needs, from advanced web 
                development and digital marketing to data analytics 
                and cloud services.<br/><br/> Our mission is to empower businesses
                 and individuals by delivering state-of-the-art technology and personalized support that drives growth and efficiency. Explore our services to discover how we can transform your digital presence and help you stay a
                head in the rapidly evolving digital landscape.</p>
        </div>
    </div>
  )
}
