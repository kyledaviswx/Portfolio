import React, { useState } from 'react';
import Project from '../../components/Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// importing bootstrap components to use for layout
function Portfolio() {
  const [websites] = useState([
    {
      name: 'Oh Snap Photography',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Stellar Web Tach, LLC',
      image_name: 'stellar',
      url: 'https://stellarwebtech.com/',
      github_url: 'private'
    },
    {
      name: 'Wyatt CC, LLC',
      image_name: 'wyatt',
      url: 'https://wyattcc.com',
      github_url: 'private'
    },
    {
      name: 'OU Libraries',
      image_name: 'ou',
      url: 'https://libraries.ou.edu/',
      github_url: 'private'
    },
    {
      name: 'ARS Micronetwork',
      image_name: 'ars',
      url: 'https://ars.mesonet.org/',
      github_url: 'private'
    },
    {
      name: 'Mesonet OKFIRE',
      image_name: 'okfire',
      url: 'https://www.mesonet.org/index.php/okfire/home',
      github_url: 'private'
    },
  ]);

  // in the return function, loop through the array of sites above and import a Project component for each.
  return (
    <Container className="my-1" >
      <Row>
        <Col><h1 id="about">Portfolio</h1></Col>
      </Row>
      <Row>
        {websites.map((site, index) => {
          return <Project key={index} index={index} site={site} />
        })}
      </Row>
    </Container >
  )
}

export default Portfolio