import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Main from "../components/Main";
import Footer from "../components/Footer";

export class WireframeSatu extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props} />
        <Jumbotron />
        <Main />
        <Footer />
      </>
    );
  }
}

export default WireframeSatu;
