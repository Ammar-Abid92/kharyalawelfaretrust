import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h3 className="greeting-nickname" style={{ color: theme.text }}>
                {greeting.nickname}
              </h3>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, marginTop: "20px" }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
                <Button
                  text="Contact Us"
                  theme={theme}
                  newTab={true}
                  href="#contact"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
