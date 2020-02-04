import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import Photography2 from '../images/photography.png'
import GetStarted from "../components/get-started"


import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap"

const WhyUs = () => (
  <Layout>
    <SEO title="Why Us" />
    <section class="why-us-header">
      <Container>
        <Row>
          <Col>
            <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>Why Us</h2>
            <p style={{fontSize: '12px', textAlign: 'center'}}>Explanation why you need to choose us</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section">
      <Container>
        <Row>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Affordable</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section">
      <Container>
        <Row>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Efficient</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section">
      <Container>
        <Row>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Convenient</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section">
      <Container>
        <Row>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Responsive</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section">
      <Container>
        <Row>
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
          </Col>
          <Col>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Effective</h1>
            <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.</p>
            <Button className="mt-3" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <GetStarted/>
    <Line/>
  </Layout>
)

export default WhyUs
