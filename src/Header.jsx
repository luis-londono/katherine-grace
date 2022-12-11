import React from "react";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Credits from "./Credits";
import Services from "./Services";
import NotFound from "./NotFound";
import { Routes, Route, NavLink } from "react-router-dom";
// import classNames from "classnames";
import logo from "../src/images/logo.png";

function Header() {
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
            href="https://www.facebook.com"
            target="_blank"
            without="true"
            rel="noreferrer"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Header;
