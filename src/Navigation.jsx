import React, { useState } from "react";
import logo from "../src/images/logo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navOnClick = () => {
    setNavOpen(!navOpen);
  };

  console.log(navOpen);

  return (
    <>
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
      </div>
    </>
  );
};

export default Navigation;
