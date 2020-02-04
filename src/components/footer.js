import React from "react"
import LogoLight from "../images/markme-logo-light.png"
import { Container, Row, Col, Image, Nav } from "react-bootstrap"

export default function footer() {
  return (
    <Container>
      <Row className="pt-5 pb-2">
        <Col>
          <Image src={LogoLight} fluid className="mx-auto d-block" />
        </Col>
      </Row>
      <Row className="pt-3 pb-4">
        <Col>
          <Nav style={{ justifyContent: "center" }}>
            <Nav.Link className="footer-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="footer-link" href="/why-us">
              Why Us
            </Nav.Link>
            <Nav.Link className="footer-link" href="/our-services">
              Our Services
            </Nav.Link>
            <Nav.Link className="footer-link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="footer-link" href="/how-to">
              How to
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col className="text-center">
          <p style={{ fontSize: "12px" }}>
            © {new Date().getFullYear()} MarkMe. All Rights Reserved. |{" "}
            <a href="#home" className="anchor-link">
              Site Map
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
