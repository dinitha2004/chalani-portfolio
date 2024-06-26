import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home'className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Chalani Dinitha,</span> Software Engineer based in Sri Lanka</h1>
        <p>Passionate and reliable individual with strong technical and interpersonal skills seeking for an internship in software development industry. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero