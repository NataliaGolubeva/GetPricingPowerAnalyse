import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import AddInputForm from "./AddInputForm";
import AddCurrentState from "./AddCurrentState";
import OptimizationInput from "./OptimisationInput";
import BulletChart from "./charts/BulletChart";
import AddStatImpact from "./AddStatImpact";

import CandleStickChart from "./charts/CandleStickChart";

function InputFront() {
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [fixedCosts, setFixedCosts] = useState(0);
  const [cogs, setCogs] = useState(0);
  const [taxes, setTaxes] = useState(0);

  const [targetProfit, setTargetProfit] = useState(0);
  const [salesIncrease, setSalesIncrease] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);
  const [costsDecrease, setCostsDecrease] = useState(0);

  const [validation, setValidation] = useState("");

  // calculations of the current state
  const revenue = volume * price;
  const totalCosts = Math.round((cogs / 100) * revenue + fixedCosts);
  const netProfit = Math.round(revenue - totalCosts);
  const ebitda = Math.round(
    netProfit + fixedCosts * 0.35 + netProfit * (taxes / 100)
  );
  // total costs = variable_costs + fixed_costs
  // variable costs = cogs in % * revenue
  // EBITDA = netProfit + amortization + deprecation + interest + netProfit * taxes%
  // amortization = fixed_costs * 0,1
  // deprecation = fixed_costs * 0,2
  // interest = fixed_costs * 0,05

  // calculations of optimization impact of SALES increase
  const newRevenueVolumeInc = ((volume * salesIncrease) / 100 + volume) * price;
  const newTotalCostsVolumeInc = Math.round(
    (cogs / 100) * newRevenueVolumeInc + fixedCosts
  );
  const newNetProfitVolumeInc = Math.round(
    newRevenueVolumeInc - newTotalCostsVolumeInc
  );
  const difNetProfitVolumeEuro = newNetProfitVolumeInc - netProfit;
  function handleVolumePercent() {
    if (!salesIncrease) {
      return 0;
    }
    const difNetProfitVolumePercent = (
      (difNetProfitVolumeEuro / netProfit) *
      100
    ).toFixed(2);
    return difNetProfitVolumePercent;
  }
  const difNetProfitVolumePercent = (
    (difNetProfitVolumeEuro / netProfit) *
    100
  ).toFixed(2);

  // calculations of optimization impact of PRICE increase
  const newRevenuePriceInc = volume * (price + (price * priceIncrease) / 100);
  const newTotalCostsPriceInc = Math.round(
    (cogs / 100) * newRevenuePriceInc + fixedCosts
  );
  const newNetProfitPriceInc = Math.round(
    newRevenuePriceInc - newTotalCostsPriceInc
  );
  const difNetProfitPriceEuro = newNetProfitPriceInc - netProfit;
  const difNetProfitPricePercent = (
    (difNetProfitPriceEuro / netProfit) *
    100
  ).toFixed(2);
  const newPrice = price + (price * priceIncrease) / 100;
  // calculations of optimization impact of COSTS decrease
  const newTotalCostsDec = Math.round(
    (cogs / 100 - costsDecrease / 100) * revenue + fixedCosts
  );
  const newNetProfitCostsDec = Math.round(revenue - newTotalCostsDec);
  const difNetProfitCostsEuro = newNetProfitCostsDec - netProfit;
  const difNetProfitCostsPercent = (
    (difNetProfitCostsEuro / netProfit) *
    100
  ).toFixed(2);
  // total
  const optimizationTotalEuro =
    difNetProfitVolumeEuro + difNetProfitPriceEuro + difNetProfitCostsEuro;
  const optimizationTotalPercent = (
    (difNetProfitPriceEuro / netProfit +
      difNetProfitCostsEuro / netProfit +
      difNetProfitVolumeEuro / netProfit) *
    100
  ).toFixed(2);
  // target value

  const salesToTarget = (difNetProfitVolumeEuro / targetProfit) * 100;
  const priceToTarget = (difNetProfitPriceEuro / targetProfit) * 100;
  const costsToTarget = (difNetProfitCostsEuro / targetProfit) * 100;
  // ACTUAL DATA
  function handleVolumeChange(e) {
    setVolume(parseInt(e.target.value, 10));
  }
  function handlePriceChange(e) {
    setPrice(parseInt(e.target.value, 10));
  }
  function handleFixedCostsChange(e) {
    setFixedCosts(parseInt(e.target.value, 10));
  }
  function handleCogsChange(e) {
    setCogs(parseInt(e.target.value, 10));
  }
  function handleTaxesChange(e) {
    setTaxes(parseInt(e.target.value, 10));
  }

  // Optimization data
  function handleTargetProfitChange(e) {
    setTargetProfit(parseInt(e.target.value, 10));
  }
  function handleSalesIncreaseChange(e) {
    setSalesIncrease(parseInt(e.target.value, 10));
  }
  function handlePriceIncreaseChange(e) {
    setPriceIncrease(parseInt(e.target.value, 10));
  }
  function handleCostsDecreaseChange(e) {
    setCostsDecrease(parseInt(e.target.value, 10));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    //calculations();

    if (!volume) {
      setValidation("Please enter a volume of products sold");
      return;
    }
    if (!price) {
      setValidation("Please enter an average price");
      return;
    }
    if (!fixedCosts) {
      setValidation("Please enter fixed costs");
      return;
    }
    if (!cogs) {
      setValidation("Please enter COGS");
      return;
    }
    if (!taxes) {
      setValidation("Please enter taxes");
      return;
    }
    setValidation("");
  }

  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={2}
    >
      <GridItem className="input_class" rowSpan={3} colSpan={2} bg="brand.100">
        <AddInputForm
          volume={volume}
          price={price}
          costs={fixedCosts}
          cogs={cogs}
          taxes={taxes}
          targetProfit={targetProfit}
          validation={validation}
          onVolumeChange={handleVolumeChange}
          onPriceChange={handlePriceChange}
          onCostsChange={handleFixedCostsChange}
          onCogsChange={handleCogsChange}
          onTaxesChange={handleTaxesChange}
          onTargetProfitChange={handleTargetProfitChange}
          onFormSubmit={handleFormSubmit}
        />
        <OptimizationInput
          salesIncrease={salesIncrease}
          priceIncrease={priceIncrease}
          costsDecrease={costsDecrease}
          onSalesIncrease={handleSalesIncreaseChange}
          onPriceIncrease={handlePriceIncreaseChange}
          onCostsDecrease={handleCostsDecreaseChange}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <AddCurrentState
          revenue={revenue}
          totalCosts={totalCosts}
          netProfit={netProfit}
          ebitda={ebitda}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <AddStatImpact
          difNetProfitVolumeEuro={difNetProfitVolumeEuro}
          difNetProfitVolumePercent={difNetProfitVolumePercent}
          difNetProfitPriceEuro={difNetProfitPriceEuro}
          difNetProfitPricePercent={difNetProfitPricePercent}
          difNetProfitCostsEuro={difNetProfitCostsEuro}
          difNetProfitCostsPercent={difNetProfitCostsPercent}
          optimizationTotalEuro={optimizationTotalEuro}
          optimizationTotalPercent={optimizationTotalPercent}
          price={price}
          priceIncrease={priceIncrease}
          newPrice={newPrice}
          salesIncrease={salesIncrease}
          costsDecrease={costsDecrease}
        />
      </GridItem>

      <GridItem rowSpan={2} colSpan={5} bg="#95d4e7">
        <BulletChart
          sales={salesToTarget}
          price={priceToTarget}
          costs={costsToTarget}
        />
        <CandleStickChart
          volume={difNetProfitVolumeEuro}
          price={difNetProfitPriceEuro}
          costs={difNetProfitCostsEuro}
          total={optimizationTotalEuro}
          netProfit={netProfit}
        />
      </GridItem>
    </Grid>
  );
}

export default InputFront;
