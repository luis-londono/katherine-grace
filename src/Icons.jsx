import React from 'react';

const Icons = ({className}) => {

  return (
    <>
        <a
          className={className}
          href="mailto:kglondono@gmail.com"
          target="_blank"
          without="true"
          rel="noreferrer"
        >
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
        &nbsp;
        <a
          className={className}
          href="https://www.instagram.com/ktgodberry/"
          target="_blank"
          without="true"
          rel="noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
    </>
  );
};

export default Icons;