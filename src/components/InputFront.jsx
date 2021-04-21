import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import AddInputForm from "./AddInputForm";
import AddCurrentStateList from "./AddCurrentStateList";
import MainGrid from "./Grid/Grid";

function InputFront() {
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [fixedCosts, setFixedCosts] = useState(0);
  const [cogs, setCogs] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [targetProfit, setTargetProfit] = useState(0);

  // calculations of the current state
  const revenue = volume * price;
  const totalCosts = Math.round((cogs / 100) * revenue + fixedCosts);
  const netProfit = Math.round(revenue - totalCosts);
  const ebitda = Math.round(
    netProfit + fixedCosts * 0.35 + netProfit * (taxes / 100)
  );
  const varCostsEuro = Math.round((cogs / 100) * revenue);
  // total costs = variable_costs + fixed_costs
  // variable costs = cogs in % * revenue
  // EBITDA = netProfit + amortization + deprecation + interest + netProfit * taxes%
  // amortization = fixed_costs * 0,1
  // deprecation = fixed_costs * 0,2
  // interest = fixed_costs * 0,05

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
  function handleTargetProfitChange(e) {
    setTargetProfit(parseInt(e.target.value, 10));
  }

  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={0}
    >
      <GridItem
        className="input_class"
        rowSpan={1}
        colSpan={[7, 3, 3, 2]}
        bg="brand.100"
      >
        <AddInputForm
          volume={volume}
          price={price}
          costs={fixedCosts}
          cogs={cogs}
          taxes={taxes}
          targetProfit={targetProfit}
          revenue={revenue}
          onVolumeChange={handleVolumeChange}
          onPriceChange={handlePriceChange}
          onCostsChange={handleFixedCostsChange}
          onCogsChange={handleCogsChange}
          onTaxesChange={handleTaxesChange}
          onTargetProfitChange={handleTargetProfitChange}
        />
        <AddCurrentStateList
          revenue={revenue}
          totalCosts={totalCosts}
          netProfit={netProfit}
          ebitda={ebitda}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={[7, 4, 4, 5]}>
        <MainGrid
          volume={volume}
          price={price}
          costs={fixedCosts}
          cogs={cogs}
          taxes={taxes}
          netProfit={netProfit}
          targetProfit={targetProfit}
          varCostsEuro={varCostsEuro}
        />
      </GridItem>
    </Grid>
  );
}

export default InputFront;
