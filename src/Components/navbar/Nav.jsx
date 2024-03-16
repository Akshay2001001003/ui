import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
function Nav() {
  return (
    <div className="nav-box">
      <img className="logo" src={logo} alt="404" />
      <input placeholder="Search here..." className="input" type="text" />
      <button className="search" type="submit">
        <IoIosSearch color="white" className="search-icon" />
      </button>
      <div className="list">
        <ul>
          <li>
            <FaCompass className="pic" color="#8064A2" /> &nbsp;&nbsp;Explore
            &nbsp;&nbsp; <IoIosArrowDown color="#939CA3" />
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.5L20.2272 7.25V16.75L12 21.5L3.77276 16.75V7.25L12 2.5Z"
                fill="#8064A2"
              />
              <path
                d="M11.6206 7.13723C11.7422 6.77269 12.2578 6.77269 12.3794 7.13723L13.2814 9.84062C13.3355 10.0028 13.4867 10.1127 13.6577 10.114L16.5075 10.1365C16.8918 10.1395 17.0511 10.6299 16.742 10.8582L14.4497 12.5514C14.3122 12.653 14.2544 12.8308 14.3059 12.9938L15.1652 15.711C15.2811 16.0774 14.864 16.3805 14.5513 16.1571L12.2326 14.5002C12.0935 14.4008 11.9065 14.4008 11.7674 14.5002L9.44871 16.1571C9.13604 16.3805 8.71889 16.0774 8.83476 15.711L9.69405 12.9938C9.7456 12.8308 9.68785 12.653 9.55032 12.5514L7.25798 10.8582C6.94887 10.6299 7.1082 10.1395 7.49248 10.1365L10.3423 10.114C10.5133 10.1127 10.6645 10.0028 10.7186 9.84062L11.6206 7.13723Z"
                fill="white"
              />
            </svg>
            Hobbies&nbsp;&nbsp; <IoIosArrowDown color="#939CA3" />
          </li>
        
          <li>
            <FaBookmark
              className="pic"
              height="24px"
              width="24px"
              color="#8064A2"
            />
          </li>
          <li>
            <FaBell
              height="24px"
              className="pic"
              width="24px"
              color="#8064A2"
            />
          </li>
          <li>
            <PiShoppingCartSimpleFill
              className="pic"
              height="24px"
              width="24px"
              color="#8064A2"
            />
          </li>
          <li>
            <button className="btn">Sign In</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
