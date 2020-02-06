import React from "react"

import Layout from "../components/layout"
import Line from "../components/hr"
import SEO from "../components/seo"

import Photography2 from "../images/photography.png"
import GetStarted from "../components/get-started"

import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Accordion,
  Card,
} from "react-bootstrap"

const HowTo = () => (
  <Layout>
    <SEO title="How To" />
    <section class="why-us-header">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>How To</h2>
            <p style={{ fontSize: "12px", textAlign: "center" }}>
              Frequently asked questions
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="how-to-section">
      <Container>
        <Row>
          <Col>
            <Accordion
              data-aos="zoom-out-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Why should I choose to work with Demo Duck?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    We make videos for business that marry one-of-a-kind
                    creative with carefully crafted messaging. Our videos tell
                    stories, educate customers, simplify the complex, and
                    humanize brands. We’ve produced content for everyone from
                    Founders to the Fortune 500. And we’re not just about clever
                    concepts or stylish design. From the first call to the final
                    file, our videos are built to meet your business objectives
                    and deliver measurable results. Still not convinced? Here
                    are 8 good reasons to work with us.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    What types of videos do we offer?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    If it’s video, we can probably do it. Having a successful
                    online video strategy means producing a lot of different
                    types of video content, which is why we produce branding
                    videos, TV spots, explainer videos, screencast tutorials,
                    company story videos, customer testimonials, demo videos,
                    and more. We specialize in techniques including 2D and 3D
                    animation, motion graphics, cel animation, stop motion, live
                    action, papercraft, and screencasting. We’re also happy to
                    try puppetry, claymation, and whatever else you might be in
                    to.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    How much does a typical video cost?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    As usual, it depends. The cost is primarily related to the
                    length, style, and complexity of the video. To give you a
                    general idea though, most animated videos run between
                    $16,000-25,000 depending on length, complexity, and style.
                    For live action videos, the price is based on the number of
                    shoot days, talent, and locations required. Customer and
                    Company Stories tend to be in the $10,000-15,000 range while
                    scripted videos start around $30,000, but are more often in
                    the $30,000-45,000 range. For an accurate estimate, please
                    get in touch and tell us more about your project.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    What’s the typical process?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Once we’ve completed several rounds of intense, nail biting
                    negotiations (kidding!), we’ll want to learn everything we
                    can about you and your business. During this time you’ll
                    complete our creative brief and spend some time with our
                    team on a discovery call. After that, the entire Demo Duck
                    team will get together to brainstorm some creative ways to
                    present your story. Typically this results in 2-3 concepts
                    for you to choose from, but sometimes we’ll come to you with
                    just one killer idea. From there we’ll write a script and
                    follow it up with a storyboard. Depending on the type of
                    project – animation or live action – we’ll dive into
                    production and polish things off with music and sound
                    design.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    How long does it take?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    It depends. A good video takes time to produce, and we’re
                    not one for cutting corners or sacrificing quality. On
                    average you can expect 6-10 weeks for production time, which
                    does not include the time required for your feedback and
                    revisions, which can add an additional 3-4 weeks (on
                    average), depending on the quantity and complexity of your
                    requests, as well as your feedback turnaround time. Every
                    project is unique, so the complexity will impact the time
                    required for production. The rest depends on how quickly
                    you, the client, provide feedback, how many revisions are
                    requested, and how complex the changes are.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    How do feedback and revisions work?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    Creating a video is a team effort and your collaboration is
                    key to producing a successful one. We look at our clients as
                    the content experts, and in turn ask them to trust us as the
                    creative experts. At each step in the process you’ll have
                    time for consolidated feedback through our formal revision
                    policy.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
    <GetStarted />
    <Line />
  </Layout>
)

export default HowTo
