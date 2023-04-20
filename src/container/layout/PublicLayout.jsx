import React from 'react'
import { About, Header, Footer, Possibility, Features, Blog } from "../index";
import { Article, Brand, CTA, Feature, Navbar } from "../../components/index";

import "../../App.css";
import "../../index.css";
function PublicLayout() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
      <Brand />
      <About />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
  </div>
  )
}

export default PublicLayout