import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// importing bootstrap components to use for layout
function Project(props) {
  // destructure props to use params passed in individually.
  const {
    index,
    site
  } = props;

  let github_link = site.github_url === 'private' ? <Card.Link className='private_link'>Private GitHub</Card.Link> : <Card.Link rel='noreferrer' target='_blank' href={site.github_url}>GitHub</Card.Link>;

  return (
    <Col data-testid={index} xs={12} sm={12} md={4} lg={4} xl={4}>
      <Card key={index} className='portfolio_card mx-auto'>
        <Card.Img variant="top" src={require(`../../assets/images/websites/${site.image_name}.png`)} alt="Card image cap" />
        <Card.Body>
          <Card.Title>{site.name}</Card.Title>
          <Card.Link className='site_link' rel="noreferrer" target="_blank" href={site.url}>Website</Card.Link>
          {github_link}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Project