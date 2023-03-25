import React, { useEffect, useState } from "react";
import utensils from "../images/utensils.png";
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  });

  console.log(width + "px");

  return (
    <>
      {/* <p>width: {width}px</p> */}

      <img className="home-img" src={utensils} alt="utensils"></img>
    </>
  );
};

export default Home;
