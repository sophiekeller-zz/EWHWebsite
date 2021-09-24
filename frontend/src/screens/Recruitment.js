import React from "react";
import images from "../assets/images/recruitmentImages/recruitmentImages.js";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
import pageData from "../assets/pageData/recruitment.js";
//COMPONENTS
import Header from "../components/Header";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
import Faq from "../components/Faq.js";

// const {google} = require('googleapis');

/* Contact Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Recruitment extends React.Component {
  /* renders contact page */
  render() {
    let navbar = <NavBar />;
    let recruitmentParagraph = "recruitment-paragraph";
    let recruitmentTitle = "recruitment-title";
    if (this.props.mobile) {
      navbar = <MobileNavBar />;
      recruitmentParagraph = "recruitment-paragraph-m";
      recruitmentTitle = "recruitment-title-m";
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
          <div className="contact-title">Recruitment</div>
          <div className={recruitmentParagraph}>
            We are excited to recruit new members to our team this fall. Join us
            at our information sessions to learn more! Apply
            <a className="freshman-form" href="https://cornell.ca1.qualtrics.com/jfe/form/SV_3ZTWcWFGHFzCeSG">
              here
            </a>.
          </div>
          <div className={recruitmentParagraph}>
          </div>
          <div className={recruitmentParagraph}>
            {/* <a className="freshman-form" href="https://cornell.zoom.us/j/94303382628?pwd=d0Zib0JWVEJLMUtQdWxnQnZiSlNVUT09"> */}
            Final Info Session: 9/28 5-6pm EST
            {/* </a> */}
          </div>
          {/* <div className={recruitmentParagraph}>
            <a className="freshman-form" href="https://cornell.zoom.us/j/91897243616?pwd=bnRTRk5WOHFoYk5obzVNVlNkbTUrUT09">
              Info Session #2: 2/18 5-6pm EST Password: EWH
            </a>
          </div> */}

          <img className="timeline-photo" alt="timeline" src={images.timeline1} />
          <img className="timeline-photo" alt="timeline" src={images.timeline2} />
          <div />
          <div className="faqs-container">
            <div className={recruitmentTitle}>Frequently Asked Questions</div>
            <div className="faq-dropdowns-container">
              {pageData.questions.map((q, index) => {
                return (
                  <Faq
                    question={q.question}
                    answer={q.answer}
                    index={index}
                    mobile={this.props.mobile}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
