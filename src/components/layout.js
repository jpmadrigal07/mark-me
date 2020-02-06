/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './layout.css'

import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import AOS from 'aos';
import 'aos/dist/aos.css';

if (typeof window !== "undefined" && window.document) {
  AOS.init();
}

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Helmet>
      <Header />
        <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
