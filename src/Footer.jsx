import React from "react";
import Icons from "./Icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <h2 className="cursive">
          Katherine Grace Hair <span id="period">•</span> Est 2015
        </h2>
        <p>&copy; {year} All Rights Reserved</p>

        <Icons className="footer-social" />
      </div>
    </>
  );
};

export default Footer;
