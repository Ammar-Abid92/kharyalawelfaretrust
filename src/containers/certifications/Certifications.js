import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { about } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text, fontWeight:"bolder" }}>
              About Our Team
            </h1>
            <br />
          </Fade>
          <Fade bottom duration={2000} distance="20px">
            <br/>
            <h1 className="certs-header" style={{ color: theme.text }}>
              Board Of Trustees
            </h1>
            <br />
          </Fade>
        </div>
        <div className="certs-body-div">
          {about.trusteesMembers.map((each) => {
            return (
              <CertificationCard certificate={each} theme={theme} />
            );
          })}
        </div>

        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <br />
            <h1 className="certs-header" style={{ color: theme.text }}>

              Shurra Members
            </h1>
            <br />
          </Fade>
        </div>
        <div className="certs-body-div">
          {about.shurraMembers.map((each) => {
            return (
              <CertificationCard certificate={each} theme={theme} />
            );
          })}
        </div>
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <br />
            <h1 className="certs-header" style={{ color: theme.text }}>
              Social Media Members
            </h1>
            <br />
          </Fade>
        </div>
        <div className="certs-body-div">
          {about.mediaMembers.map((each) => {
            return (
              <CertificationCard certificate={each} theme={theme} />
            );
          })}
        </div>
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Founders
            </h1>
            <br />
          </Fade>
        </div>
        <div className="certs-body-div">
          {about.founderMembers.map((each) => {
            return (
              <CertificationCard certificate={each} theme={theme} />
            );
          })}
        </div>


      </div>
    );
  }
}

export default Certifications;
