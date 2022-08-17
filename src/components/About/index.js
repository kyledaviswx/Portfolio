import React from 'react'
import profileImage from "../../assets/images/me.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {

  return (
    <Container className="my-5" >
      <Row>
        <Col><h1 id="about">About Kyle</h1></Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}><img src={profileImage} className="profile_pic my-2" style={{ width: "100%" }} alt="cover" /></Col>
        <Col xs={12} sm={12} md={6}>
          <div className="my-2">
            <p className='bio_text'>
              Graduated from the University of Oklahoma with a Bachelors of Science in Meteorology. Also received minors in Mathematics and Broadcast Journalism. I started my career at Weather Decision Technologies, Inc. in Norman, OK (Now owned by DTN). I started web development for an interactive weather map (iMap) at WDT.
              I then changed my career path and joined Epic Tech LLC and created Redibids.com. It is an auction style site with casino like gaming mixed in.
              Next, I spent 3 wonderful years at the Oklahoma Climatological Survey/Oklahoma Mesonet. I built a wide array of sites and tools used in meteorology, emergency management, and fire management.
              I now work for the University of Oklahoma Libraries web team. We create and maintain the OU libraries site as well as numerous websites and tools used by the university libraries.
              I also beginning my time as an instructor of the online Full Stack Flex bootcamp at the University of Minnesota.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About