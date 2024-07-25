import React from 'react'
import "./Benefits.css"
import { GiWorld } from "react-icons/gi";
import { TfiMoney } from "react-icons/tfi";
import { IoBriefcase } from "react-icons/io5";
import { BiSolidNotepad } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiSunglasses } from "react-icons/gi";

const Benefits = () => {
  return (
    <div className='container'>
        <div className="benefits mt-5">
    <h6 className='mulish-bold '>Discover <span  className='flynext mulish-bold '>Flynext</span> Benefits</h6>
    <h1 className='playfair-display-bold py-3 mb-4'>Discover Private Jet Benefits</h1>

    <div className="benefits-cards">

    <div className="card">
    <GiWorld className='icons' />
       <h3 className='playfair-display-medium py-3'>Luxury & Comfort Travel</h3>
      <p className='mulish-medium7'>As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money</p>
    </div>

    <div class="card">
    <TfiMoney className='icons'/>
        <h3 className='playfair-display-medium py-3'>Smart Costing Flight</h3>
        <p className='mulish-medium7'>Flying should be a pleasure and we’ll make your charter experience as luxurious and more comfortable as soon as possible.</p>
    </div>

<div class="card">
  <IoBriefcase className='icons'/>
    <h3 className='playfair-display-medium py-3'>Career progression</h3>
    <p className='mulish-medium7'>The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since 1940s</p>
</div>
<div class="card">
<BiSolidNotepad className='icons'/>
    <h3 className='playfair-display-medium py-3'>Flexible Schedule</h3>
    <p className='mulish-medium7'>Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.</p>
</div>
<div class="card">
<HiOutlineSpeakerphone className='icons'/>
    <h3 className='playfair-display-medium py-3'>Excellent advantages</h3>
    <p className='mulish-medium7'>Search the world with ease and transparency.As the only tech-forward private aviation company, XO is able to bring you</p>
</div>
<div class="card">
<GiSunglasses className='icons1'/>
    <h3 className='playfair-display-medium py-3'>Coolest Environment</h3>
    <p className='mulish-medium7'>Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership</p>
</div>



    </div>
</div>

    </div>
  )
}

export default Benefits