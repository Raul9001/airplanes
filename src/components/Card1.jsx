
import React from 'react'
import "./Card1.css"
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";



const Card1 = () => {
  
  return (
    <div className='card1 pt-5 mt-5'>
<div className='container photo'>
  <div className='row'>
  <div className="card-1 col-12 col-md-6 col-lg-5 mx-5  "  >
  
  <div className="card-body1">
    <h4 className="card-title playfair-display-bold  ">Business Jet Charter</h4>
    <p className="card-text mulish-medium7  my-4">Trade crowded airports and wasted time for the <br /> ease, comfort, and
    convenience of travel by private <br /> jet.</p>
    <a href="" class="mulish-medium"><BiSolidPlaneAlt className='icon' />Book Now</a>
  </div>
</div>
<div className="card-11 col-12 col-md-6 col-lg-5" >

<div className="service-list">
  <h6 className='mulish-bold'><span className='heshteg me-2'>#1</span>Private Jet Charter</h6>
        <h5 className='playfair-display-bold'>Find the Best Service For You</h5>
        <div className="item">
            <span className="number">01</span>
            <span className="text playfair-display-bold ">Private Jet Charter</span>
        </div>
        <div className="item active">
            
            <span className="text playfair-display-bold "> <FaArrowLeftLong className='icon me-3'/>Business Jet Charter</span>
        </div>
        <div className="item">
            <span className="number">03</span>
            <span className="text playfair-display-bold ">Private Helicopter</span>
        </div>
        <div className="item">
            <span className="number">04</span>
            <span className="text playfair-display-bold ">Air Ambulance</span>
        </div>
    </div>
</div>
  </div>
</div>
    </div>
  )
}

export default Card1