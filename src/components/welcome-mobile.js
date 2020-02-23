import React, { useState } from "react"
import {
  Carousel,
  Row,
  Col,
  Button,
  Container,
} from "react-bootstrap"

const WelcomeMobile = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.location = "/schedule-a-call"
    }
  }

  return (
    <div className="bg-overlay">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className="mb-3">
            <div
              data-aos="fade-right"
              data-aos-delay="1500"
              data-aos-duration="1000"
            >
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  title="Welcome"
                  src="https://player.vimeo.com/video/233586784?autoplay=1&color=7AE0BB&title=0&byline=0&portrait=0"
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
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h1
              className="mt-3"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              We are <span style={{ color: "#7AE0BB" }}>MarkMe</span>
            </h1>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <Carousel.Item>
                <p style={{ height: "100px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ante mi, ullamcorper vel velit sed, dictum rhoncus
                  lacus. Nunc bibendum porta augue, et aliquet purus pretium a.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p style={{ height: "100px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ante mi, ullamcorper vel velit sed, dictum rhoncus
                  lacus. Nunc bibendum porta augue, et aliquet purus pretium a.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p style={{ height: "100px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ante mi, ullamcorper vel velit sed, dictum rhoncus
                  lacus. Nunc bibendum porta augue, et aliquet purus pretium a.
                </p>
              </Carousel.Item>
            </Carousel>
            <Button
              onClick={handleClick}
              variant="primary"
              className="welcome-button wiggle-button"
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Claim free brand assessment
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WelcomeMobile
