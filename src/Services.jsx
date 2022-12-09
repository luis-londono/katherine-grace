import React from "react";

const Services = () => {
  return (
    <>
      <h2>Salon Services</h2>

      <h3 style={{ textDecoration: "underline" }}>Cuts & Styling</h3>
      <table style={{ display: "inline-table" }}>
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
      </table>

      <h3 style={{ textDecoration: "underline" }}>Color</h3>
      <table style={{ display: "inline-table" }}>
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
      </table>
    </>
  );
};

export default Services;
