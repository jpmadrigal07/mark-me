import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Welcome from "../components/welcome"

import {
  Container
} from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome/>
    <Welcome/>
  </Layout>
)

export default IndexPage
