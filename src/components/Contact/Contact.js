import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from "../Wrapper/Wrapper";
import Title from "../Title/Title";
import "./Contact.css";
import profPic from "../../assets/images/heatherSorrellsProfilePic.PNG";
import { MdEmail } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { FaReact } from "react-icons/fa"

const Contact = () => {
  let profilePic = profPic

  return (
    <Wrapper>
      <Title id="contact">My Contact Information</Title>

      <Container fluid="md" id="profile">
        <h2>Please feel free to get in touch!</h2>

        <Row className="justify-content-center">
          <Col xs={12} md={8} className="main-content-profile">
            <Row>
              <h5>Whether you want to discuss new opportunities, to talk about a project collaboration, or just to say hi, I'd love to hear from you! You can reach me at any of the contact links below.</h5>
            </Row>
            <Row>
              <Col xs={12} className="software-skill-inline">
                <a href="mailto:hlsorrells.dev@gmail.com"><MdEmail className="icon" /> hlsorrells.dev@gmail.com</a>
              </Col>
              <Col xs={12} className="software-skill-inline">
              <a href="https://github.com/Hlsorrells"><GoMarkGithub className="icon" /> github.com/Hlsorrells</a>
              </Col>
              <Col xs={12} className="software-skill-inline">
              <a href="https://www.linkedin.com/in/heather-sorrells/"><GrLinkedin className="icon" /> linkedin.com/in/heather-sorrells</a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2} className="image-content-profile">
            <img alt="Heather Sorrells image" src={profilePic} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Contact;
