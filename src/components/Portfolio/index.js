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
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography2',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography3',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography4',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography5',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
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