import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Project() {
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
      name: 'Oh Snap Photography',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
    {
      name: 'Oh Snap Photography',
      image_name: 'oh_snap',
      url: 'https://kyledaviswx.github.io/react_photo_app/',
      github_url: 'https://github.com/kyledaviswx/react_photo_app'
    },
  ]);

  return (
    <Container className="my-1" >
      <Row>
        <Col><h1 id="about">Portfolio</h1></Col>
      </Row>
      <Row>
        {websites.map((site, i) => (
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className='portfolio_card mx-auto'>
              <Card.Img variant="top" src={require(`../../assets/images/websites/${site.image_name}.png`)} alt="Card image cap" />
              <Card.Body>
                <Card.Title>{site.name}</Card.Title>
                <Card.Link rel="noreferrer" target="_blank" href={site.url}>Website</Card.Link>
                <Card.Link rel="noreferrer" target="_blank" href={site.github_url}>GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container >
  )
}

export default Project