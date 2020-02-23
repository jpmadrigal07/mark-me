import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import GetStarted from "../components/get-started"

import ProcessPoint from "../images/who-we-are-image.png"


import { Container, Row, Col, Image, Button } from "react-bootstrap"

const OurServices = () => (
  <Layout>
    <SEO title="Our Services" />
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
              Our Services
            </h2>
            <p style={{ fontSize: "12px", textAlign: "center" }}>
              We specialized in these two field
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="our-services-section">
      <Container>
        <Row>
          <Col
            xs={12}
            md={12}
            lg={12}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <h1 className="text-center">Video</h1>
          </Col>
        </Row>
        <Row className="pt-2 pb-5">
          <Col
            xs={12}
            md={4}
            lg={4}
            data-aos="fade-down"
            data-aos-delay="350"
            data-aos-duration="800"
          >
            <Row className="pt-3">
              <Col>
                <div className="services-box">
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <iframe
                      title="Sample Video"
                      src="https://player.vimeo.com/video/128675400?color=7AE0BB&title=0&byline=0&portrait=0"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="services-video">
                    <h1
                      style={{ fontWeight: "bold", color: "#7AE0BB" }}
                      className="text-center"
                    >
                      $30
                    </h1>
                    <h3 className="text-center">Setup</h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae metus nec diam porttitor egestas eget nec
                      risus. Ut eget leo velit. Quisque vestibulum, mi at
                      imperdiet imperdiet, nisl sapien ultricies lacus, a
                      pellentesque mauris massa nec libero.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={4}
            data-aos="fade-down"
            data-aos-delay="650"
            data-aos-duration="800"
          >
            <Row className="pt-3">
              <Col>
                <div className="services-box">
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <iframe
                      title="Sample Video"
                      src="https://player.vimeo.com/video/128675400?color=7AE0BB&title=0&byline=0&portrait=0"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="services-video">
                    <h1
                      style={{ fontWeight: "bold", color: "#7AE0BB" }}
                      className="text-center"
                    >
                      $30
                    </h1>
                    <h3 className="text-center">Standard</h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae metus nec diam porttitor egestas eget nec
                      risus. Ut eget leo velit. Quisque vestibulum, mi at
                      imperdiet imperdiet, nisl sapien ultricies lacus, a
                      pellentesque mauris massa nec libero.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={4}
            data-aos="fade-down"
            data-aos-delay="950"
            data-aos-duration="800"
          >
            <Row className="pt-3">
              <Col>
                <div className="services-box">
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <iframe
                      title="Sample Video"
                      src="https://player.vimeo.com/video/128675400?color=7AE0BB&title=0&byline=0&portrait=0"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="services-video">
                    <h1
                      style={{ fontWeight: "bold", color: "#7AE0BB" }}
                      className="text-center"
                    >
                      $30
                    </h1>
                    <h3 className="text-center">Specialized</h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae metus nec diam porttitor egestas eget nec
                      risus. Ut eget leo velit. Quisque vestibulum, mi at
                      imperdiet imperdiet, nisl sapien ultricies lacus, a
                      pellentesque mauris massa nec libero.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
            <Col className="text-center mt-3">
              <Button
                variant="primary"
                className="wiggle-button"
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-duration="800"
              >
                Claim free brand assessment
              </Button>
            </Col>
          </Row>
      </Container>
    </section>
    <section class="our-services-section-2">
      <Container>
        <Row>
          <Col
            xs={12}
            md={12}
            lg={12}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <h1 className="text-center">Photography</h1>
          </Col>
        </Row>
        <Row className="pt-2 pb-5">
          <Col
            xs={12}
            md={4}
            lg={4}
            data-aos="fade-down"
            data-aos-delay="350"
            data-aos-duration="800"
          >
            <Row className="pt-3">
              <Col>
                <div className="services-box">
                  <Image
                    src="https://hdwallsource.com/img/2016/11/chanel-perfume-advertisement-wallpaper-hd-54427-56160-hd-wallpapers.jpg"
                    fluid
                  />
                  <div className="services-video">
                    <h1
                      style={{ fontWeight: "bold", color: "#7AE0BB" }}
                      className="text-center"
                    >
                      $30
                    </h1>
                    <h3 className="text-center">Setup</h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae metus nec diam porttitor egestas eget nec
                      risus. Ut eget leo velit. Quisque vestibulum, mi at
                      imperdiet imperdiet, nisl sapien ultricies lacus, a
                      pellentesque mauris massa nec libero.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={4}
            data-aos="fade-down"
            data-aos-delay="650"
            data-aos-duration="800"
          >
            <Row className="pt-3">
              <Col>
                <div className="services-box">
                  <Image
                    src="https://hdwallsource.com/img/2016/11/chanel-perfume-advertisement-wallpaper-hd-54427-56160-hd-wallpapers.jpg"
                    fluid
                  />
                  <div className="services-video">
                    <h1
                      style={{ fontWeight: "bold", color: "#7AE0BB" }}
                      className="text-center"
                    >
                      $30
                    </h1>
                    <h3 className="text-center">Standard</h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae metus nec diam porttitor egestas eget nec
                      risus. Ut eget leo velit. Quisque vestibulum, mi at
                      imperdiet imperdiet, nisl sapien ultricies lacus, a
                      pellentesque mauris massa nec libero.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={4}
            data-aos="fade-down"
            data-aos-delay="950"
            data-aos-duration="800"
          >
            <Row className="pt-3">
              <Col>
                <div className="services-box">
                  <Image
                    src="https://hdwallsource.com/img/2016/11/chanel-perfume-advertisement-wallpaper-hd-54427-56160-hd-wallpapers.jpg"
                    fluid
                  />
                  <div className="services-video">
                    <h1
                      style={{ fontWeight: "bold", color: "#7AE0BB" }}
                      className="text-center"
                    >
                      $30
                    </h1>
                    <h3 className="text-center">Specialized</h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae metus nec diam porttitor egestas eget nec
                      risus. Ut eget leo velit. Quisque vestibulum, mi at
                      imperdiet imperdiet, nisl sapien ultricies lacus, a
                      pellentesque mauris massa nec libero.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
            <Col className="text-center mt-3">
              <Button
                variant="primary"
                className="wiggle-button"
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-duration="800"
              >
                Claim free brand assessment
              </Button>
            </Col>
          </Row>
      </Container>
    </section>
    <GetStarted />
    <Line />
  </Layout>
)

export default OurServices
