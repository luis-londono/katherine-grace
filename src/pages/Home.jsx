import React, { useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import utensils from "../images/utensils.png";
import utensilsMobile from "../images/utensils-mobile.png";

const Home = () => {
  const [navigationOpen] = React.useContext(AppContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  });

  // console.log(width + "px");

  return (
    <>
      {!navigationOpen && (
        <>
          {width && width >= 400 ? (
            <img className="home-img" src={utensils} alt="utensils"></img>
          ) : (
            <img className="home-img" src={utensilsMobile} alt="utensils"></img>
          )}
        </>
      )}
    </>
  );
};

export default Home;
