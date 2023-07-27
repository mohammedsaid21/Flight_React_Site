import React from 'react';
import "./Subscribe.scss";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Subscribe = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='subscribe section'>
      <div className="sectionContainer container" data-aos='fade-down' data-aos-duration='1200'>
        <h2>Subscribe Newsletter & get latest News!</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email address.' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
};

export default Subscribe;