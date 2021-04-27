import React from "react";
import SalesSlider from "./slider/SalesSlider";
import PriceNewSlider from "./slider/PricenewSlider";
import CostsNewSlider from "./slider/CostsNewSlider";
import { Heading } from "@chakra-ui/react";

function AddSliderOptimization(props) {
  const {
    salesValue,
    handleSalesOnChange,
    priceValue,
    handlePriceOnChange,
    costsValue,
    handleCostsOnChange,
  } = props;
  return (
    <div className="App">
      <div className="wrapper">
        <Heading size="sm" my={1} textAlign="center" className="smallHeader">
          Optimization instruments
        </Heading>

        <SalesSlider
          salesValue={salesValue}
          handleSalesOnChange={handleSalesOnChange}
        />

        <PriceNewSlider
          priceValue={priceValue}
          handlePriceOnChange={handlePriceOnChange}
        />

        <CostsNewSlider
          costsValue={costsValue}
          handleCostsOnChange={handleCostsOnChange}
        />
      </div>
    </div>
  );
}

export default AddSliderOptimization;
