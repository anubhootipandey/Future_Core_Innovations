import React from 'react';
import logo from "../images/f-logo.png";
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="row">
       
          <div className="footer-inner flex w-[14.5rem]">
            <div>
              <img src={logo} alt="footer-logo" />
              <p>At Future Core Innovations, we specialize in delivering state-of-the-art web development, app development, and comprehensive IT services.</p>
              <p style={{ fontWeight: "600" }} className="location">
                <i className="fa-solid fa-location-dot"></i> New Delhi, India
              </p>
            </div>
          </div>
      
        <div className='flex'> 
          <h4 className='flex relative left-[23rem] -top-[16rem] text-xs '>Services</h4>
          <ul  className=" relative left-[17rem] -top-[11.5rem]">
            <li><a href="service.html">Cloud Databases</a></li>
            <li><a href="service.html">Website Hosting</a></li>
            <li><a href="service.html">Website Development</a></li>
            <li><a href="service.html">Network Setup & Management</a></li>
            <li><a href="service.html">IT Consulting</a></li>
            <li><a href="service.html">Data Management and Analytics</a></li>
            <li><a href="service.html">Design & Development</a></li>
            <li><a href="service.html">Android Apps Development</a></li>
            <li><a href="service.html">Cyber Security Services</a></li>
            <li><a href="service.html">VoIP and Unified Communications</a></li>
          </ul>
        </div>
        <div className="flex">
          <h4  className='flex relative left-[43rem] -top-[38rem] text-xs '>Company</h4>
          <ul   className=" relative left-[36rem] -top-[33rem]">
            <li><a href="about.html">About Us</a></li>
            <li><a href="feature.html">Feature</a></li>
            <li><a href="service.html">Service</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>
        <div className="flex">
          <h4   className='flex relative -right-[63rem] -top-[47rem] text-xs '>Newsletter</h4>
            <p    className=" relative left-[55rem] -top-[42rem] w-[15rem]">Signup our newsletter to get update information, news or insight</p>
          <div className="email relative left-[40rem] -top-[36rem]">
            <div className="new-in">
              <input type="text" placeholder="Enter your email" />
            </div>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;