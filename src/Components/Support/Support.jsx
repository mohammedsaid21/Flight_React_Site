import React from 'react';
import "./Support.scss";
import gridImage from "../../assets/gridImage.png";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Support = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='1200'>
              <span className='number'>01</span>
              <h4>Travel requirements for India</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='3500'>
              <span className='number colorOne'>02</span>
              <h4>Chauffer services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='4500'>
              <span className='number colorTwo'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
            </div>

          </div>

          <div className="imgDiv" data-aos='fade-left' data-aos-duration='1200'>
            <img src={gridImage} alt="grid-img" />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Support;