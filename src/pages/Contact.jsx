import React from "react";
import { AppContext } from "../AppContext";

import Map from "../components/Map";

const Contact = () => {
  const [navigationOpen] = React.useContext(AppContext);

  if (navigationOpen) return null;

  return (
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
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
