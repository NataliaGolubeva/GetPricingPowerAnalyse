import React from "react";
import { Flex } from "@chakra-ui/react";

function CostsSlider(props) {
  const { costsDecrease, onCostsDecrease } = props;
  class MySlider extends React.Component {
    state = costsDecrease;
    handleOnChange = onCostsDecrease;

    render() {
      return (
        <>
          <div className="legend">Costs decrease</div>
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

export default CostsSlider;
