import React from "react";
import Engagement from "./images/katherine-engagement-small.jpg";

const About = () => {
  return (
    <>
      <h2>About</h2>

      <div className="about-wrapper">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-4">
            <img id="engagement" src={Engagement} alt="engagement"></img>
          </div>
          <div className="col-md-4 about-description">
            <span className="wave">👋</span> All of the text goes here. Testing
            the tell all stuff. All of the text goes here. Testing the tell all
            stuff. All of the text goes here. Testing the tell all stuff. All of
            the text goes here. Testing the tell all stuff. All of the text goes
            here. Testing the tell all stuff. All of the text goes here. Testing
            the tell all stuff. All of the text goes here. Testing the tell all
            stuff. All of the text goes here. Testing the tell all stuff. All of
            the text goes here. Testing the tell all stuff. All of the text goes
            here. Testing the tell all stuff. All of the text goes here. Testing
            the tell all stuff. All of the text goes here. Testing the tell all
            stuff. All of the text goes here. Testing the tell all stuff. All of
            the text goes here. Testing the tell all stuff. All of the text goes
            here. Testing the tell all stuff. 💇‍♀️
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
