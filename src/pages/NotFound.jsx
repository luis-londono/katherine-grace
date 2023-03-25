import React from "react";

const NotFound = () => {
  return (
    <div>
      <i
        className="fa fa-exclamation-triangle"
        style={{ fontSize: "80px" }}
        aria-hidden="true"
      ></i>
      <p>Whoopsies, this page does not exists!</p>
    </div>
  );
};

export default NotFound;
