import React from 'react'
import './About.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Well-dedicated Software Engineer undergraduate with hands-on experience in Java, Python, Web (HTML, 
                CSS, JS, React), Android development (Kotlin), Laravel, and PHP.</p>
                <p>Seeking an internship to gain industry 
                experience and contribute to a collaborative team to the best of my ability.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Java</p><hr  style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Python</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>HTML & CSS</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr  style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Time Management</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Leadership</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Problem Solving</p>
        </div>
      </div>
    </div>
  )
}

export default About