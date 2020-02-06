import React, { useState } from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import GetStarted from "../components/get-started"

import Videos from "../images/videos-services.png"
import Photography from "../images/photography-services.png"
import Photography2 from "../images/photography.png"
import ProcessPoint from "../images/who-we-are-image.png"

import PhotoIcon from "../images/photo-icon.png"
import CameraIcon from "../images/camera-icon.png"

import Video1 from "../images/video-1.png"
import Video2 from "../images/video-2.png"
import Video3 from "../images/video-3.png"

import Image1 from "../images/image-1.png"
import Image2 from "../images/image-2.png"
import Image3 from "../images/image-3.png"

import Expand from "react-expand-animated";

import { Container, Row, Col, Image, Button } from "react-bootstrap"

const IndexPage = () => {

  const [isExpand, setExpand] = useState(false)

  const handleClickPricing = () => {
    if(isExpand) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  }

  const transitions = ["height", "opacity", "background"]

  const handleClickWhyUs = () => {
    if (typeof window !== "undefined") {
      window.location = "/why-us"
    }
  }

  const handleClickOurServices = () => {
    if (typeof window !== "undefined") {
      window.location = "/our-services"
    }
  }

  const handleClickOurProcess = () => {
    if (typeof window !== "undefined") {
      window.location = "/about#our-process"
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Welcome />
      <section class="who-we-are-overlay">
        <Container>
          <Row
            className="pb-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Col>
              <h1>
                <Image
                  src={ProcessPoint}
                  fluid
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  style={{ fontWeight: "bold" }}
                />{" "}
                Who we are.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum
                et. Vivamus turpis lectus sollicitudin id ultricies vitae,
                suscipit ac libero. Morbi gravida ornare erat, vitae viverra
                nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies
                vitae, suscipit ac libero.
              </p>
            </Col>
          </Row>
          <Row
            className="pt-5"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Col>
              <h1 className="text-right">
                <Image
                  src={ProcessPoint}
                  fluid
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  style={{ fontWeight: "bold" }}
                />{" "}
                Why work with us.
              </h1>
              <p className="text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum
                et. Vivamus turpis lectus sollicitudin id ultricies vitae,
                suscipit ac libero. Morbi gravida ornare erat, vitae viverra
                nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies
                vitae, suscipit ac libero.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="services-overlay">
        <Container>
          <Row
            className="pb-2"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Col>
              <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
              >
                Our Services.
              </h1>
              <p className="text-center" style={{ fontSize: "12px" }}>
                We specialized in these two field
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col>
              <Image
                src={CameraIcon}
                fluid
                className="services-image"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <Row className="pb-3">
                <Col>
                  <h3 className="text-center">Video Production</h3>
                </Col>
              </Row>
              <Row
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <Col>
                  <Image src={Video1} fluid />
                </Col>
                <Col>
                  <Image src={Video2} fluid />
                </Col>
                <Col>
                  <Image src={Video3} fluid />
                </Col>
              </Row>
            </Col>
            <Col>
              <Image
                src={PhotoIcon}
                fluid
                className="services-image"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <Row className="pb-3">
                <Col>
                  <h3 className="text-center">Photography</h3>
                </Col>
              </Row>
              <Row
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <Col>
                  <Image src={Image1} fluid />
                </Col>
                <Col>
                  <Image src={Image2} fluid />
                </Col>
                <Col>
                  <Image src={Image3} fluid />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                className="ml-2"
                variant="primary"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                onClick={handleClickOurServices}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="pricing-overlay">
        <Container>
          <Row
            className="pb-2"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Col>
              <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
              >
                Pricing.
              </h1>
              <p className="text-center" style={{ fontSize: "12px" }}>
                Great value at an affordable cost
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col>
              <div
                className="pricing active"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h2 className="font-weight-bold text-center">Pro</h2>
                <h2
                  className="font-weight-bolder text-center"
                  style={{ marginBottom: "0px" }}
                >
                  $25
                </h2>
                <p className="text-center">per video</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at nibh ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis at nibh ipsum.
                </p>
              </div>
            </Col>
            <Col>
              <div
                className="pricing"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h2 className="font-weight-bold text-center">Starter</h2>
                <h2
                  className="font-weight-bolder text-center"
                  style={{ marginBottom: "0px" }}
                >
                  $15
                </h2>
                <p className="text-center">per video</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at nibh ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis at nibh ipsum.
                </p>
              </div>
            </Col>
          </Row>
          <Expand
            open={isExpand}
            duration={1000}
            transitions={transitions}
          >
           <Row className="pb-5">
            <Col>
              <div
                className="pricing active"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h2 className="font-weight-bold text-center">Pro</h2>
                <h2
                  className="font-weight-bolder text-center"
                  style={{ marginBottom: "0px" }}
                >
                  $25
                </h2>
                <p className="text-center">per video</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at nibh ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis at nibh ipsum.
                </p>
              </div>
            </Col>
            <Col>
              <div
                className="pricing"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h2 className="font-weight-bold text-center">Starter</h2>
                <h2
                  className="font-weight-bolder text-center"
                  style={{ marginBottom: "0px" }}
                >
                  $15
                </h2>
                <p className="text-center">per video</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at nibh ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis at nibh ipsum.
                </p>
              </div>
            </Col>
          </Row>
          </Expand>
          <Row>
            <Col className="text-center">
              <Button
                className="ml-2"
                variant="primary"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                onClick={handleClickPricing}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="why-us-overlay">
        <Container>
          <Row
            className="pb-2"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Col>
              <h1
                className="text-center"
                style={{
                  marginBottom: "0px",
                  fontWeight: "bold",
                  fontSize: "70px",
                }}
              >
                Why Us?
              </h1>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum
                et. Vivamus turpis lectus sollicitudin id ultricies vitae,
                suscipit ac libero. Morbi gravida ornare erat, vitae viverra
                nibh dictum et. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis at nibh ipsum.{" "}
                <a href="/why-us" className="anchor-link">
                  Learn More.
                </a>
              </p>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="text-center">
              <Button
                className="ml-2"
                variant="primary"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                onClick={handleClickWhyUs}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="process-overlay">
        <Container>
          <Row>
            <Col>
            <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Our Process.
              </h1>
            </Col>
          </Row>
          <Row className="pt-5 pb-2">
            <Col>
              <Image
                src={Video3}
                fluid
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
            </Col>
            <Col>
              <Row
                className="pt-5"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <Col>
                  <span className="process-number-one">1</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </Col>
              </Row>
              <Row
                className="pt-4"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <Col>
                  <span className="process-number">2</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </Col>
              </Row>
              <Row
                className="pt-4"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <Col>
                  <span className="process-number">3</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </Col>
              </Row>
              <Row
                className="pt-4"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <Col>
                  <span className="process-number">4</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </Col>
              </Row>
              <Row
                className="pt-4"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <Col>
                  <span className="process-number">5</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                className="mt-5 ml-2"
                variant="primary"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                onClick={handleClickOurProcess}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <GetStarted />
      <Line />
    </Layout>
  )
}

export default IndexPage
