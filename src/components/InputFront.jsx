import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import AddInputForm from "./AddInputForm";
import AddCurrentState from "./AddCurrentState";

function InputFront() {
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [fixedCosts, setFixedCosts] = useState(0);
  const [cogs, setCogs] = useState(0);
  const [taxes, setTaxes] = useState(0);

  const [targetProfit, setTargetProfit] = useState(0);
  const [validation, setValidation] = useState("");

  const [revenue, setRevenue] = useState(volume * price);
  const [totalCosts, setTotalCosts] = useState((cogs / 100) * revenue);
  const [netProfit, setNetProfit] = useState(revenue - totalCosts);
  const [ebitda, setEbitda] = useState(0);

  // Input data
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

  // Calculations
  function handleRevenueChange() {
    setRevenue(volume * price);
  }
  function handleTotalCostsChange() {
    setTotalCosts((cogs / 100) * revenue + fixedCosts);
  }
  // total costs = variable_costs + fixed_costs
  // variable costs = cogs in % * revenue

  function handleNetProfitChange() {
    setNetProfit(revenue - totalCosts);
  }
  function handleEbitdaChange() {
    setEbitda(netProfit + fixedCosts * 0.35 + netProfit * (taxes / 100));
  }
  // EBITDA = netProfit + amortization + deprecation + interest + netProfit * taxes%
  // amortization = fixed_costs * 0,1
  // deprecation = fixed_costs * 0,2
  // interest = fixed_costs * 0,05

  function handleFormSubmit(event) {
    event.preventDefault();

    handleRevenueChange();
    handleTotalCostsChange();
    handleNetProfitChange();
    handleEbitdaChange();

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
    <Flex>
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
      <AddCurrentState
        revenue={revenue}
        totalCosts={totalCosts}
        netProfit={netProfit}
        ebitda={ebitda}
      />
    </Flex>
  );
}

export default InputFront;
