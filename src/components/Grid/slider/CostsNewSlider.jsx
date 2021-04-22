import React, { Component } from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";

class CostsNewSlider extends Component {
  render() {
    return (
      <>
        <div className="sliderLegend">Costs decrease</div>
        <Flex>
          <input
            type="range"
            min={0}
            max={100}
            value={this.props.costsValue}
            className="slider "
            onChange={this.props.handleCostsOnChange}
          />
          <div className="valueBox">
            <p className="sliderValue">{this.props.costsValue} %</p>
          </div>
        </Flex>
        <Box className="sliderMinMax">
          <Flex className="sliderMinMax">
            <Box>0</Box>
            <Spacer />
            <Box>100</Box>
          </Flex>
        </Box>
      </>
    );
  }
}

export default CostsNewSlider;
