import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";

class CostsNewSlider extends Component {
  render() {
    return (
      <>
        <div className="legend">Costs decrease</div>
        <Flex>
          <input
            type="range"
            min={0}
            max={300}
            value={this.props.costsValue}
            className="slider"
            onChange={this.props.handleCostsOnChange}
          />
          <div className="valueBox">
            <p className="sliderValue">{this.props.costsValue}</p>
          </div>
        </Flex>
      </>
    );
  }
}

export default CostsNewSlider;
