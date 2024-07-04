import React from "react";
import { AppContext } from "../AppContext";
import Carolina from "../images/carolina.jpg";

const Gallery = () => {
  const [navigationOpen] = React.useContext(AppContext);

  if (navigationOpen) return null;

  return (
    <>
      <div>
        <h2 style={{ marginBottom: "24px" }}>Gallery</h2>
        <img id="carolina" src={Carolina} alt="carolina"></img>
      </div>
    </>
  );
};

export default Gallery;
