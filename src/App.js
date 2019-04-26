import React, { Component } from "react";
import Header from "./components/Header_Footer/Header";
import Feature from "./components/Features";
import VenuInfo from "./components/Venuinfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/Header_Footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Element name="2">
          <Feature />
        </Element>
        <Element name="3">
          <VenuInfo />
        </Element>

        <Element name="4">
          <Highlights />
        </Element>
        <Element name="5">
          <Pricing />
        </Element>
        <Element name="6">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
