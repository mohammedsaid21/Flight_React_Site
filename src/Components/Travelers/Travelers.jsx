import React from 'react';
import "./Travelers.scss";

// Import images
import paris from "../../assets/paris.jpg";
import newyork from "../../assets/newyork.jpg";
import india from "../../assets/india.jpg";
import dubai from "../../assets/dubai.jpg";
import travelerImg from "../../assets/travelerImg.png";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

// Using Map method to display all data at once.
const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImg: travelerImg,
    travelerName: 'Mrinmoy',
    socialLink: '@mrinnnmoy',
  },
  {
    id: 2,
    destinationImage: newyork,
    travelerImg: travelerImg,
    travelerName: 'Mrinmoy',
    socialLink: '@mrinnnmoy',
  },
  {
    id: 3,
    destinationImage: india,
    travelerImg: travelerImg,
    travelerName: 'Mrinmoy',
    socialLink: '@mrinnnmoy',
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImg: travelerImg,
    travelerName: 'Mrinmoy',
    socialLink: '@mrinnnmoy',
  },
]

const Travelers = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Top Travelers this month!</h2>

        <div className="travelersContainer grid" data-aos='fade-down' data-aos-duration='1200'>
          {travelers.map(({ id, destinationImage, travelerImg, travelerName, socialLink }) => {
            return (
              // Single Passenger Card
              <div key={id} className="singleTraveler">
                <img src={destinationImage} alt="destinationImage" className='destinationImage' />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImg} alt="travelerImage" className='travelerImage' />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div >
  )
};

export default Travelers;