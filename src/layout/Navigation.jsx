import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icons from "../components/Icons";
import { AppContext } from "../AppContext";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [navigationIsOpen, setNavigationIsOpen] = useState(false);

  const [, setNavigationOpen] = React.useContext(AppContext);

  const navigate = useNavigate();
  const schedule =
    "https://na0.meevo.com/OnlineBookingApp/login?locationId=105198&tenantId=102418";

  const handleHamburgerClick = () => {
    setIsMobile(!isMobile);
    setNavigationOpen(false);
  };

  const handleNavigationClick = () => {
    setIsMobile(!isMobile);
    setNavigationOpen(false);
  };

  return (
    <>
      <div className="row navigation-wrapper">
        <nav className="navbar">
          <div className="col-lg-4 col-md-5 ">
            <h2
              className="cursive-logo float-start"
              onClick={() => navigate("/")}
            >
              Katherine Grace Hair
            </h2>
          </div>

          <div className="col-lg-4 col-md-5">
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={handleNavigationClick}
            >
              <NavLink to="/" className="home">
                <li>Home</li>
              </NavLink>
              <a href={schedule} className="test schedule">
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
              <NavLink to="/contact" className="contact">
                <li>Contact</li>
              </NavLink>
            </ul>
            <button className="mobile-menu-icon" onClick={handleHamburgerClick}>
              {isMobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="mkdf-icon-font-awesome fa fa-bars"></i>
              )}
            </button>
          </div>

          <div className="col-lg-4 col-md-2 icons">
            <Icons className="navigation-social" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
