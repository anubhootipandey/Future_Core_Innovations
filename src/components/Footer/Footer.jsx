import React from 'react';
import logo from "../images/logo1.svg";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-blue-950 text-white py-10">
      <div className="frame138 mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className=" frame138a md:w-1/3 mb-6 md:mb-0">
          <img src={logo} alt="" />
          <p className='mt-10'>
          At Future Core Innovations, we specialize in delivering state-of-the-art web development, 
          app development, and comprehensive IT services.
          </p>
          <div className='mt-10'>
            <p>New Delhi, India</p>
          </div>
        </div>

        <div className=" frame138b md:w-1/3 mb-6 md:mb-0 flex justify-between">
          <div>
            <h3 className="font-bold mb-2">Services</h3>
            <ul>
              <li>Cloud Databases</li>
              <li>Website Hosting</li>
              <li>Website Development</li>
              <li>Network Setup & Management</li>
              <li>IT Consulting</li>
              <li>Data Management and Analytics</li>
              <li>Design & Development</li>
              <li>Android Apps Development</li>
              <li>Cyber Security Services</li>
              <li>VoIP and Unified Communications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Feature</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="frame138c md:w-1/3">
          <h3 className="font-bold mb-2">Subscribe</h3>
          <form className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-4 w-96 py-4 h-14 rounded-[23px] text-black"
            />
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;