import React, { useEffect } from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import GetStarted from "../components/get-started"

import { Container, Row, Col, Image } from "react-bootstrap"

import ProcessPoint from "../images/who-we-are-image.png"

const ScheduleACall = () => {

  const calendlyScriptSrc = "https://assets.calendly.com/assets/external/widget.js"

  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", calendlyScriptSrc)
    head.appendChild(script)
  })

  return (
    <Layout>
      <SEO title="Schedule a Call" />
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
                Schedule a Call
              </h2>
              <p style={{ fontSize: "12px", textAlign: "center" }}>
                We are excited to talk with you
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="schedule-a-call-section">
        <Container>
          <Row
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
          >
            <Col>
              <div id="schedule_form">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/jp-madrigal07/15min?background_color=321e51&text_color=ffffff&primary_color=7ae0bb"
                  style={{ minWidth: "320px", height: "800px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Line />
    </Layout>
  )
}

export default ScheduleACall
