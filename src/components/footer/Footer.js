import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = (props) => {
  console.log("propssss---->", props);
  return (
    <Box>
      <h1
        style={{
          color: "#A6E1FA",
          textAlign: "center",
          marginTop: "-25px",
          marginBottom: "40px",
        }}
      >
        Kharyala Welfare Trust
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us & Services</Heading>
            <FooterLink href="#mission">Aim</FooterLink>
            <FooterLink href="#mission">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#contact">Contact</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/jawaidwalikhan/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/kharyala.welfaretrust/?igshid=YmMyMTA2M2Y=">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="mailto:kharyalawelfaretrust@gmail.com">
              <i className="fab fa-google">
                <span style={{ marginLeft: "10px" }}>Mail</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <Row
          style={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Made with ❤️ by{" "}
            <span>
              <a href="https://softsolution01.web.app/" target="_blank">
                Softsolutions
              </a>{" "}
            </span>{" "}
          </p>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
