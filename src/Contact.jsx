import React from 'react';

const Contact = () => {
  return (
    <>
      <table style={{ display: "inline-table" }}>
        <tbody>
          <tr >
            <td><strong>Phone:</strong></td>
            <td>&nbsp;&nbsp;</td>
            <td className="float-start">(816) 217-8928</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>&nbsp;&nbsp;</td>
            <td className="float-start">kglondono@gmail.com</td>
          </tr>
        </tbody>
      </table>
{/* 
      <p><strong>Phone:</strong> </p>
      <p><strong>Email:</strong> kglondono@gmail.com</p> */}
    </>
  );
};

export default Contact;