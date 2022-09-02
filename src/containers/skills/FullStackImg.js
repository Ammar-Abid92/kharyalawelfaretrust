import React from "react";
import "../../assests/images/ration.jpg";
import { Fade } from "react-reveal";
import Carousel from "react-bootstrap/Carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const FullStackImg = () => {
  return (
    <Fade bottom duration={2000} distance="20px">
      <Carousel
        style={{
          marginLeft: "30px",
          height: "auto",
          maxWidth: "80%",
          borderRadius: "15px"
        }}
      >
        <Carousel.Item>
          <img
            style={{
              height: "450px", width: "100%", borderRadius: "15px"
            }}
            src={require("../../assests/images/JawaidWali(F)(B).jpeg")}
            alt="Kharyala"
          />
          <Carousel.Caption>
            <h4 style={{ color: "black" , fontFamily:"georgia" }}>JAWAID WALI -CHAIRMAN</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "450px", width: "100%", borderRadius: "15px"
            }}
            src={require("../../assests/images/MuhammadTanveerTanoli(F)(S).JPG")}
            alt="Kharyala"
          />
          <Carousel.Caption>
            <h4 style={{ color: "black", fontFamily:"georgia" }}>M. TANVEER TANOLI -Founder</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fade>
  );
};

export { FullStackImg };
