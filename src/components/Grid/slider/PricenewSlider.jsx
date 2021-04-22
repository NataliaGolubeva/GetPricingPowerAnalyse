import React, { Component } from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";

class PriceNewSlider extends Component {
  render() {
    return (
      <>
        <div className="sliderLegend">Price increase</div>
        <Flex>
          <input
            type="range"
            min={0}
            max={50}
            value={this.props.priceValue}
            className="slider"
            onChange={this.props.handlePriceOnChange}
          />
          <div className="valueBox">
            <p className="sliderValue">{this.props.priceValue} %</p>
          </div>
        </Flex>
        <Box className="sliderMinMax">
          <Flex className="sliderMinMax">
            <Box>0</Box>
            <Spacer />
            <Box>50</Box>
          </Flex>
        </Box>
      </>
    );
  }
}

export default PriceNewSlider;
