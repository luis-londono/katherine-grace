import React from "react";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
