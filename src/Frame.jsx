import React, { useState } from "react";
import { createPortal } from "react-dom";
import Spinner from "./Spinner";

const Frame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef;

  // console.log(mountNode)

  return (
    <>
      <iframe {...props} ref={setContentRef}>
        {contentRef == null ? <Spinner /> : null}
        {contentRef ? createPortal(children, mountNode) : <Spinner />}
      </iframe>
    </>
  );
};

export default Frame;
