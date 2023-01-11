import React from "react";

const Services = () => {
  return (
    <>
      <h2 style={{ marginBottom: "24px" }}>Salon Services</h2>

      <h3 style={{ color: "seashell", textDecoration: "underline" }}>
        Cuts & Styling
      </h3>
      <table style={{ display: "inline-table" }}>
        <tbody>
          <tr>
            <td>Men's Cut</td>
            <td>$45</td>
          </tr>
          <tr>
            <td>Women's Cut</td>
            <td>$55</td>
          </tr>
          <tr>
            <td>Shampoo/Blowout</td>
            <td>$47</td>
          </tr>
        </tbody>
      </table>

      <h3
        style={{
          color: "seashell",
          textDecoration: "underline",
          marginTop: "10px",
        }}
      >
        Color
      </h3>
      <table style={{ display: "inline-table" }}>
        <tbody>
          <tr>
            <td>Single Process</td>
            <td>$85</td>
          </tr>
          <tr>
            <td>Partial Highlight</td>
            <td>$115</td>
          </tr>
          <tr>
            <td>Full Highlight</td>
            <td>$150</td>
          </tr>
        </tbody>
      </table>

      <h3
        style={{
          color: "seashell",
          textDecoration: "underline",
          marginTop: "10px",
        }}
      >
        Extras
      </h3>
      <table style={{ display: "inline-table" }}>
        <tbody>
          <tr>
            <td>Brow Wax</td>
            <td />
            <td>$15</td>
          </tr>
          <tr>
            <td>Lip Wax</td>
            <td />
            <td>$5</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Services;
