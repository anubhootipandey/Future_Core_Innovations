import React from "react";
import "./Contact.css";
import ContactImg from "../media/contact-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={ContactImg} alt="Contact Illustration" />
        <h3>SEND ME A MESSAGE</h3>
        <p>We'd love to hear from you for your message</p>
        <form className="contact-form">
          <div className="form-group">
            <div className="input-container">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Email Address" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input type="text" placeholder="Phone" required />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Subject" required />
            </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-right">
        <h4>Contact Information</h4>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHeadphones} className="icon-envelope"  />
            <span>Make a Call</span>
            <p>+1 234 567 890</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon-envelope" />
            <span>Send a Mail</span>
            <p>info@example.com</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationArrow} className="icon-location" />
            <span>Location</span>
            <p>New Delhi, India</p>
          </li>
        </ul>
        <div className="map">
        </div>
      </div>
    </div>
  );
};

export default Contact;
