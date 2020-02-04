import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import Photography2 from '../images/photography.png'
import GetStarted from "../components/get-started"
import AboutHeaderImage from '../images/about-header-image.png'

import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="about-header">
      <Container>
        <Row>
          <Col>
            <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>About</h2>
            <p style={{fontSize: '12px', textAlign: 'center'}}>We are capable on making a blah blah blah</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="about-section-second">
      <Container>
        <Row>
          <Col>
            <Image src={AboutHeaderImage} fluid/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="text-center" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" style={{marginLeft: '150px', marginRight: '150px'}}>Exellency and Effciency</h1>
            <p className="text-center" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" style={{marginLeft: '150px', marginRight: '150px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam fringilla condimentum sapien et bibendum. Integer interdum purus a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales faucibus massa. Etiam pharetra convallis velit, in malesuada nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit amet sapien. Integer placerat orci neque, eu hendrerit magna luctus sit amet.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero.</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="our-services-section">
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

export default About
