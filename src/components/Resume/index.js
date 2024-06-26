import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import resume from "../../assets/docs/Kyle_Davis_resume.pdf";

// importing bootstrap components to use for layout
function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 id="about">Resume and Skills</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="resume_btn" target="_blank" href={resume}>
            Download Resume
          </Button>
        </Col>
      </Row>
      <Row>
        <p>
          Programing proficiency in: Drupal (7,8,9, and 10), Pantheon platform,
          HTML, Twig, JavaScript, React, JSX, PHP, Objective C, XML, KML,
          ArcGIS, CSS, OpenLayers, Web Sockets, composer, npm, git.
        </p>
        <p>
          Video editing with: Adobe Premiere Pro, Final Cut Pro, Avid media
          composer.
        </p>
      </Row>
    </Container>
  );
}

export default Resume;
