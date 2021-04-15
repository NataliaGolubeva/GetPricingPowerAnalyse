import React, { Component } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import PriceSlider from "./PriceSlider";
import CostsSlider from "./CostsSlider";
import { Heading } from "@chakra-ui/react";

const Styles = styled.div`
  .App {
    display: flex;
    justify-content: center;
    color: white;
  }
  .wrapper {
    width: 100%;
  }
`;
function AddSlider(props) {
  const {
    salesIncrease,
    priceIncrease,
    costsDecrease,
    onSalesIncrease,
    onPriceIncrease,
    onCostsDecrease,
  } = props;

  class App extends Component {
    render() {
      return (
        <Styles>
          <div className="App">
            <div className="wrapper">
              <Heading size="sm" my={3} textAlign="center">
                Optimisation in %
              </Heading>
              <Slider
                salesIncrease={salesIncrease}
                onSalesIncrease={onSalesIncrease}
              />
              <PriceSlider
                priceIncrease={priceIncrease}
                onPriceIncrease={onPriceIncrease}
              />
              <CostsSlider
                costsDecrease={costsDecrease}
                onCostsDecrease={onCostsDecrease}
              />
            </div>
          </div>
        </Styles>
      );
    }
  }

  return <App />;
}

export default AddSlider;
