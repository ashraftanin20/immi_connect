import React from 'react'
import { About, Header, Footer, Features, Blog } from "../index";
import { CTA, Navbar } from "../../components/index";

import "../../App.css";
import "../../index.css";
import Volunteers from '../volunteer/Volunteers';
function PublicLayout() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
      <About />
      <Features />
      <CTA />
      <Volunteers />
      <Blog />
      <Footer />
  </div>
  )
}

export default PublicLayout