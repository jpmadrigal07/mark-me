import React, { useLayoutEffect, useState } from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"
import WelcomeDesktop from "../components/welcome-desktop"
import WelcomeMobile from "../components/welcome-mobile"
import GetStarted from "../components/get-started"

import ProcessPoint from "../images/who-we-are-image.png"

import Expand from "react-expand-animated"

import { Container, Row, Col, Image, Button, Table } from "react-bootstrap"

const IndexPage = () => {
  const [isExpand, setExpand] = useState(false)

  const handleClickPricing = () => {
    if (isExpand) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  }

  const transitions = ["height", "opacity", "background"]

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

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener("resize", updateSize)
      updateSize()
      return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size
  }

  const [width, height] = useWindowSize()

  return (
    <Layout>
      <SEO title="Home" />
      {width > 992 ? <WelcomeDesktop /> : <WelcomeMobile />}
      <section className="who-we-are-overlay">
        <Container>
          <Row
            className="pb-5"
          >
            <Col>
              <h1
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <Image
                  src={ProcessPoint}
                  fluid
                  style={{ fontWeight: "bold" }}
                />{" "}
                <span style={{fontSize: '80px', position: 'absolute', top: '-20px'}}>W</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ho we are.
              </h1>
              <p
                data-aos="fade-down"
                data-aos-delay="350"
                data-aos-duration="800"
              >
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
          >
            <Col>
              <h1 
                className="text-right"
                data-aos="fade-right"
                data-aos-delay="650"
                data-aos-duration="800"
                >
                <Image
                  src={ProcessPoint}
                  fluid
                  style={{ fontWeight: "bold" }}
                />{" "}
                <span style={{fontSize: '80px', position: 'absolute', top: '-20px'}}>W</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hy work with us.
              </h1>
              <p 
              className="text-right"
              data-aos="fade-down"
              data-aos-delay="950"
              data-aos-duration="800">
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
      <section className="services-overlay">
        <Container>
          <Row
            className="pb-2"
          >
            <Col>
              <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                              <Image
                src={ProcessPoint}
                fluid
                style={{ fontWeight: "bold" }}
              />{" "}
                Our Services.
              </h1>
              <p 
              className="text-center" style={{ fontSize: "12px" }}
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="800"
              >
                We specialized in these two field
              </p>
            </Col>
          </Row>

          <Row className="pt-2 pb-5">
            <Col
              xs={12}
              md={6}
              lg={6}
              data-aos="fade-left"
              data-aos-delay="650"
              data-aos-duration="800"
            >
              <Row>
                <Col>
                  <h3 className="text-center">Video</h3>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
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
                </Col>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vitae metus nec diam porttitor egestas eget nec risus.
                    Ut eget leo velit. Quisque vestibulum, mi at imperdiet
                    imperdiet, nisl sapien ultricies lacus, a pellentesque
                    mauris massa nec libero.
                  </p>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <Button
                    className="ml-2 wiggle-button"
                    variant="primary"
                    data-aos="fade-down"
                    data-aos-delay="650"
                    data-aos-duration="800"
                    onClick={handleClickOurServices}
                  >
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={6}
              data-aos="fade-right"
              data-aos-delay="650"
              data-aos-duration="800"
            >
              <Row>
                <Col>
                  <h3 className="text-center">Photography</h3>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
                  <Image
                    src="https://hdwallsource.com/img/2016/11/chanel-perfume-advertisement-wallpaper-hd-54427-56160-hd-wallpapers.jpg"
                    fluid
                  />
                </Col>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vitae metus nec diam porttitor egestas eget nec risus.
                    Ut eget leo velit. Quisque vestibulum, mi at imperdiet
                    imperdiet, nisl sapien ultricies lacus, a pellentesque
                    mauris massa nec libero.
                  </p>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <Button
                    className="ml-2 wiggle-button"
                    variant="primary"
                    data-aos="fade-down"
                    data-aos-delay="650"
                    data-aos-duration="800"
                    onClick={handleClickOurServices}
                  >
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pricing-overlay">
        <Container>
          <Row
            className="pb-2"
          >
            <Col>
              <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                              <Image
                src={ProcessPoint}
                fluid
                style={{ fontWeight: "bold" }}
              />{" "}
                Pricing & Tiers.
              </h1>
              <p 
              className="text-center" style={{ fontSize: "12px" }}
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="800">
                Great value at an affordable cost
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col style={{ padding: "0px" }}>
              <div
                className="pricing"
                data-aos="fade-left"
                data-aos-delay="650"
                data-aos-duration="800"
                style={{ marginRight: "15px" }}
              >
                <div class="ribbon ribbon-top-left">
                  <span>BEST VALUE</span>
                </div>
                <h2 className="font-weight-bold text-center">Video</h2>
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
            <Col style={{ padding: "0px" }}>
              <div
                className="pricing"
                data-aos="fade-right"
                data-aos-delay="650"
                data-aos-duration="800"
                style={{ marginLeft: "15px" }}
              >
                <div class="ribbon ribbon-top-right">
                  <span>BEST VALUE</span>
                </div>
                <h2 className="font-weight-bold text-center">Photography</h2>
                <h2
                  className="font-weight-bolder text-center"
                  style={{ marginBottom: "0px" }}
                >
                  $15
                </h2>
                <p className="text-center">per image</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at nibh ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis at nibh ipsum.
                </p>
              </div>
            </Col>
          </Row>
          <Expand open={isExpand} duration={1000} transitions={transitions}>
            <Row className="pb-5">
              <Col>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Tier I</th>
                      <th>Tier II</th>
                      <th>Tier III</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sam</td>
                      <td>Sam</td>
                      <td>Sam</td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Sam</td>
                      <td>Sam</td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Sam</td>
                      <td>Sam</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Tier I</th>
                      <th>Tier II</th>
                      <th>Tier III</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sam</td>
                      <td>Sam</td>
                      <td>Sam</td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Sam</td>
                      <td>Sam</td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Sam</td>
                      <td>Sam</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Expand>
          <Row>
            <Col className="text-center">
              <Button
                className="ml-2"
                variant="primary"
                data-aos="fade-down"
                data-aos-delay="650"
                data-aos-duration="800"
                onClick={handleClickPricing}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="process-overlay">
        <Container>
          <Row>
            <Col>
              <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                 <Image
                src={ProcessPoint}
                fluid
                style={{ fontWeight: "bold" }}
              />{" "}
                Our Process.
              </h1>
              <p 
              className="text-center" style={{ fontSize: "12px" }}
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="800">
                Great value at an affordable cost
              </p>
            </Col>
          </Row>
          <Row className="pt-5 pb-2">
            <Col>
              <div className="timeline-count desktop">
                <div className="row">
                  <div className="timeline-box col-md-4 col-lg-4 col-xs-4">
                    <div className="age-item">
                      <p>Step 1</p>
                    </div>
                    <div className="timeline-line active">
                      <div className="bullet"></div>
                    </div>
                    <div className="vertical-line">
                      <div className="wrapper-line"></div>
                    </div>
                    <div
                      className="timeline-detail"
                      data-aos="fade-down"
                      data-aos-delay="50"
                      data-aos-duration="800"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>

                  <div className="timeline-box col-md-4 col-lg-4 col-xs-4">
                    <div className="age-item">
                      <p>Step 2</p>
                    </div>
                    <div className="timeline-line active">
                      <div className="bullet"></div>
                    </div>
                    <div className="vertical-line">
                      <div className="wrapper-line"></div>
                    </div>
                    <div
                      className="timeline-detail"
                      data-aos="fade-down"
                      data-aos-delay="350"
                      data-aos-duration="800"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>

                  <div className="timeline-box col-md-4 col-lg-4 col-xs-4">
                    <div className="age-item">
                      <p>Step 3</p>
                    </div>
                    <div className="timeline-line active">
                      <div className="bullet"></div>
                    </div>
                    <div className="vertical-line">
                      <div className="wrapper-line"></div>
                    </div>
                    <div
                      className="timeline-detail"
                      data-aos="fade-down"
                      data-aos-delay="700"
                      data-aos-duration="800"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="timeline-box col-md-4 col-lg-4 col-xs-4">
                    <div className="age-item">
                      <p>Step 4</p>
                    </div>
                    <div className="timeline-line active">
                      <div className="bullet"></div>
                    </div>
                    <div className="vertical-line">
                      <div className="wrapper-line"></div>
                    </div>
                    <div
                      className="timeline-detail"
                      data-aos="fade-down"
                      data-aos-delay="1050"
                      data-aos-duration="800"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>

                  <div className="timeline-box col-md-4 col-lg-4 col-xs-4">
                    <div className="age-item">
                      <p>Step 5</p>
                    </div>
                    <div className="timeline-line active">
                      <div className="bullet"></div>
                    </div>
                    <div className="vertical-line">
                      <div className="wrapper-line"></div>
                    </div>
                    <div
                      className="timeline-detail"
                      data-aos="fade-down"
                      data-aos-delay="1350"
                      data-aos-duration="800"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>

                  <div className="timeline-box col-md-4 col-lg-4 col-xs-4">
                    <div className="age-item">
                      <p>Step 6</p>
                    </div>
                    <div className="timeline-line active">
                      <div className="bullet"></div>
                    </div>
                    <div className="vertical-line">
                      <div className="wrapper-line"></div>
                    </div>
                    <div
                      className="timeline-detail"
                      data-aos="fade-down"
                      data-aos-delay="1700"
                      data-aos-duration="800"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                className="mt-3 ml-2 wiggle-button"
                variant="primary"
                data-aos="fade-down"
                data-aos-delay="1550"
                data-aos-duration="800"
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
