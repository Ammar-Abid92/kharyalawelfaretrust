import React, { Component } from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import { DataScienceImg } from "./DataScienceImg";
import { FullStackImg } from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import Button from "../../components/button/Button";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg") return <DataScienceImg />;
  else if (props.fileName === "FullStackImg") return <FullStackImg />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>

                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    <Button
                      text="More"
                      newTab={true}
                      href={`${skill.buttonPath}`}
                      theme={theme}
                      className="portfolio-repo-btn"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
