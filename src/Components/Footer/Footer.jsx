import React from 'react';
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <a href="https://github.com/mohammedsaid21" target="_blank" rel='noreferrer'>
              <BsGithub className='icon' />
            </a>
            <a href="https://www.linkedin.com/in/mohammedsaida/" target="_blank" rel='noreferrer'>
              <BsLinkedin className='icon' />
            </a>

            <BsFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
          </div>
        </div>

        <div className="footerLinks" title='it should Link'>
          <span className="linkTitle">Information</span>
          <li><a href="/" >Home</a></li>
          <li><a href="/">Explore</a></li>
          <li><a href="/">Flight Status</a></li>
          <li><a href="/">Travel</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">How to</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Baggage</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="/">Chauffer</a></li>
          <li><a href="/">Our Partners</a></li>
          <li><a href="/">Destination</a></li>
          <li><a href="/">Careers</a></li>
        </div>

      </div>

      <div className="copyRightDiv flex">
        <p>Made By Love <a href="https://github.com/mohammedsaid21" target="_blank" rel='noreferrer'>Mohammed</a></p>
      </div>

    </div>
  )
};

export default Footer;