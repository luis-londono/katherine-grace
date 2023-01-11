import React from "react";
import Navigation from "./Navigation";
import Navigation_ from "./Navigation_";
import Routing from "./Routing";

function Header() {
  return (
    <>
      <Navigation_ />
      {/* <Navigation /> */}
      <Routing />
    </>
  );
}

export default Header;
