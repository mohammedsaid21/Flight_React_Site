import React from 'react';
import "./Lounge.scss";
import Grid2 from "../../assets/grid2.png";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Lounge = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv" data-aos='fade-up' data-aos-duration='1200'>
          <img src={Grid2} alt="lounge-img" />
        </div>

        <div className="textDiv" data-aos='fade-left' data-aos-duration='1200'>
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div className="singleGrid">
              <span className='gridTitle'>
                Help through the airport.
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket!
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Priority Boarding.
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket!
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Care on the flight.
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket!
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Chauffer-drive service.
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket!
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Lounge;