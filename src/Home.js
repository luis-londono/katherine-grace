import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import logo from './images/logo.png'
import salon_2 from './images/salon.avif';

const Home = () => {
const [width, setWidth] = useState(window.innerWidth)



useEffect(() => {
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWindowDimensions);
});



  return (
    <>

      <p>width: {width}px</p>

        {/* <p>home, home on the range 🦬</p> */}
        {/* <img className="salon" src={salon_2} alt="salon"></img> */}

        {/* <div class="bottom-left">Bottom Left</div>
        <div class="top-left">Top Left</div>
        <div class="top-right">Top Right</div>
        <div class="bottom-right">Bottom Right</div>
        <div class="centered">Centered</div> */}

      {/* <div className="row">
        <div className="col-md-3">
        </div>

        <div className="col-md-3">
        <p>home, home on the range 🦬</p>
        </div>

        <div className="col-md-3">
            <p>testing2</p>
        </div>

      </div> */}

    </>
  );
};

export default Home;
