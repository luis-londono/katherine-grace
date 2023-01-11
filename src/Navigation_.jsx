import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const Navigation_ = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="row navigation-wrapper">
        <nav className="navbar">
          <div className="col-lg-2 col-md-2">
            <h2 className="cursive-logo">Katherine Grace Hair</h2>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setIsMobile(!isMobile)}
            >
              <NavLink to="/" className="home">
                <li>Home</li>
              </NavLink>
              <NavLink to="/services" className="services">
                <li>Services</li>
              </NavLink>
              <NavLink to="/gallery" className="gallery">
                <li>Gallery</li>
              </NavLink>
              <NavLink to="/about" className="about">
                <li>About</li>
              </NavLink>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="mkdf-icon-font-awesome fa fa-bars"></i>
              )}
            </button>
          </div>
          <div className="col-lg-2 col-md-2 icons">

          <a
            className="social"
            href="mailto:kglondono@gmail.com"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a
            className="social"
            href="https://www.instagram.com/ktgodberry/"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a
            className="social"
            href="https://www.facebook.com/katie.godbey.1"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>

          </div>
        </nav>
      </div>

      {/* 
      <div className="row header">
        <div className="col-md-2 col-sm-2 log">
          <img id="logo" src={logo} alt="logo"></img>
        </div>

        <div className="col-md-8 col-sm-2 navigation">
          <nav className="nav-bar">
            <ul className={navOpen ? "nav-list-mobile" : "nav-list"}>
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </ul>
            <ul className={navOpen ? "nav-list-mobile" : "nav-list"}>
              <NavLink className="nav-link" to={"/services"}>
                Services
              </NavLink>
            </ul>
            <ul className={navOpen ? "nav-list-mobile" : "nav-list"}>
              <NavLink className="nav-link" to={"/gallery"}>
                Gallery
              </NavLink>
            </ul>
            <ul className={navOpen ? "nav-list-mobile" : "nav-list"}>
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </ul>
          </nav>
          <button className="col-sm-2 nav-mobile" onClick={navOnClick}>
            {navOpen ? (
              <i className="fa fa-times" />
            ) : (
              <i className="mkdf-icon-font-awesome fa fa-bars" />
            )}
          </button>
        </div>
        <div className="col-md-2 navigation">
          <a
            className="social"
            href="mailto:kglondono@gmail.com"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a
            className="social"
            href="https://www.instagram.com/ktgodberry/"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a
            className="social"
            href="https://www.facebook.com/katie.godbey.1"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Navigation_;
