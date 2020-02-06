import React from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import FA from 'react-fontawesome'

const GetStarted = () => {

  const handleClick = () => {
      if (typeof window !== 'undefined') {
          window.location = '/schedule-a-call';
      }
  };
  
  return (
    <section className="get-started-section">
      <Container>
        <Row className="pt-5 pb-2" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <h1 className="text-center" style={{marginBottom: '0px', fontWeight: "bold" }}>Get Started.</h1>
            <p className="text-center" style={{fontSize: '12px' }}>How do I start with my order?</p>
          </Col>
        </Row>
        <Row className="pt-2 pb-5" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <p className="text-center" style={{paddingLeft: '100px', paddingRight: '100px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button onClick={handleClick} className="welcome-button wiggle-button" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"><FA name="phone" /> Schedule a call</Button>
          </Col>
        </Row>
      </Container>
      </section>
  )

}

export default GetStarted
