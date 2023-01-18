import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import logo from './images/logo.png'
// import salon_2 from './images/salon.avif';
// import next from './images/next.png';
// import scrunch from './images/scrunch.png'
// import brush from './images/brush.png'
import sunflower from './images/sunflower.png'

const Home = () => {
const [width, setWidth] = useState(window.innerWidth)



useEffect(() => {
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWindowDimensions);
});

console.log(width + "px")

  return (
    <>

      {/* <p>width: {width}px</p> */}

      {/* <img id="next" src={next} alt="next"></img> */}
      {/* <img id="fabu" src={fabu} alt="fabu"></img> */}
      {/* <img className="home-img" src={scrunch} alt="scrunch"></img>  */}
      {/* <img className="home-img" src={brush} alt="brush"></img>  */}
      <img className="home-img" src={sunflower} alt="sunflower"></img> 
    </>
  );
};

export default Home;
