import React from "react";
import { AppContext } from "../AppContext";
import Frame from "../components/Frame";

const Contact = () => {
  const [navigationOpen] = React.useContext(AppContext);

  console.log(navigationOpen)
  // const iframeRef = useRef(null);

  // useEffect(() => {

  //   console.log("test " + iframeRef.current)

  // }, [iframeRef]);
  return (
    <>
      {!navigationOpen && (
        <>
          <h2>Contact</h2>
          <table style={{ display: "inline-table" }}>
            <tbody>
              <tr>
                <td>
                  <strong>Phone:</strong>
                </td>
                <td>&nbsp;&nbsp;</td>
                <td className="float-start">(816) 217-8928</td>
              </tr>
              <tr>
                <td>
                  <strong>Email:</strong>
                </td>
                <td>&nbsp;&nbsp;</td>
                <td className="float-start">
                  {" "}
                  <a
                    // className={className}
                    style={{ color: "white", textDecoration: "none" }}
                    href="mailto:kglondono@gmail.com"
                    target="_blank"
                    without="true"
                    rel="noreferrer"
                  >
                    kglondono@gmail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            className="row"
            style={{
              justifyContent: "center",
              marginTop: "40px",
              display: "grid",
            }}
          >
            <div className="col-lg-6">
              {/* {iframeRef ? <Spinner /> : null} */}
              <Frame
                // ref={iframeRef}
                title="bijin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.5964583478717!2d-94.63379458473642!3d39.001705379554735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ee96764f3e63%3A0xa462b45bee717954!2sbijin%20salon%20%26%20spa!5e0!3m2!1sen!2sus!4v1673753317651!5m2!1sen!2sus"
                width="325"
                height="300"
                padding="10px"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
