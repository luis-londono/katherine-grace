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
    </>
  );
};

export default Footer;
