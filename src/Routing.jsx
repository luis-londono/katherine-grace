import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";


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
