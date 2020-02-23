import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import Cart from "../images/cart.png"
import Like from "../images/like.png"
import Speech from "../images/speech-bubble.png"
import Happy from "../images/happy.png"
import Wallet from "../images/wallet.png"
import GetStarted from "../components/get-started"

import ProcessPoint from "../images/who-we-are-image.png"

import { Container, Row, Col, Image, Button } from "react-bootstrap"

const WhyUs = () => (
  <Layout>
    <SEO title="Why Us" />
    <section class="why-us-header">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              <Image
                src={ProcessPoint}
                fluid
                style={{ fontWeight: "bold" }}
              />{" "}
              Why Us
            </h2>
            <p style={{ fontSize: "12px", textAlign: "center" }}>
              Explanation why you need to choose us
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section-overlay-1">
      <Container>
        <Row>
          <Col className="text-center">
            <Image
              src={Wallet}
              fluid
              data-aos="fade-right"
              data-aos-delay="650"
              data-aos-duration="1000"
            />
          </Col>
          <Col>
            <h1
              style={{ fontWeight: "bold" }}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <Image src={ProcessPoint} fluid style={{ fontWeight: "bold" }} />{" "}
              Affordable
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
              fringilla condimentum sapien et bibendum. Integer interdum purus a
              porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
              faucibus massa. Etiam pharetra convallis velit, in malesuada nunc
              fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit
              amet sapien. Integer placerat orci neque, eu hendrerit magna
              luctus sit amet.
            </p>
            <Button
              className="mt-3"
              variant="primary"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section-overlay-2">
      <Container>
        <Row>
          <Col>
            <h1
              style={{ fontWeight: "bold" }}
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              <Image src={ProcessPoint} fluid style={{ fontWeight: "bold" }} />{" "}
              Efficient
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
              fringilla condimentum sapien et bibendum. Integer interdum purus a
              porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
              faucibus massa. Etiam pharetra convallis velit, in malesuada nunc
              fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit
              amet sapien. Integer placerat orci neque, eu hendrerit magna
              luctus sit amet.
            </p>
            <Button
              className="mt-3"
              variant="primary"
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              Learn More
            </Button>
          </Col>
          <Col className="text-center">
            <Image
              src={Cart}
              fluid
              data-aos="fade-right"
              data-aos-delay="650"
              data-aos-duration="1000"
            />
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section-overlay-1">
      <Container>
        <Row>
          <Col className="text-center">
            <Image
              src={Happy}
              fluid
              data-aos="fade-right"
              data-aos-delay="650"
              data-aos-duration="1000"
            />
          </Col>
          <Col>
            <h1
              style={{ fontWeight: "bold" }}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <Image src={ProcessPoint} fluid style={{ fontWeight: "bold" }} />{" "}
              Convenient
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
              fringilla condimentum sapien et bibendum. Integer interdum purus a
              porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
              faucibus massa. Etiam pharetra convallis velit, in malesuada nunc
              fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit
              amet sapien. Integer placerat orci neque, eu hendrerit magna
              luctus sit amet.
            </p>
            <Button
              className="mt-3"
              variant="primary"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section-overlay-2">
      <Container>
        <Row>
          <Col>
            <h1
              style={{ fontWeight: "bold" }}
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <Image src={ProcessPoint} fluid style={{ fontWeight: "bold" }} />{" "}
              Responsive
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
              fringilla condimentum sapien et bibendum. Integer interdum purus a
              porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
              faucibus massa. Etiam pharetra convallis velit, in malesuada nunc
              fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit
              amet sapien. Integer placerat orci neque, eu hendrerit magna
              luctus sit amet.
            </p>
            <Button
              className="mt-3"
              variant="primary"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Learn More
            </Button>
          </Col>
          <Col className="text-center">
            <Image
              src={Speech}
              fluid
              data-aos="fade-right"
              data-aos-delay="650"
              data-aos-duration="1000"
            />
          </Col>
        </Row>
      </Container>
    </section>
    <section class="why-us-section-overlay-1">
      <Container>
        <Row>
          <Col className="text-center">
            <Image
              src={Like}
              fluid
              data-aos="fade-right"
              data-aos-delay="650"
              data-aos-duration="1000"
            />
          </Col>
          <Col>
            <h1
              style={{ fontWeight: "bold" }}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <Image src={ProcessPoint} fluid style={{ fontWeight: "bold" }} />{" "}
              Effective
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
              fringilla condimentum sapien et bibendum. Integer interdum purus a
              porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
              faucibus massa. Etiam pharetra convallis velit, in malesuada nunc
              fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit
              amet sapien. Integer placerat orci neque, eu hendrerit magna
              luctus sit amet.
            </p>
            <Button
              className="mt-3"
              variant="primary"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
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

export default WhyUs
