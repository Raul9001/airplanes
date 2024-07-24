import React from 'react'
import "./Navbar.css"
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
   
<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="/assets/images/logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active me-3 mulish-bold" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-3 mulish-bold" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-3 mulish-bold" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-3 mulish-bold" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-3 mulish-bold" href="#">Faq</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active me-3 mulish-bold" href="#">Contact Us</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active me-3 ms-2 " href=""><FaSearch /></a>
        </li>
        
      </ul>
      
      <button className="ms-3 mulish-bold booknow"> <BiSolidPlaneAlt className='icon' />Book Now</button>

     
    </div>
  </div>
</nav>
      
  )
}

export default Navbar
