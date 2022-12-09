import React from "react";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Credits from "./Credits";
import Services from "./Services";
import NotFound from "./NotFound";
import { Routes, Route, NavLink } from "react-router-dom";
// import classNames from "classnames";

function Header() {
  return (
    <>
      <div className="navigation">
        <nav style={{ display: "inline-flex" }}>
          <ul className="navigation-list">
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
          </ul>
          <ul className="navigation-list">
            <NavLink className="nav-link" to={"/about"}>
              About
            </NavLink>
          </ul>
          <ul className="navigation-list">
            <NavLink className="nav-link" to={"/gallery"}>
              Gallery
            </NavLink>
          </ul>
          <ul className="navigation-list">
            <NavLink className="nav-link" to={"/services"}>
              Services
            </NavLink>
          </ul>
          <ul className="navigation-list">
            <NavLink className="nav-link" to={"/credits"}>
              Credits
            </NavLink>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Header;
