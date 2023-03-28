import React from "react";
import Icons from "../components/Icons";
import { useNavigate } from "react-router-dom";
// import { AppContext } from "../AppContext";

const Footer = () => {
  // const value = React.useContext(AppContext);  
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <h2 className="cursive" onClick={() => navigate('/')}>
          Katherine Grace Hair <span id="period">•</span> Est 2015
        </h2>
        <p>&copy; {year} All Rights Reserved</p>

        <Icons className="footer-social" />

          {/* <h2>{value}</h2> */}

      </div>
    </>
  );
};

export default Footer;
