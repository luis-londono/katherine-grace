import React from "react";
import logo from "../src/images/logo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="row header">
        <div className="col-md-3">
          <img id="logo" src={logo} alt="logo"></img>
        </div>

        <div className="col-md-6 navigation">
          <nav style={{ display: "inline-flex" }}>
            <ul className="navigation-list">
              <NavLink className="nav-link" to={"/"}>
               Home
              </NavLink>
            </ul>
            <ul className="navigation-list">
              <NavLink className="nav-link" to={"/services"}>
                Services
              </NavLink>
            </ul>
            <ul className="navigation-list">
              <NavLink className="nav-link" to={"/gallery"}>
                Gallery
              </NavLink>
            </ul>
            <ul className="navigation-list">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </ul>
          </nav>
          <button className="nav-mobile" >
            <i className="mkdf-icon-font-awesome fa fa-bars"></i>
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
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a
            className="social"
            href="https://www.instagram.com/ktgodberry/"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a
            className="social"
            href="https://www.facebook.com/katie.godbey.1"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
