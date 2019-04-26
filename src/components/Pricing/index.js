import React, { Component } from "react";
import MyButton from "../Utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, voluptate laudantium voluptatibus consequatur at eius architecto autem, fugiat dolorem ducimus provident hic ad quod minima molestiae, dolore totam cupiditate. Ullam.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, voluptate laudantium voluptatibus consequatur at eius architecto autem, fugiat dolorem ducimus provident hic ad quod minima molestiae, dolore totam cupiditate. Ullam!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, voluptate laudantium voluptatibus consequatur at eius architecto autem, fugiat dolorem ducimus provident hic ad quod minima molestiae, dolore totam cupiditate. Ullam?"
    ],
    linkto: ["http://k.ro", "http://kappa.ro", "http://google.com"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Buy"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>PRICING</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
