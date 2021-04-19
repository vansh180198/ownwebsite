import React,{useState} from "react";
import "./navbar.css";
// import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Sidebar from './sidebar'
// import {CSSTransition} from 'react-transition-group;'
function Navbar() {
  const [open, setOpen] = useState(false);
  function scrollToTop(){
    scroll.scrollToTop();
  };
  return (
    <div className="nav">
      <div className="navbar-container">
        {/* <Link to="/" className="navbar-logo">Travel J&K</Link> */}
        <span onClick={scrollToTop}>Travel J&K</span>
        <div>
          <ul className="navbar-menu">
            {/* <li className="nav-item"> */}
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Home
              </Link>
            {/* </li> */}
            <li className="nav-item">
              
                Services
              
            </li>
            <li className="nav-item">
             
                Products
              
            </li>
            <li className="nav-item" >
              
                Sign Up
                
             
            </li>
            
          </ul>
        </div>
        <button className="navbar-button" onMouseEnter={()=>{setOpen(!open)}} onMouseLeave={()=>{setOpen(!open)}}
         >Sign Up
       {open && <Sidebar/>}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
