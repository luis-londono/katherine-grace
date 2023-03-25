import React from "react";
import Engagement from "../images/katherine-engagement-small.jpg"

const About = () => {
  return (
    <>
      <h2>About</h2>

      <div className="about-wrapper">
        <div className="container about">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-4 col-sm-12" >
            <img id="engagement" src={Engagement} alt="engagement"></img>
          </div>
          <div className="col-md-4 col-sm-12">
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
            stuff. All of the text goes here. 💇‍♀️
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
