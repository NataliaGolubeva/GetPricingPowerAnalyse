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
          <StatNumber>{volumeDif} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {volumeDifPercent} %
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Price Increase </StatLabel>
          <StatNumber>{priceDif} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {priceDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Costs Decrease </StatLabel>
          <StatNumber>{costsDif} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {costsDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total Profit</StatLabel>
          <StatNumber>{sumEuro} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {sumPercent} %
          </StatHelpText>
        </Stat>
      </StatGroup>
      <StatGroup align="center" mt={4}>
        <Stat className="currentPrice">
          <StatLabel>Current price</StatLabel>
          <StatNumber>{price} €</StatNumber>
          <StatHelpText>Average</StatHelpText>
        </Stat>

        <Stat className="newPrice">
          <StatLabel>New Price</StatLabel>
          <StatNumber>{newPrice} €</StatNumber>
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
