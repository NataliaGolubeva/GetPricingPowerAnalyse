import React from "react";
import { Flex } from "@chakra-ui/react";

function PriceSlider(props) {
  const { priceIncrease, onPriceIncrease } = props;
  class MySlider extends React.Component {
    state = priceIncrease;
    handleOnChange = onPriceIncrease;

    render() {
      return (
        <>
          <div className="legend">Average Price increase</div>
          <Flex>
            <input
              type="range"
              min={0}
              max={50}
              value={this.state}
              className="slider"
              onChange={this.handleOnChange}
            />
            <div className="valueBox">
              <p className="sliderValue">{this.state}</p>
            </div>
          </Flex>
        </>
      );
    }
  }
  return <MySlider />;
}

export default PriceSlider;
