import React from 'react'
import "./Introduction.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { PiArrowRightFill } from "react-icons/pi";


const Introduction = () => {
  return (
        <div className="introduction " >



            <div className='container-fluid '>
         <div className='row  '>

         <div class="col-lg-2 d-flex flex-column  social-icons">
                <div className="vertical-line"></div>
               <button ><FaFacebookF className='icon' /></button>
               <button className='mt-2'><FaTwitter className='icon' /></button>
               <button className='my-2'><FaYoutube className='icon' /></button>
               <button><FaInstagram  className='icon' /></button>
                <div className="vertical-line"></div>
            </div>


<div className='left-side col-lg-4  justify-content-center align-items-center  '>
 <h4 className='mulish-medium6 mb-4'><span className='mulish-medium6 mb-4'>Fly</span>next</h4> 
<h1 className='playfair-display-bold mb-4'>Book a private jet  instantly</h1>
<p className='mulish-medium'>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate
                                private jet charter services. We pride ourselves on offering a professional service.</p>

<div className="btngroup mt-5 pt-4">
  <button className='mulish-black '> <MdArrowForwardIos className='icon' />Make Your Trip</button>
  <a href="" className='mulish-black text-decoration-none ms-5'>Request Quote <PiArrowRightFill className='icon'/></a>
 
</div>

</div>

<div className='right-side col-lg-6 '>
<img src="/assets/images/element-2.png" alt="" className='pt-5 mt-5 pe-5 me-5' />
</div>
         
            </div>
        </div>
        </div>
       
  )
}

export default Introduction