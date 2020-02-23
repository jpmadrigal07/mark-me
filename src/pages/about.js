import React, { useRef, useEffect, useState } from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import SamplePerson from "../images/sample-person.png"
import GetStarted from "../components/get-started"
import AboutHeaderImage from "../images/about-header-image.png"

import { Container, Row, Col, Image, Button, Table } from "react-bootstrap"
import Loadable from '@loadable/component'

const LoadableChart = Loadable(() => import('react-apexcharts'))

const About = () => {

  const [isVideo, setIsVideo] = useState(true)

  const handleClickProcessTimeline = () => {
    if (isVideo) {
      setIsVideo(false)
    } else {
      setIsVideo(true)
    }
  }

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)
  const myRef = useRef(null)

  useEffect(() => {
    if (window.location.href.includes("our-process")) {
      scrollToRef(myRef)
    }
  })

  const series = [
    {
      name: "Tier I",
      data: [1, 5, 3, 2, 5, 3, 1],
    },
    {
      name: "Tier II",
      data: [1, 3, 3, 2, 5, 3, 1],
    },
    {
      name: "Tier III",
      data: [1, 2, 2, 2, 3, 2, 1],
    },
  ]

  const options = {
    chart: {
      type: "line",
      foreColor: "#FFFFFF",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1500,
        animateGradually: {
          enabled: true,
          delay: 500,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 500,
        },
      },
    },
    stroke: {
      width: [4, 4, 4],
    },
    markers: {
      size: 7,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    xaxis: {
      categories: [
        "Assessment",
        "Writing",
        "Sourcing",
        "Filming",
        "Editing",
        "Polishing",
        "Turnonver",
      ],
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "14px",
          fontFamily: "Poppins",
        },
      },
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: "#FFFFFF",
            fontSize: "14px",
          },
        },
        title: {
          text: "Days",
          style: {
            color: "#FFFFFF",
            fontSize: "18px",
            fontFamily: "Poppins",
          },
        },
      },
    ],
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: true,
      style: {
        fontSize: "12px",
        fontFamily: "Poppins",
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      y: {
        formatter: undefined,
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },

    colors: ["#9D9AAC", "#712086", "#7AE0BB"],
  }

  const ComponentWithChart = (options, series) => (
    <>
      <LoadableChart  
          options={options} 
          series={series} 
          type="line"
          height={500}
      />
    </>
  )

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
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
                style={{
                  marginLeft: "150px",
                  marginRight: "150px",
                  fontWeight: "bold",
                }}
              >
                The Digital Marksmen
              </h1>
              <p
                className="text-center"
                data-aos="fade-down"
                data-aos-delay="350"
                data-aos-duration="800"
                style={{ marginLeft: "150px", marginRight: "150px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nec mattis nisl. Praesent id elit eu leo dapibus tempor. Nullam
                fringilla condimentum sapien et bibendum. Integer interdum purus
                a porta lacinia. Morbi eros nisi, mollis quis nulla at, sodales
                faucibus massa. Etiam pharetra convallis velit, in malesuada
                nunc fermentum a. Ut nec justo finibus diam venenatis tincidunt
                vel sit amet sapien. Integer placerat orci neque, eu hendrerit
                magna luctus sit amet.
                <br />
                <br />
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

      <section className="process-section" id="our-process" ref={myRef}>
        <Container>
          <Row>
            <Col>
              <h2 
              style={{ textAlign: "center", fontWeight: "bold" }}
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="800">
                Process & Timeline.
              </h2>
              <p 
                className="text-center" style={{ fontSize: "12px" }}
                data-aos="fade-left"
                data-aos-delay="350"
                data-aos-duration="800">
                The process is the most important thing in a business.
              </p>
            </Col>
          </Row>
          <Row  className="pt-3 pb-3">
            <Col className="text-center">
              <Button
                variant="primary"
                className={isVideo ? 'selected-box' : ''}
                onClick={handleClickProcessTimeline}
              >
                Video
              </Button>
              <Button
                variant="primary"
                className={isVideo ? '' : 'selected-box'}
                onClick={handleClickProcessTimeline}
              >
                Photography
              </Button>
            </Col>
          </Row>
          <Row
            data-aos="fade-down"
            data-aos-delay="650"
            data-aos-duration="800"
            className="pb-5"
          >
            <Col>
              <div id="chart">
                {/* <ReactApexChart
                  options={options}
                  series={series}
                  type="line"
                  height={500}
                /> */}
                {ComponentWithChart(options, series)}
              </div>
            </Col>
          </Row>
          <Row
            data-aos="fade-down"
            data-aos-delay="950"
            data-aos-duration="800"
          >
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Allowance Time</th>
                    <th>Turn-around time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tier I - Setup</td>
                    <td>1</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Tier II - Standard</td>
                    <td>1</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Tier III - Specialized</td>
                    <td>2</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-5">
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

      <section class="marksmen-overlay">
        <Container>
          <Row
            className="pb-2"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <Col>
              <h1
                className="text-center"
                style={{ marginBottom: "0px", fontWeight: "bold" }}
              >
                The Digital Marksmen.
              </h1>
              <p className="text-center" style={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit ame lorem ipsum dolor sit ame
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col className="person-overlay" md={{ span: 4, offset: 4 }}>
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
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
            <Col className="person-overlay" md={{ span: 4, offset: 4 }}>
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Thea Legazpi
                </h3>
                <p className="text-center font-italic">Executive Project Manager</p>
              </div>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col className="person-overlay-small">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Justin Allarde
                </h3>
                <p className="text-center font-italic">Head Video Editor</p>
              </div>
            </Col>
            <Col className="person-overlay-small">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  Kristoffer Brazil
                </h3>
                <p className="text-center font-italic">Production Assistant</p>
              </div>
            </Col>
            <Col className="person-overlay-small">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  UP Lee
                </h3>
                <p className="text-center font-italic">Head Videographer</p>
              </div>
            </Col>
            <Col className="person-overlay-small">
              <Image
                src={SamplePerson}
                fluid
                className="marksmen-image"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              <div
                className="person-info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <h3
                  className="text-center"
                  style={{ fontWeight: "bold", marginBottom: "0px" }}
                >
                  MD Madrigal
                </h3>
                <p className="text-center font-italic">Director of Photography</p>
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
