import React from "react";

import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Heading,
  Image,
} from "@chakra-ui/react";
function AddOptomizationRezult(props) {
  const {
    salesValue,
    priceValue,
    costsValue,
    price,
    newPrice,
    volumeDif,
    volumeDifPercent,
    priceDif,
    priceDifPercent,
    costsDif,
    costsDifPercent,
    sumEuro,
    sumPercent,
  } = props;
  function formatValue(val) {
    return val.toLocaleString("fi-FI");
  }
  if (!salesValue && !priceValue && !costsValue) {
    return (
      <div className="statImpact">
        <Image
          src="./images/project-costs.png"
          alt="Calculating costs"
          boxSize="230px"
          objectFit="cover"
          className="image"
        />
      </div>
    );
  }
  return (
    <div className="statImpact">
      <Heading align="center" my={2} size="sm" className="smallHeader">
        Impact of optimization on profit
      </Heading>

      <StatGroup align="center">
        <Stat>
          <StatLabel>Sales Increase </StatLabel>
          <StatNumber>{formatValue(volumeDif)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {volumeDifPercent} %
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Price Increase </StatLabel>
          <StatNumber>{formatValue(priceDif)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {priceDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Costs Decrease </StatLabel>
          <StatNumber>{formatValue(costsDif)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {costsDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total Profit</StatLabel>
          <StatNumber>{formatValue(sumEuro)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {sumPercent} %
          </StatHelpText>
        </Stat>
      </StatGroup>
      <StatGroup align="center" mt={4}>
        <Stat className="currentPrice">
          <StatLabel>Current price</StatLabel>
          <StatNumber>{formatValue(price)} €</StatNumber>
          <StatHelpText>Average</StatHelpText>
        </Stat>

        <Stat className="newPrice">
          <StatLabel>New Price</StatLabel>
          <StatNumber>{formatValue(newPrice)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {priceValue} %
          </StatHelpText>
        </Stat>
      </StatGroup>
    </div>
  );
}

export default AddOptomizationRezult;
