import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <h2 className="cursive">
          Katherine Grace Hair <span id="period">•</span> Est 2015
        </h2>
        <p>&copy; {year} All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
