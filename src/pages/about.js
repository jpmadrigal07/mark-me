import React, {useRef, useEffect} from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import SamplePerson from "../images/sample-person.png"
import GetStarted from "../components/get-started"
import AboutHeaderImage from "../images/about-header-image.png"
import ProcessPoint from "../images/process.png"

import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap"

const About = () => {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
  const myRef = useRef(null)

  useEffect(() => {
    if(window.location.href.includes("our-process")) {
      scrollToRef(myRef)
    }
  })
  
  return (
    <Layout>
      <SEO title="About" />
      <section className="about-header">
        <Container>
          <Row>
            <Col>
              <h2 style={{ textAlign: "center", fontWeight: "bold" }}>About</h2>
              <p style={{ fontSize: "12px", textAlign: "center" }}>
                We are capable on making a blah blah blah
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-section-second">
        <Container>
          <Row>
            <Col>
              <Image src={AboutHeaderImage} fluid />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1
                className="text-center"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                style={{
                  marginLeft: "150px",
                  marginRight: "150px",
                  fontWeight: "bold",
                }}
              >
                Exellency and Effciency.
              </h1>
              <p
                className="text-center"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                style={{ marginLeft: "150px", marginRight: "150px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
                fringilla condimentum sapien et bibendum. Integer interdum purus a
                porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
                faucibus massa. Etiam pharetra convallis velit, in malesuada nunc
                fermentum a. Ut nec justo finibus diam venenatis tincidunt vel sit
                amet sapien. Integer placerat orci neque, eu hendrerit magna
                luctus sit amet.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                nibh ipsum. Morbi gravida ornare erat, vitae viverra nibh dictum
                et. Vivamus turpis lectus sollicitudin id ultricies vitae,
                suscipit ac libero. Morbi gravida ornare erat, vitae viverra nibh
                dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae,
                suscipit ac libero.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="process-section" id="our-process" ref={myRef}>
        <Container>
          <Row data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
            <Col>
              <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
                The process is the most important thing in a business.
                <br />
                So, we are glad to share to you our process.
              </h2>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <Row
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Col style={{ paddingRight: "0px" }}>
                  <Image src={ProcessPoint} fluid />
                </Col>
                <Col xs={10} style={{ paddingLeft: "0px" }}>
                  <p>
                    Are you struggling to convert your website visitors into new
                    clients? Are you struggling to convert your website visitors
                    into new clients? Are you struggling to convert your website
                    visitors into new clients?
                  </p>
                </Col>
              </Row>
              <Row
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Col style={{ paddingRight: "0px" }}>
                  <Image src={ProcessPoint} fluid />
                </Col>
                <Col xs={10} style={{ paddingLeft: "0px" }}>
                  <p>
                    Are you struggling to convert your website visitors into new
                    clients? Are you struggling to convert your website visitors
                    into new clients? Are you struggling to convert your website
                    visitors into new clients?
                  </p>
                </Col>
              </Row>
              <Row
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Col style={{ paddingRight: "0px" }}>
                  <Image src={ProcessPoint} fluid />
                </Col>
                <Col xs={10} style={{ paddingLeft: "0px" }}>
                  <p>
                    Are you struggling to convert your website visitors into new
                    clients? Are you struggling to convert your website visitors
                    into new clients? Are you struggling to convert your website
                    visitors into new clients?
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Col style={{ paddingRight: "0px" }}>
                  <Image src={ProcessPoint} fluid />
                </Col>
                <Col xs={10} style={{ paddingLeft: "0px" }}>
                  <p>
                    Are you struggling to convert your website visitors into new
                    clients? Are you struggling to convert your website visitors
                    into new clients? Are you struggling to convert your website
                    visitors into new clients?
                  </p>
                </Col>
              </Row>
              <Row
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Col style={{ paddingRight: "0px" }}>
                  <Image src={ProcessPoint} fluid />
                </Col>
                <Col xs={10} style={{ paddingLeft: "0px" }}>
                  <p>
                    Are you struggling to convert your website visitors into new
                    clients? Are you struggling to convert your website visitors
                    into new clients? Are you struggling to convert your website
                    visitors into new clients?
                  </p>
                </Col>
              </Row>
              <Row
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Col style={{ paddingRight: "0px" }}>
                  <Image src={ProcessPoint} fluid />
                </Col>
                <Col xs={10} style={{ paddingLeft: "0px" }}>
                  <p>
                    Are you struggling to convert your website visitors into new
                    clients? Are you struggling to convert your website visitors
                    into new clients? Are you struggling to convert your website
                    visitors into new clients?
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="marksmen-overlay">
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
                The Marksmen.
              </h1>
              <p className="text-center" style={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit ame lorem ipsum dolor sit ame
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col className="person-overlay">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Rie Serrena
                </h3>
                <p className="text-center font-italic">Founder, CEO</p>
              </div>
            </Col>
            <Col className="person-overlay">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Rie Serrena
                </h3>
                <p className="text-center font-italic">Founder, CEO</p>
              </div>
            </Col>
            <Col className="person-overlay">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Rie Serrena
                </h3>
                <p className="text-center font-italic">Founder, CEO</p>
              </div>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col className="person-overlay">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Rie Serrena
                </h3>
                <p className="text-center font-italic">Founder, CEO</p>
              </div>
            </Col>
            <Col className="person-overlay">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Rie Serrena
                </h3>
                <p className="text-center font-italic">Founder, CEO</p>
              </div>
            </Col>
            <Col className="person-overlay">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Rie Serrena
                </h3>
                <p className="text-center font-italic">Founder, CEO</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <GetStarted />
      <Line />
    </Layout>
  )

}

export default About
