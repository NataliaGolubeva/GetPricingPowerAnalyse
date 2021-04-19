import React from "react";
import { Flex } from "@chakra-ui/react";

function Slider(props) {
  const { salesIncrease, onSalesIncrease } = props;
  class MySlider extends React.Component {
    state = salesIncrease;
    handleOnChange = onSalesIncrease;

    render() {
      return (
        <>
          <div className="legend">Sales Target increase</div>
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

export default Slider;
