import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const schedule = 'https://na0.meevo.com/OnlineBookingApp/login?locationId=105198&tenantId=102418'

  return (
    <>
      <div className="row navigation-wrapper">
        <nav className="navbar">
          <div className="col-lg-2 col-md-2">
            <h2 className="cursive-logo" onClick={() => navigate('/')}>Katherine Grace Hair</h2>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setIsMobile(!isMobile)}
            >
              <NavLink to="/" className="home">
                <li>Home</li>
              </NavLink>
              <a href={schedule} className="schedule">
                <li>Schedule Now</li>
              </a>
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
    </>
  );
};

export default Navigation;
