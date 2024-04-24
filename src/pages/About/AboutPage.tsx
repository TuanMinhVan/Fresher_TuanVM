import './style.scss';

import React from 'react';

import { Button, Col, Row } from 'react-bootstrap';

/* The About class is a React component that renders an About page with a heading and a welcoming
message. */
const AboutPage: React.FC = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 className="text-center p-10">Our Team</h2>

      <Row>
        <Col sm="4">
          <h2>Jane Doe</h2>
          <p className="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p>
            <Button variant="primary">Contact</Button>
          </p>
        </Col>
        <Col sm="4">
          <h2>Jane Doe</h2>
          <p className="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p>
            <Button variant="primary">Contact</Button>
          </p>
        </Col>
        <Col sm="4">
          <h2>Jane Doe</h2>
          <p className="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p>
            <Button variant="primary">Contact</Button>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AboutPage;
