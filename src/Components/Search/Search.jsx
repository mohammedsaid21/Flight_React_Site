import React from 'react';
import "./Search.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Search = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='search container section'>
      <div data-aos='fade-up' data-aos-duration='1200' className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex" data-aos='fade-up' data-aos-duration='2000'>
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Enter Destination' />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="number" placeholder='Add Guests' />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="date" placeholder='Add Date' />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="date" placeholder='Add Date' />
            </div>
          </div>

          <button className='btn btnBlock flex'>Search Flight</button>

        </div>
      </div>
    </div>
  )
};

export default Search;