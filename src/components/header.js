import {
  Navbar,
  Nav,
  Button,
  Container,
  Image,
} from "react-bootstrap"
import React, { useState, useEffect } from "react"
import throttle from "lodash.throttle"
import LogoLight from '../images/markme-logo-light.png'
import LogoDark from '../images/markme-logo-dark.png'

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(true)

  const handleScroll = throttle(() => {
    const currentScrollPosition = window.pageYOffset

    if (currentScrollPosition === 0) {
      setIsOnTop(true)
    } else {
      setIsOnTop(false)
    }
  }, 300)

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <Navbar className={isOnTop ? "" : "navbar-custom"} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={isOnTop ? LogoLight : LogoDark} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className={isOnTop ? "text-light" : ""}>Home</Nav.Link>
            <Nav.Link href="#link" className={isOnTop ? "text-light" : ""}>Why Us</Nav.Link>
            <Nav.Link href="#link" className={isOnTop ? "text-light" : ""}>Our Services</Nav.Link>
            <Nav.Link href="#link" className={isOnTop ? "text-light" : ""}>About</Nav.Link>
            <Nav.Link href="#link" className={isOnTop ? "text-light" : ""}>How to</Nav.Link>
            <Button className="ml-2 wiggle-button" variant="primary">Schedule a call</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
