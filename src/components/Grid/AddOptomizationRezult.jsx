import React from "react";
import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Heading,
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
      <>
        <Heading mb={3} align="center" size="sm"></Heading>
      </>
    );
  }
  return (
    <div className="statImpact">
      <Heading align="center" my={2} size="sm" className="smallHeader">
        Optimization impact
      </Heading>

      <StatGroup align="center">
        <Stat>
          <StatLabel>Volume sold</StatLabel>
          <StatNumber>{volumeDif} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {volumeDifPercent} %
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Average Price</StatLabel>
          <StatNumber>{priceDif} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {priceDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Costs Decrease</StatLabel>
          <StatNumber>{costsDif} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {costsDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total</StatLabel>
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
