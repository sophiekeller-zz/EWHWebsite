import React from "react";
import images from "../assets/images/recruitmentImages/recruitmentImages.js";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
import text from "../assets/pageData/recruitment.js";
import { Link } from "react-router-dom";

//COMPONENTS
import Header from "../components/Header";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";

// const {google} = require('googleapis');

/* Contact Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Recruitment extends React.Component {
  constructor(props) {
    super(props);
  }

  /* renders contact page */
  render() {
    let navbar = <NavBar />;
    if (this.props.mobile) {
      navbar = <MobileNavBar />;
    }
    return (
      <div className="home-container">
        {navbar}
        <Header
          mobile={this.props.mobile}
          photo={headerPhotos.secondHeader}
          state={this.state}
          title="Join Us"
        />
        <div className="recruitment-container">
          <div className="contact-title">Fall 2020 Recruitment</div>
          <div className="recruitment-paragraph">
            Our freshman application is currently open. Come join us at
            <a
              className="freshman-form"
              target="_blank"
              href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/project-teams/cornell-engineering-student-project"
            >
              Project Fest
            </a>
            on October 4th or at our Information Sessions.
          </div>
          <div className="recruitment-paragraph">
            **We will be at Project Fest from 1 to 4 pm .
          </div>
          <div className="recruitment-buttons-container">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1a74OqNP2peyZ7fCdB9EvC7TfCWp5_fkkzM7HDpjzClY"
              className="contact-button"
            >
              Apply Now
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/Cornellewh"
              className="contact-button"
            >
              Facebook Events
            </a>
            <a
              target="_blank"
              href="https://cornell.zoom.us/j/91692819477?pwd=cVpKcE9vRitudnRveXRUNXZ1Rjd6dz09"
              className="contact-button"
            >
              Info Session 10/8
            </a>
            <a
              target="_blank"
              href="https://cornell.zoom.us/j/93549030828?pwd=Y1ZEL3FaeXFTYi9DVUsvR3IyT1g5UT09"
              className="contact-button"
            >
              Info Session 10/12
            </a>
          </div>
          <img
            className="timeline-photo"
            alt="timeline"
            src={images.timeline}
          />
        </div>
      </div>
    );
  }
}
