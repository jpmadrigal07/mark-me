import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import GetStarted from "../components/get-started"

import Videos from '../images/videos-services.png'
import Photography from '../images/photography-services.png'
import Photography2 from '../images/photography.png'

import { Container, Row, Col, Image, Button } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <section class="who-we-are-overlay">
      <Container>
        <Row className="pb-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <h1>Who we are.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat,
            vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi
            gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae,
            suscipit ac libero.</p>
          </Col>
        </Row>
        <Row className="pt-5" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <h1 className="text-right">Why work with us.</h1>
            <p className="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat,
            vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi
            gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae,
            suscipit ac libero.</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="services-overlay">
      <Container>
        <Row className="pb-2" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <h1 className="text-center" style={{marginBottom: '0px' }}>Services.</h1>
            <p className="text-center" style={{fontSize: '12px' }}>We specialized in these two field</p>
          </Col>
        </Row>
        <Row className="pt-2 pb-5">
          <Col>
            <Image src={Videos} fluid className="services-image" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" />
          </Col>
          <Col>
            <Image src={Photography} fluid className="services-image" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="ml-2" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="pricing-overlay">
      <Container>
        <Row className="pb-2" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <h1 className="text-center" style={{marginBottom: '0px' }}>Pricing.</h1>
            <p className="text-center" style={{fontSize: '12px' }}>Great value at an affordable cost</p>
          </Col>
        </Row>
        <Row className="pt-2 pb-5">
          <Col>
            <div className="pricing active" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" >
              <h2 className="font-weight-bold text-center">Pro</h2>
              <h2 className="font-weight-bolder text-center" style={{ marginBottom: '0px' }}>$25</h2>
              <p className="text-center">per video</p>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum.</p>
            </div>
          </Col>
          <Col>
            <div className="pricing"  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" >
              <h2 className="font-weight-bold text-center">Starter</h2>
              <h2 className="font-weight-bolder text-center" style={{ marginBottom: '0px' }}>$15</h2>
              <p className="text-center">per video</p>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="ml-2" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-overlay">
      <Container>
        <Row className="pb-2" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <Col>
            <h1 className="text-center" style={{marginBottom: '0px' }}>Why Us.</h1>
            <p className="text-center" style={{fontSize: '12px' }}>Explanation why you need to choose us</p>
          </Col>
        </Row>
        <Row className="pt-2 pb-5">
        <Col data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi gravida ornare erat, vitae viverra nibh dictum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi gravida ornare erat, vitae viverra nibh dictum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi gravida ornare erat, vitae viverra nibh dictum et.</p>
          </Col>
          <Col data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" >
            <Image src={Photography2} fluid  />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="text-center">
            <Button className="ml-2" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="process-overlay">
      <Container>
        <Row className="pt-5 pb-2">
          <Col>
            <Image src={Photography2} fluid  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
            <Col className="text-center">
              <Button className="mt-3 ml-2" variant="primary" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Learn More</Button>
            </Col>
          </Col>
          <Col>
            <h1 style={{marginBottom: '0px' }} data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">This is the process of our business</h1>
            <Row className="pt-3" data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
              <Col><span className="process-number-one">1</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></Col>
            </Row>
            <Row className="pt-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
              <Col><span className="process-number">2</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></Col>
            </Row>
            <Row className="pt-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
              <Col><span className="process-number">3</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></Col>
            </Row>
            <Row className="pt-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
              <Col><span className="process-number">4</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></Col>
            </Row>
            <Row className="pt-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
              <Col><span className="process-number">5</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <GetStarted/>
    <Line/>

  </Layout>
)

export default IndexPage
