import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import Photography2 from '../images/photography.png'
import GetStarted from "../components/get-started"

import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap"

const OurServices = () => (
  <Layout>
    <SEO title="Our Services" />
    <section class="why-us-header">
      <Container>
        <Row>
          <Col>
            <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>Our Services</h2>
            <p style={{fontSize: '12px', textAlign: 'center'}}>We specialized in these two field</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="our-services-section">
      <Container>
        <Row>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Video Production</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="our-services-section">
      <Container>
        <Row>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Photography</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
        </Row>
      </Container>
    </section>
    <GetStarted/>
    <Line/>
  </Layout>
)

export default OurServices
