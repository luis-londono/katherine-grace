
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Spinner from './Spinner'

const Frame = ({
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [contentRef, setContentRef] = useState(null)

  const mountNode =
    contentRef?.contentWindow?.document?.body


    useEffect(() => {
      if(mountNode !== null || 
        mountNode !== undefined )
        setLoading(false)
      else 
        setLoading(true)

    }, [mountNode]);

  return (
    <>
    {loading ? <Spinner /> : null}
    <iframe {...props} ref={setContentRef}>
      {mountNode ? createPortal(children, mountNode) : <Spinner />}
      {/* {mountNode == null ? <Spinner /> : null} */}
    </iframe>
    </>
  )
};

export default Frame;