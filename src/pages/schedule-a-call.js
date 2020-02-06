import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import Photography2 from "../images/photography.png"
import GetStarted from "../components/get-started"

import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap"

const ScheduleACall = () => (
  <Layout>
    <SEO title="Schedule a Call" />
    <section class="why-us-header">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
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
        <Row data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
          <Col>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/jp-madrigal07/15min?background_color=321e51&text_color=ffffff&primary_color=7ae0bb"
              style={{ minWidth: "320px", height: "800px", overflow: "hidden" }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
    <GetStarted />
    <Line />
  </Layout>
)

export default ScheduleACall
