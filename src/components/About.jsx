import React from 'react'
import "./About.css"
import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-flynext  '>
        <div className="overlay"></div>
        <div className='container'>
            <div className='row'>
                <div className="flynext-left col-xl-7 col-lg-7 col-md-6"> 
<div className='about-content'>
    <h4 ><span className='about'>About</span> Flynext</h4>
    <h2 className='playfair-display-bold py-3'>Private Jet Charters save your time and give more comfort</h2>
    <p className='mulish-medium'>Flynext is the only way to fully travel on your terms. Whether it’s accessing a remote destination or taking back control of productivity and flight scheduling</p>
<div className='class="about-book-area"'>
<div className="about-book-element">
    <img src="/assets/images/element-7.png" alt="" />
   
</div>

</div>
</div>
                </div>
                <div className="flynext-right col-xl-5 col-lg-5 col-md-6"> 
               <a href="https://www.youtube.com/embed/Hw4ctvV25H0" className='video-icon' target="_blank"> <FaPlay className='icon'/></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About